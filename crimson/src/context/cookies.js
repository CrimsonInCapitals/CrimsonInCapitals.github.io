import {createContext, useContext, useEffect, useReducer} from "react";
import Cookies from "universal-cookie";

const CookiesContext = createContext(undefined);

export const CookiesProvider = ({ children }) => {
    // const [userTheme,setUserTheme] = useState(null)
    const acceptcookies = (cookies,action={accept:false,request:false})=>{
        return{...cookies,permit: action.accept,request:action.request}
    }
    // ############################################################################################################################################################# cookies object
    class CookieObject {
        constructor(){
            let cookie = new Cookies()
            this.permit = cookie.get('cookies',{path:'/'})?cookie.get('cookies',{path:'/'}):false
            this.request = cookie.get('cookies',{path:'/'})?cookie.get('cookies',{path:'/'}):false
            this.set= function(action='get',[location='misc',path='/',data='']){ // location='crimsonincapitals'+location
                if(!this.permit)return false
                let cookie =  new Cookies()
                switch(action){
                    case 'set':
                        cookie.set(location,data,{path})
                        return 'set'
                    case 'addition':
                        data = {...cookie.get(location,{path}), ...data}
                        cookie.set(location,data,{path})
                        return 'added'
                    case 'remove':
                        cookie.remove(location,{path})
                        return 'removed'
                    default:
                        return cookie.get(location,{path})
                }
            }
            this.get=function(location='misc',path='/'){
                if(!this.permit)return false
                let cookie = new Cookies()
                return cookie.get(location,{path})
            }
            this.remove=function(location='misc',path='/'){
                if(!this.permit)return false
                let cookie = new Cookies()
                return cookie.remove(location,{path})
            }
            this.check=function(){
                let cookie = new Cookies()
                return cookie.get('cookies',{path:'/'})
            }
            this.accept=function(accept,request=true){
                dispatchCookies({accept,request})
            }
        }
    }
    // ############################################################################################################################################################# defines cookies
    const [cookies,dispatchCookies]=useReducer(acceptcookies,new CookieObject())
        // ############################################################################################################################################################# 
    useEffect(()=>{
        cookies.set('set',['cookies','/',true])
    },[cookies])
    return (
        <CookiesContext.Provider value={cookies}>
            {children}
        </CookiesContext.Provider>
    );
};

export const useCookiesContext = () => useContext(CookiesContext);