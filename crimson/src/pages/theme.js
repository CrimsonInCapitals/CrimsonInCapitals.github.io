import { useEffect } from "react"
import { useThemeContext } from "../context/theme"

export const ThemeShow=()=>{
    const{theme}= useThemeContext()
    useEffect(()=>{console.log(theme)},[theme])

    return(
        <>
        <section className="input themetest" style={{backgroundColor:'#201B1B'}}>
            <button>Button</button>
           <button className="focus">Button</button>
           <button className="primary">Button</button>
        </section>
        <section className=" themetest">
           <button>Button</button>
           <button className="focus">Button</button>
           <button className="primary">Button</button>
        </section>
        <section className="ribbon themetest" style={{backgroundColor:'#494646'}}>
           <button>Button</button>
           <button className="focus">Button</button>
           <button className="primary">Button</button>
        </section>
        <section className="card themetest" style={{backgroundColor:'#3B3838'}}>
           <button>Button</button>
           <button className="focus">Button</button>
           <button className="primary">Button</button>
        </section>

        </>
    )
}

