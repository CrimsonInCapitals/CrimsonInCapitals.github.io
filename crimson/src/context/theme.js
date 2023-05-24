import {createContext, useContext, useEffect, useReducer} from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const themeAbsolutes ={
        LightMode:{
            Background: '#d7cfc8',
            Card: {Background:'#efeeec',Accent:'#ffffff',Ribbon:'#f0eeee'},
            TextStyle: {Heading1:{color:'#161616'},Heading2:{color:'#786d6d'},CardHeading:{color:'#161616'},Paragraph:{color:'#161616'},CardParagraph:{color:'#161616'},Aside:{color:'#161616'}},
            Field:'#c1b8b0',
            Shadow: '0 0 20px 4px rgba(0,0,0,0.25)',
            Button:{
                primary: {
                    default:{border: 'solid 1px #FEFEFE', backgroundColor: '#F0EFEF', color:'#817777'},
                    hover:{border: 'solid 1px #FFFFFF', backgroundColor: '#F9F9F9', color:'#817777'},
                    disabled:{backgroundColor: '#C0B8B5', color:'#817777'},
                },
                second:{
                    default:{border: 'solid 1px #524E4E', backgroundColor: '#3B3838', color:'#F0EEEE'},
                    hover:{border: 'solid 1px #5A5A5A', backgroundColor: '#f0eeee', color:'#F0EEEE'},
                    disabled:{backgroundColor: '#3C3737', color:'#817777'},
                },
                third:{
                    default:{border: 'solid 1px #ffffff', backgroundColor: '#f0eeee', color:'#161616'},
                    hover:{border: 'solid 1px #ffffff', backgroundColor: '#494646', color:'#161616'},
                    disabled:{backgroundColor: '#3C3737', color:'#161616'},
                },
                red:{
                    default:{border: 'solid 1px #981912', backgroundColor: '#C00A00', color:'#E4DFDD'},
                    hover:{border: 'solid 1px #B1231B', backgroundColor: '#E3281E', color:'#E4DFDD'},
                    disabled:{backgroundColor: '#4F4F4F', color:'#E4DFDD'},
                }
            },            IconSource: 'dark/'
        },
        DarkMode:{
            Background:'#282222',
            Card:{Background:'#3b3838',Accent:'#5a5a5a',Ribbon:'#4d4d4d'},
            TextStyle:{Heading1:{color:'#D7CFC8'},Heading2:{color:'#D7CFC8'},CardHeading:{color:'#f0eeee'},Paragraph:{color:'#D7CFC8'},CardParagraph:{color:'#D7CFC8'},Aside:{color:'#d7cfc8'}},
            Field: '#161010',
            Shadow: '0 0 20px 4px rgba(00,00,00,0.25)',
            Button:{
                primary: {
                    default:{border: 'solid 1px #585454', backgroundColor: '#494646', color:'#F0EEEE'},
                    hover:{border: 'solid 1px #6C6C6C', backgroundColor: '#5A5A5A', color:'#F0EEEE'},
                    disabled:{backgroundColor: '#4F4F4F', color:'#817777'},
                },
                second:{
                    default:{border: 'solid 1px #524E4E', backgroundColor: '#3B3838', color:'#F0EEEE'},
                    hover:{border: 'solid 1px #5A5A5A', backgroundColor: '#3B3838', color:'#F0EEEE'},
                    disabled:{backgroundColor: '#3C3737', color:'#817777'},
                },
                third:{
                    default:{border: 'solid 1px #ffffff', backgroundColor: '#f0eeee', color:'#161616'},
                    hover:{border: 'solid 1px #ffffff', backgroundColor: '#494646', color:'#161616'},
                    disabled:{backgroundColor: '#3C3737', color:'#161616'},
                },
                red:{
                    default:{border: 'solid 1px #981912', backgroundColor: '#C00A00', color:'#E4DFDD'},
                    hover:{border: 'solid 1px #B1231B', backgroundColor: '#E3281E', color:'#E4DFDD'},
                    disabled:{backgroundColor: '#4F4F4F', color:'#E4DFDD'},
                }
            },
            IconSource: 'light/'
        }

    }




    // const [userTheme,setUserTheme] = useState(null)
    const getTheme = (theme,action={set: 'default'})=>{
        if(action.set === 'dark'){ return true}
        else if(action.set === 'light'){return false}
        let systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        theme.ToggleMode(systemTheme.matches===!theme.dark)
        return  {...theme}
    }
    const mode = window.matchMedia('(prefers-color-scheme: dark)').matches? 'DarkMode':'LightMode'
    const themeConstruct ={
        mode: mode,
        dark: window.matchMedia('(prefers-color-scheme: dark').matches,
        ...themeAbsolutes[mode],
        ToggleMode: function(toggle=false){
            if(toggle)this.dark=!this.dark
            let mode = this.dark? 'DarkMode': 'LightMode' 
                this.Background=themeAbsolutes[mode].Background
                this.Card=themeAbsolutes[mode].Card
                this.Text=themeAbsolutes[mode].Text
                this.Shadow=themeAbsolutes[mode].Shadow
                this.Button=themeAbsolutes[mode].Button
                this.Field=themeAbsolutes[mode].Field
                this.IconSource=themeAbsolutes[mode].IconSource
        },
    }
    const [theme,disbatchTheme] = useReducer(getTheme,themeConstruct)
    useEffect(()=>{disbatchTheme()},[theme.dark,window])
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);
