import {createContext, useContext, useEffect, useReducer} from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const themeAbsolutes ={
        LightMode:{
            Background: '#d7cfc8',
            Card: '#efeeec',
            Text: '#161616',
            Shadow: '0 0 20px 4px #fff5ed',
            Button: {primary: ''}
        },
        DarkMode:{
            Background:'#080808',
            Card:'#161616',
            Text:'#d7cfc8',
            Shadown: '0 0 20px 4px black',
            Button:{primary:''}
        }

    }




    // const [userTheme,setUserTheme] = useState(null)
    const getTheme = (theme,action={set: 'default'})=>{
        if(action.set === 'dark'){ return true}
        else if(action.set === 'light'){return false}
        let systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        console.log(systemTheme)
        theme.ToggleMode(systemTheme.matches===theme.dark)
        return  {...theme}
    }
    const themeConstruct ={
        dark: window.matchMedia('(prefers-color-scheme: dark'),
        ToggleMode: function(set=false){
            let mode = ''
            if(set)this.dark=!this.dark
            this.dark? mode = 'LightMode': mode = 'DarkMode'
                this.Background=themeAbsolutes[mode].Background
                this.Card=themeAbsolutes[mode].Card
                this.Text=themeAbsolutes[mode].Text
                this.Shadow=themeAbsolutes[mode].Shadow
                this.Button=themeAbsolutes[mode].Button
                this.dark = !this.dark
        },
    }
    const [theme,disbatchTheme] = useReducer(getTheme,themeConstruct)
    useEffect(()=>{disbatchTheme()},[theme.dark])
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);