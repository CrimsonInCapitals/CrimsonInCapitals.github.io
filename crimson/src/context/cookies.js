import {createContext, useContext, useEffect, useReducer} from "react";
import Cookies from "universal-cookie";

const CookiesContext = createContext(undefined);

export const CookiesProvider = ({ children }) => {
    // const [userTheme,setUserTheme] = useState(null)
    const acceptcookies = (cookies,action={accept:false,request:false})=>{
        return{...cookies,permit: action.accept,request:action.request}
    }
    const defaultstate = {
        permit: false,
        request: false,
        set:function(action='get',[location='misc',path='/',data='']){
            // location='crimsonincapitals'+location
            if(!this.permit && action !=='get')return 'disabled'
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
        },
        get:function(location='misc',path='/'){
            let cookie = new Cookies()
            return cookie.get(location,{path})
        },
        remove:function(location='misc',path='/'){
            let cookie = new Cookies()
            return cookie.remove(location,{path})
        }
    }
    const [cookies,disbatchCookies]=useReducer(acceptcookies,defaultstate)
    useEffect(()=>{
        cookies.set('get',['cookies','/',true]) && disbatchCookies({accept: true,request:true})
        cookies.set('set',['cookies','/',true])
    },[cookies.permit])
    return (
        <CookiesContext.Provider value={[cookies,disbatchCookies]}>
            {children}
        </CookiesContext.Provider>
    );
};

export const useCookiesContext = () => useContext(CookiesContext);