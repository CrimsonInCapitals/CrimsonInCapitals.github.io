import { Children, cloneElement, createContext, useContext, useEffect, useReducer, useRef, useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const FullScreenContext = createContext()
export const FullScreenProvider = ({children})=>{
    const displayingRef=useRef(null)
    const reducer=(state,[type,data])=>{
        switch (type) {
            case 'close':
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
                    Object:()=>data.list[data.showing]
                }
            default:
                return{
                    open:true,
                    type:type,
                    ...data,
                }  
        }
    }
    const [content, dispatchContent]=useReducer(reducer,{open:false})
    const close =()=>dispatchContent(['close'])
    return(
        <FullScreenContext.Provider value={{dispatchContent,content}}>
            <>{children}
            {content.open && 
            <div className="fullscreenholder layer_one" >
                <TransformWrapper>
                    <TransformComponent center>
                        <content.Object ref={displayingRef}/>
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
                {content.type=='video'&&
                <span className="reelBar">CurrentTime:{showing}</span>
                }   

            </div>
            }
            </>
        </FullScreenContext.Provider>
    )
}

export const useFullScreenContext = ()=>useContext(FullScreenContext)


export const IMG=(atributes)=>{
    const {dispatchContent,content}=useFullScreenContext()
    const update =()=>{
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
    const {dispatchContent}=useFullScreenContext()
    const [play,setPlay]=useState(false)
    const [localCT,setLocalCT]=useState(0)
    const [durPer,setDurPer]=useState(0)
    const [durFull,setDurFull]=useState(undefined)
    const update =()=>{
        let video = videoRef.current
        dispatchContent(['video',{
            Object:()=><video currentTime={video.currentTime} autoPlay>{children}</video>,
            currentTime:localCT
        }])
        handlePlayPause(false)
    }
    const handleTimeUpdate=()=>{
        if(!videoRef.current)return 
        let current = videoRef.current
        setLocalCT(current.currentTime)
        setDurPer((100/current.duration) * current.currentTime)
        setDurFull(current.duration)
        if(current.currentTime == current.duration){
            handlePlayPause(false)
            setLocalCT(0)
            setDurPer(0)
            setCurrentTime(localCT)
        }
    }
    const setTime=(e)=>{
        let target = e.target.className == 'bar'?e.target.getBoundingClientRect():e.target.parentElement.getBoundingClientRect()
        let percent = (100/target.width) * (e.pageX - target.x)
        let newTime = (durFull/100)*percent
        console.log(e.target.className)
        setLocalCT(newTime)
        setDurPer(percent)
        videoRef.current.currentTime=newTime
    }
    const handlePlayPause =(e,force='toggle')=>{
        if (!videoRef.current) return;
        let newState = force == 'toggle'? !play:force
        if (!newState) videoRef.current.pause();
        else videoRef.current.play().catch((err) => console.error("Error playing video:", err));
        setPlay(newState);
    }
    return(
        <div {...atributes} className="videoHolder">
        <video 
            ref={videoRef} 
            onClick={update}
            onTimeUpdate={handleTimeUpdate}
        >
            {children}
        </video>

        {durPer==0 ? <button className="PlayButton" onClick={handlePlayPause}>
            <p>Play</p>
        </button>:        
        <div className="duration">
            <button onClick={handlePlayPause} className="Play"><p>{play? '| |' : '|>'}</p></button>
            <div className="bar" ref={progressRef} onClick={setTime}>
                <div style={{width:durPer+'%'}} className="progress"></div>
            </div>
                <small className="timeStamp">{(localCT/60)>=1&&(localCT/60).toFixed(0)+':'}{(localCT%60).toFixed(0).padStart(2,'0')}/{(durFull/60)>=1&&(durFull/60).toFixed(0)}:{(durFull%60).toFixed(0).padStart(2,'0')}</small>
        </div>}
        </div>
    )
}


export const Reel=({children,col=3,con=2})=>{
    const {dispatchContent}=useFullScreenContext()
    const update=(item)=>{
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