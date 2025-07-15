import {createContext, useContext, useEffect, useReducer, useState} from "react";

const ThemeContext = createContext(undefined);
export const Light=['#FFFFF','#F0EEEE','#E4DFDD','#D7CFC8','#C1B8B0']
//  base, standard, highlight, reses, focal
export const Dark=['#5A5A5A','#494646','#3B3838','#282222','#161010']
export const Red=['#FFFFF','#F0EEEE','#E4DFDD','#D7CFC8','#C1B8B0']

export const ThemeProvider = ({ children }) => {

    class ThemeObject {
        constructor(theme=window.matchMedia('(prefers-color-scheme: dark)').matches? 'DarkMode':'LightMode'){
            this.Set = function(theme=window.matchMedia('(prefers-color-scheme: dark)').matches? 'DarkMode':'LightMode'){
                setTheme(new ThemeObject(theme))
            }

            switch(theme){
                case 'LightMode':
                    this.palette = Light
                    this.textPalette = Dark
                    this.mode = 'LightMode'
                    this.IconSource = 'dark/'
                    break;
                default:
                    this.palette = Dark
                    this.textPalette = Light
                    this.mode = 'DarkMode'
                    this.IconSource = 'light/'
            }
            this.DarkMode={}
            this.DarkMode.style={}
            this.DarkMode.style.main={
                header:{backgroundColor:'#201B1B',border:'2px solid'},
                card:{backgroundColor:'#3B3838', shadow:'5px 5px 5px black'}
            }
            this.DarkMode.style.card={}
            this.DarkMode.style.ribbon={}
            this.LightMode={}
            this.LightMode.style={}
            this.LightMode.style.main={
                  header:{backgroundColor:'#FFFFFF',border:'2px solid'},
                card:{backgroundColor:'#FFFFFF', shadow:'5px 5px 5px black'}
            }
            this.LightMode.style.card={}
            this.LightMode.style.ribbon={}


            this.background = {backgroundColor:this.palette[3]}
            this.card = {accent:this.palette[0],ribbon:this.palette[1],background:this.palette[2]}
            this.textStyle = {h1:{color:this.textPalette[3]},h2:{color:this.textPalette[3]},h3:{color:this.textPalette[4]},p:{color:this.textPalette[2]},ch1:{color:this.textPalette[2]},ch2:{color:this.textPalette[2]},ch3:{color:this.textPalette[3]},cp:{color:this.textPalette[1]},a:{color: this.textPalette,opacity:'40%'}}
            this.field = this.palette[1]
            this.class={}
            this.class.button = {
                primary: ' '+this.mode+' primary ',
                default: ' '+this.mode+' default ',
                facebookBlue:' '+'facebook_primary'
            }
        }
    }
    const [theme,setTheme] = useState(new ThemeObject())
    const C=({element,parent='main',mode=theme.mode})=>'themed '+theme[mode].class[parent][element]
    const S=({element,properties=undefined,parent='main',mode=theme.mode})=>{
        let style = {}
        if(!properties)return {...theme[mode].style[parent][element]}
        let location = theme[mode].style[parent]
        let main = theme[mode].style.main
        properties.map((prop)=>{
            if(location[element][prop] || location[element].border && /border/i.test(prop)){}
            else if(main[element][prop] || main[element].border && /border/i.test(prop))location = main
            else if(main[element])return
            style[prop]=/border/i.test(prop)?location[element].border:location[element][prop]
        })
        return {...style}
    }
    return (
        <ThemeContext.Provider value={{theme,C,S}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);


export const Main =({children,className})=>{
    const{theme}= useThemeContext()
    return(
        <main className={className} style={theme.background} id={theme.mode}>
            {children}
        </main>
    )
}