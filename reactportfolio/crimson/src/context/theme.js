import {createContext, useContext, useEffect, useReducer, useState} from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
      // const [isDarkMode, setIsDarkMode] = useState(true);
    // useEffect(() => {
    //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //   setIsDarkMode(mediaQuery.matches);
    //   console.log('query:'+mediaQuery.matches)
    //   const handler = event => setIsDarkMode(event.matches);
    //   mediaQuery.addEventListener('change', handler);
    //   return () => mediaQuery.removeEventListener('change', handler);
    // }, [isDarkMode]);
    const [userTheme,setUserTheme] = useState(null)
    const getTheme = (theme,action={set: 'default'})=>{
        if(action.set == 'dark'){return true}
        else if(action.set === 'light'){return false}
        const themeIsDark = window.matchMedia('(prefers-color-scheme: dark)')
        return  themeIsDark.matches
    }

    const [theme,disbatchTheme] = useReducer(getTheme)
    useEffect(()=>{disbatchTheme()},[])
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);