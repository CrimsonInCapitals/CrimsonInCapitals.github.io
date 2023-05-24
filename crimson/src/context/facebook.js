import { createContext, useContext, useEffect, useReducer } from "react";
import { useCookiesContext } from "./cookies";

const facebookContext = createContext(undefined)

export const FacebookProvider =({children})=>{
    const cookies = useCookiesContext()

    const updateFacebook = (state,action)=>{
        if(action.function){
            state.dispatch = true
            state[action.function](action)
            state.dispatch = false
        }
        return{...state}
    }
    class FacebookObject {
        constructor(){
            this.status ='unset'
        }
    }
    const facebookdefault = {
        status:"unset",
        dispatch:false,
        getUser:function(access_token=this.access_token){
                window.FB.api('/me','GET',{'fields':'id,first_name,last_name,email',access_token},
                function(response){
                    if(response.error)dispatchFacebook({task:'error',response})
                    else dispatchFacebook({function:'dispatchUser',response})
                })
        },
        dispatchUser: function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            if(this.status === 'unset'){
                this.status = 'connected';
                this.access_token= cookies.get('Facebook').access_token;
            }
            this.user=action.response;
        },
        getPages: function (access_token=facebook.access_token){
            window.FB.api('/me/accounts','GET',{access_token,'fields':'cover,access_token,name,me,instagram_business_account'},function(response){
                if(response.error)dispatchFacebook({task:'error',response})
                else dispatchFacebook({function:'dispatchPages',response})
            })
        },
        dispatchPages:function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            this.pages = {}
            for(let i in action.response.data){
                this.pages[action.response.data[i].id] = action.response.data[i]
            }
            this.pages.summary=action.response.data.map((page)=>page.id)
        },
        getInstagramPosts:function(page,limit=9,pretty=0){
            let access_token = page.access_token
            let Id = page.instagram_business_account.id
            let fields='caption,username,like_count,media_type,children,thumbnail_url,media_url,timestamp'
            window.FB.api(Id+'/media','GET',{access_token,pretty,limit,fields},function(response){
                dispatchFacebook({function: 'dispatchInstagramPosts',response,page:page.id})
            })
        },
        dispatchInstagramPosts:function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            if(!this.pages[action.page].posts)this.pages[action.page].posts = {summary:[]}
            for(let i in action.response.data){
                if(!this.pages[action.page].posts[action.response.data[i].id])this.pages[action.page].posts.summary.push(action.response.data[i].id)
                action.response.data[i].type = 'Instagram';
                action.response.data[i].created_time = action.response.data[i].timestamp
                this.pages[action.page].posts[action.response.data[i].id] = action.response.data[i]
            }
        },
        getFacebookPosts: function(page,limit=9,pretty=0){
            const access_token = page.access_token
            const fields = "attachments,application,full_picture,message,created_time,reactions.limit(0).summary(total_count),reactions.type(WOW).limit(0).summary(total_count).as(reaction_wow),reactions.type(LOVE).limit(0).summary(total_count).as(reaction_love),reactions.type(LIKE).limit(0).summary(total_count).as(reaction_like),reactions.type(HAHA).limit(0).summary(total_count).as(reaction_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reaction_angry),reactions.type(SAD).limit(0).summary(total_count).as(reaction_sad),reactions.type(THANKFUL).limit(0).summary(total_count).as(reaction_thankful),reactions.type(PRIDE).limit(0).summary(total_count).as(reaction_pride),reactions.type(CARE).limit(0).summary(total_count).as(reaction_care),reactions.type(FIRE).limit(0).summary(total_count).as(reaction_fire),reactions.type(HUNDRED).limit(0).summary(total_count).as(reaction_hundred)"
            window.FB.api('me/posts','GET',{access_token,pretty,fields,limit},function(response){
                dispatchFacebook({function: 'dispatchFacebookPosts',response,page:page.id})
            })
        },
        dispatchFacebookPosts:function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            if(!this.pages[action.page].posts)this.pages[action.page].posts = {summary:[]}
            for(let i in action.response.data){
                if(!this.pages[action.page].posts[action.response.data[i].id])this.pages[action.page].posts.summary.push(action.response.data[i].id)
                action.response.data[i].type = 'Facebook';
                this.pages[action.page].posts[action.response.data[i].id] = action.response.data[i]
            }
        },
        getFacebookPost: function(page,id){
            const access_token = page.access_token
            const fields = "attachments,application,full_picture,message,created_time,reactions.limit(0).summary(total_count),reactions.type(WOW).limit(0).summary(total_count).as(reaction_wow),reactions.type(LOVE).limit(0).summary(total_count).as(reaction_love),reactions.type(LIKE).limit(0).summary(total_count).as(reaction_like),reactions.type(HAHA).limit(0).summary(total_count).as(reaction_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reaction_angry),reactions.type(SAD).limit(0).summary(total_count).as(reaction_sad),reactions.type(THANKFUL).limit(0).summary(total_count).as(reaction_thankful),reactions.type(PRIDE).limit(0).summary(total_count).as(reaction_pride),reactions.type(CARE).limit(0).summary(total_count).as(reaction_care),reactions.type(FIRE).limit(0).summary(total_count).as(reaction_fire),reactions.type(HUNDRED).limit(0).summary(total_count).as(reaction_hundred)"
            window.FB.api(id,'GET',{access_token,fields},
                function(response){
                    dispatchFacebook({function: 'dispatchPost',response,page:page.id,type:'Facebook'})
                }
            )
        },
        getInstagramPost: function(page,id){
            let access_token = page.access_token
            let fields='comments_count,id,thumbnail_url,media_url,media_type,like_count,caption'
            window.FB.api(id,'GET',{access_token,fields},
                function(response){
                        dispatchFacebook({function: 'dispatchPost',response,page:page.id,type:'Instagram'})

                }
            )
        },
        dispatchPost:function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            this.pages[action.page].post  = {...action.response,type:action.type}
        },
        checkLoginStatus:function(){
            if(!window.FB)return
            window.FB.getLoginStatus(function(response){//is a user logged in?
                dispatchFacebook({function:'dispatchLoginStatus',response})
            })
        },
        dispatchLoginStatus: function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            switch(action.response.state){
                case 'connected':
                    this.status = 'connected'
                    this.access_token = action.response.authResponse.accessToken
                    break
                case 'not_authorized':
                    break;
                default:
            }
        },
        Login:function(){
            window.FB.login(function(response){
                console.log(response)
                if(response.error)return 'error'
                if(response.status && response.status === 'connected'){dispatchFacebook({response,function:'dispatchLogin'});return 'success'}
                return 'Login not succesfull'

            },
            {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'})
        },
        dispatchLogin: function(action){
            if(!this.dispatch)return 'this function can only be called by the dispatch function'
            if(action.response.error)this.status = 'error'
            else{
            this.status = 'connected'
            this.access_token = action.response.authResponse.accessToken
            }
        },
        access_token: cookies.get('Facebook')?cookies.get('Facebook').access_token: undefined,
        dispatchToken:function(action=false){
            if(!action)dispatchFacebook({function: 'dispatchToken'})
            else {console.log(cookies.get('Facebook'))
                this.access_token = cookies.get('Facebook').access_token}
        }
    }

    const [facebook,dispatchFacebook] = useReducer(updateFacebook,facebookdefault)

    useEffect(()=>{// adds access token from cookie when it loads
        cookies.permit === true && facebook.dispatchToken()
    },[cookies.permit])


    useEffect(()=>{//updates cookie
        if(facebook.status === 'connected')cookies.set('set',['Facebook','/',{status: facebook.state,access_token:facebook.access_token}])
        if(facebook.satus === 'error')cookies.remove('Facebook')
    },[facebook])


    useEffect(()=>{
        if(!window.FB)return
        if(facebook.status === 'connected'){
            if(!facebook.pages)facebook.getPages()
            if(!facebook.user)facebook.getUser()
        }
        else if(facebook.access_token && facebook.status === 'unset'){
            console.log('here')
            facebook.getUser(facebook.access_token)
            return
        }
        else {facebook.checkLoginStatus()}
    },[facebook.status,facebook.access_token,window.FB,cookies])

    return(
        <facebookContext.Provider value={facebook}>
            {children}
        </facebookContext.Provider>
    )
}
export const useFacebookContext =()=> useContext(facebookContext)