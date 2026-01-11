import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] =useState(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')
    useEffect(()=>{
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=> {
            setTheme(e.matches?'dark':'light')
        });
    },[])
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);