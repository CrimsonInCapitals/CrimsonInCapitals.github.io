import React, { Children, cloneElement, createContext, useContext, useEffect, useReducer, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const FullScreenContext = createContext()
export const FullScreenProvider = ({children})=>{
    const displayingRef=useRef(null)
    const [hideMenu,setHideMenu]=useState(false)
    const reducer=(state,[type,data])=>{
        switch (type) {
            case 'close':
                setHideMenu(false)
                return{open:false}
            case 'next':
                let next = state.showing+2>state.list.length?0:state.showing+1
                 return{...state,showing: next,Object:()=>state.list[next]}
            case 'back':
                let back = state.showing-1<0?state.list.length-1:state.showing-1
                 return{...state,showing: back,Object:()=>state.list[back]}
            case 'jump':
                return{...state,showing: data,Object:()=>state.list[data]}
            case 'reel':
                return{
                    open:true,
                    type:type,
                    ...data,
                    Object:()=>data.list[data.showing],
                    objectRef:displayingRef
                }
            default:
                return{
                    open:true,
                    type:type,
                    ...data,
                    objectRef:displayingRef
                }  
        }
    }
    const [content, dispatchContent]=useReducer(reducer,{open:false})
    const close =()=>dispatchContent(['close'])
    const location = useLocation()
    useEffect(()=>{
        close()
    },[location])
    return(
        <FullScreenContext.Provider value={{dispatchContent,content,displayingRef,hideMenu,setHideMenu}}>
            <>{children}
            {content.open && 
            <div className="fullscreenholder layer_one" >
                <TransformWrapper >
                    <TransformComponent center>
                        <content.Object ref={displayingRef} onClick={close}/>
                    </TransformComponent>
                </TransformWrapper>
                <button className="closebutton actionbutton  layer_two" onClick={close}><p>Close</p></button>
                {content.type=='reel' && 
                <span className="reelBar">
                    <button className="forwardbutton actionbutton layer_two" onClick={()=>dispatchContent(['back'])}><p>Back</p></button>
                    <div className="reelImgHolder">
                    {Children.map(content.list,(child,index)=>{
                        return cloneElement(child, {onClick:()=>dispatchContent(['jump',index])})
                    })}
                    </div>
                    <button className="backbutton actionbutton layer_two" onClick={()=>dispatchContent(['next'])}><p>Next</p></button>
                </span>
                } 

            </div>
            }
            </>
        </FullScreenContext.Provider>
    )
}

export const useFullScreenContext = ()=>useContext(FullScreenContext)


export const IMG=(atributes)=>{
    const {dispatchContent,content,setHideMenu}=useFullScreenContext()
    const update =()=>{
        setHideMenu(true)
        dispatchContent(['img',{
            Object:()=><img {...atributes}/>,
        }])
    }
    return(
        <img style={{cursor:'zoom-in'}} onClick={update}{...atributes}/>
    )
}
export const VIDEO=({children,...atributes})=>{
    const videoRef = useRef(null)
    const progressRef = useRef(null)
    const {setHideMenu}=useFullScreenContext()
    const controlReducer=(state,[type,data])=>{
        if(!videoRef.current)return{play:false}
        let video = videoRef.current
        switch (type) {
            case 'start':
                video.play().catch((err) => console.error("Error playing video:", err));
                return{
                    play:true,
                    duration:video.duration,
                    currentTime:0,
                    currentTimePercent:0,
                    durationStamp: Math.floor(video.duration/60).toString().padStart(2,'0')+':'+(video.duration%60).toFixed(0).padStart(2,'0')
                }
            case 'play':
                video.play().catch((err) => console.error("Error playing video:", err));
                return{
                    play:false
                }
            case 'pause':
                video.pause()
                return {play:false}
            case 'toggle':
                if (state.play) videoRef.current.pause();
                else videoRef.current.play().catch((err) => console.error("Error playing video:", err));
                return{...state,play:!state.play};
            case 'jump':
                let bar = progressRef.current.getBoundingClientRect()
                let percent = (100/bar.width) * (data.pageX - bar.x)
                let newTime = (state.duration/100)*percent
                video.currentTime=newTime
                return{
                    ...state,
                    currentTime:newTime,
                    currentTimePercent:percent
                }
            case 'openclose':
                if(state.open==true){
                    setHideMenu(false)
                    return{
                        ...state,
                        open:false
                    }
                }
                setHideMenu(true)
                return{
                    ...state,
                    open:true
                }
            case 'playing':
                if(video.currentTime !== video.duration && video.currentTime !==0){
                    return{
                        ...state,
                        currentTime: video.currentTime,
                        currentTimePercent: (100/video.duration) * video.currentTime,
                        timeStamp: (Math.floor(video.currentTime/60).toString()).padStart(2,'0')+':'+(video.currentTime%60).toFixed(0).padStart(2,'0')
                    }
                }else{
                    setHideMenu(false)
                    video.pause()
                    video.currentTime = 0
                    return false
                }
            default: return state
        }
    }
    const [control,dispatchControl]=useReducer(controlReducer,false)  
    const open=()=>{
        if(!control)dispatchControl(['start'])
        else dispatchControl(['openclose'])
    }
    return(
        <div {...atributes} className="videoHolder">
        <div className="fsmessage"><p >Video playing in fullscreen mode</p></div>
        <video 
            ref={videoRef} 
            onClick={open}
            onTimeUpdate={()=>dispatchControl(['playing'])}
            className={control.open? 'fullscreen':'inline'}
        >
            {children}
        </video>

        {!control ? <button className="PlayButton" onClick={()=>dispatchControl(['start'])}>
            <p>Play</p>
        </button>:        
        <div className="duration">
            <button onClick={()=>dispatchControl(['toggle'])} className="Play"><p>{control.play? '| |' : '▶'}</p></button>
            <div className="bar" ref={progressRef} onClick={(e)=>dispatchControl(['jump',e])}>
                <div style={{width:control.currentTimePercent+'%'}} className="progress"></div>
            </div>
                <small className="timeStamp">{control.timeStamp} / {control.durationStamp}</small>
        </div>}
        </div>
    )
}


export const Reel=({children,col=3,con=2})=>{
    const {dispatchContent,setHideMenu}=useFullScreenContext()
    const update=(item)=>{
        setHideMenu(true)
        dispatchContent(['reel',{
            list:children,
            showing:item
        }])
    }
    const childWidth = 'calc( '+(100/(col))+'% - 8px)'
    return(
        <section className="reel">
            {Children.map(children,(child,index)=>{
                return cloneElement(child,{
                    onClick:()=>update(index),
                    style:{cursor:'zoom-in',width:childWidth}
                })
            })}
        </section>
    )
}