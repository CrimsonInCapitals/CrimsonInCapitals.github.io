import { Children, cloneElement, createContext, useContext, useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const FullScreenContext = createContext()
export const FullScreenProvider = ({children})=>{
    const [full,setFull]=useState(false)
    const [atributes,setAtributes]=useState(false)
    const [content,setContent]=useState(false)
    const [showing,setShowing]=useState(0)
    return(
        <FullScreenContext.Provider value={{setFull,setAtributes,setContent,setShowing}}>
            <>{children}
            {full && 
            <div className="fullscreenholder layer_one" >

                <TransformWrapper>
                    <TransformComponent center>
                        {Children.toArray(content)[showing]}
                    </TransformComponent>
                </TransformWrapper>
                <button className="closebutton actionbutton  layer_two" onClick={()=>setFull(false)}><p>Close</p></button>
                {content.length>1 && 
                <span className="reelBar">
                    <button className="forwardbutton actionbutton layer_two" onClick={()=>{setShowing(showing-1<0?content.length-1:showing-1)}}><p>Back</p></button>
                    <div className="reelImgHolder">
                    {Children.map(content,(child,index)=>{
                        return cloneElement(child, {onClick:()=>setShowing(index)})
                    })}
                    </div>
                    <button className="backbutton actionbutton layer_two" onClick={()=>{setShowing(showing+2>content.length?0:showing+1)}}><p>Next</p></button>
                </span>
                }    

            </div>
            }</>
        </FullScreenContext.Provider>
    )
}

export const useFullScreenContext = ()=>useContext(FullScreenContext)


export const IMG=(atributes)=>{
    const {setFull,setAtributes,setContent,setShowing}=useFullScreenContext()
    const update =()=>{
        setContent(<img {...atributes}/>)
        setAtributes(atributes)
        setFull(true)
        setShowing(0)
    }
    return(
        <img style={{cursor:'zoom-in'}} onClick={update}{...atributes}/>
    )
}


export const Reel=({children,col=3,con=2})=>{
    const {setFull,setAtributes,setContent,setShowing}=useFullScreenContext()
    const update=(item)=>{
        setContent(children)
        setShowing(item)
        setFull(true)
        console
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