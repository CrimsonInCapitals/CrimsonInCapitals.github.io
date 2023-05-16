import { createContext, useContext, useEffect, useReducer } from "react";
import { useCookiesContext } from "./cookies";

const facebookContext = createContext(undefined)

export const FacebookProvider =({children})=>{
    const [cookies,disbatchCookies] = useCookiesContext()
    const updateFacebook = (state,action)=>{
        switch(action.task){
            case 'login':
                return{
                    ...state,
                    status: action.response.status,
                    access_token: action.response.authResponse.accessToken
                }
            case 'logout':
                return{status:'unset'}
            case 'adduser':
                if(state.status === 'unset')return{...state,status:'connected',user:action.response,access_token: cookies.get('Facebook','/')}
                return{...state,user: action.response}
            case 'addpages':
                return{...state,pages: action.response.data}
            case 'error':
                return{status: 'error'}
            default: return{...state}
        }
    }
    const facebookdefault = {
        status:"unset",
        getUser:function(access_token=this.accessToken){
                window.FB.api('/me','GET',{'fields':'id,first_name,last_name,email',access_token},
                function(response){
                    if(response.error)disbatchFacebook({task:'error'})
                    else disbatchFacebook({task:'adduser',response})
                })
        },
        getPages:function(access_token=facebook.access_token){
            window.FB.api('/me/accounts','GET',{access_token},function(response){
                if(response.error)disbatchFacebook({task:'error'})
                else disbatchFacebook({task:'addpages',response})
            })
        },
        checkLogin:function(){
            window.FB.getLoginStatus(function(response){//is a user logged in?
                switch(response.status){
                    case 'connected':
                        break;
                    case 'not_authorized':
                        break;
                    default:
                }
                if(response.status === 'connected'){
                }
            })
        },
        Login:function(){
            window.FB.login(function(response){
                if(response.error)return 'error'
                if(response.status && response.status === 'connected'){disbatchFacebook({response,task:'login'});return 'success'}
                return 'Login not succesfull'

            },
            {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'})
        },
        
        ...cookies.get('Facebook')
    }

    const [facebook,disbatchFacebook] = useReducer(updateFacebook,facebookdefault)
    useEffect(()=>{
        if(facebook.status === 'connected')cookies.set('set',['Facebook','/',facebook])
        if(facebook.satus === 'error')cookies.remove('Facebook')


    },[facebook])
    useEffect(()=>{
        if(facebook.status === 'connected'){
            if(!facebook.pages)facebook.getPages()
            if(!facebook.user)facebook.getUser()
        }
        let facebookCookie = cookies.get('Facebook','/')
        if(facebookCookie && facebookCookie.accessToken && facebook.status === 'unset'){
            facebook.getUser(facebookCookie.accessToken)
            return
        }
        facebook.getLoginStatus()
       
    },[facebook.status,facebook.accessToken])
    return(
        <facebookContext.Provider value={[facebook,disbatchFacebook]}>
            {children}
        </facebookContext.Provider>
    )
}
export const useFacebookContext =()=> useContext(facebookContext)