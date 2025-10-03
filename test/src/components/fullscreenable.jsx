import { createContext, useContext, useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const FullScreenContext = createContext()
export const FullScreenProvider = ({children})=>{
    const [full,setFull]=useState(false)
    const [atributes,setAtributes]=useState(false)

    return(
        <FullScreenContext.Provider value={{setFull,setAtributes}}>
            <>{children}
            {full && 
            <div className="fullscreenholder layer_one" onClick={()=>setFull(false)}>
                <TransformWrapper>
                    <TransformComponent center>
                        <img {...atributes} />
                    </TransformComponent>
                </TransformWrapper>
                <button className="closebutton layer_two" onClick={()=>setFull(false)}><p>Close</p></button>    
            </div>
            }</>
        </FullScreenContext.Provider>
    )
}

export const useFullScreenContext = ()=>useContext(FullScreenContext)


export const IMG=(atributes)=>{
    const {setFull,setAtributes}=useFullScreenContext()
    const update =()=>{
        setAtributes(atributes)
        setFull(true)
    }
    return(
        <img style={{cursor:'zoom-in'}}{...atributes} onClick={update}/>
    )
}