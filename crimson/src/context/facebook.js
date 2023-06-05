import { createContext, useContext, useEffect, useReducer } from "react";
import { useCookiesContext } from "./cookies";
import { MonthPoint } from "../components/analytics/DatePicker";

const facebookContext = createContext(undefined)

export const FacebookProvider =({children})=>{
    const cookies = useCookiesContext()
    const updateFacebook = (state,action)=>{
        if(action.function){
            state.dispatch = true
            state[action.function](action)
            delete state.dispatch
        }
        return{...state}
    }
    class CallVariables{
        constructor(purpose,origin,page,other){
            this.access_token=page.access_token
            if(origin.timeRange){this.since = origin.timeRange.since; this.until = origin.timeRange.until}
            else{
                this.limit = other.limit? other.limit:9
                this.pretty = other.pretty? other.pretty:0
            }
            switch(purpose){
                case 'InstagramPosts':
                    this.fields='caption,username,like_count,media_type,children,thumbnail_url,media_url,timestamp'
                    break;
                case 'FacebookPosts':
                    this.fields = "attachments,application,full_picture,message,created_time,reactions.limit(0).summary(total_count),reactions.type(WOW).limit(0).summary(total_count).as(reaction_wow),reactions.type(LOVE).limit(0).summary(total_count).as(reaction_love),reactions.type(LIKE).limit(0).summary(total_count).as(reaction_like),reactions.type(HAHA).limit(0).summary(total_count).as(reaction_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reaction_angry),reactions.type(SAD).limit(0).summary(total_count).as(reaction_sad),reactions.type(THANKFUL).limit(0).summary(total_count).as(reaction_thankful),reactions.type(PRIDE).limit(0).summary(total_count).as(reaction_pride),reactions.type(CARE).limit(0).summary(total_count).as(reaction_care),reactions.type(FIRE).limit(0).summary(total_count).as(reaction_fire),reactions.type(HUNDRED).limit(0).summary(total_count).as(reaction_hundred)"
            }
            console.log(this)
    }
    }
    class FacebookObject {
        constructor(){
            this.status = 'waiting'
            let since = new MonthPoint('start').Date
            let until = new MonthPoint('end').Date
            this.timeRange ={since:since.toISOString().split('T')[0],until:until.toISOString().split('T')[0]}
            this.getUser=function(access_token=this.access_token){
                window.FB.api('/me','GET',{'fields':'id,first_name,last_name,email',access_token},
                function(response){
                    if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                    else
                    dispatchFacebook({function:'dispatchUser',response})}
                )
            }//gets basic user information
            this.dispatchUser= function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                if(this.status === 'waiting'){
                    this.status = 'connected';
                    this.access_token= cookies.get('Facebook').access_token;
                }
                this.user=action.response;
            }//adds the user object
            this.getPages= function (access_token=this.access_token){
                window.FB.api('/me/accounts','GET',{access_token,'fields':'cover,access_token,name,me,instagram_business_account,picture'},function(response){
                    if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                    else
                    dispatchFacebook({function:'dispatchPages',response})}
                )
            }// gets list of linked pages
            this.dispatchPages=function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                this.pages = {}
                for(let i in action.response.data){
                    this.pages[action.response.data[i].id] = action.response.data[i]
                }
                this.pages.index=action.response.data.map((page)=>page.id)
            }//adds pages object
            this.getInstagramPosts=function(page,limit=9,pretty=0){
                if(!page.instagram_business_account)return 'no linked instagram account'
                let id = page.instagram_business_account.id
                window.FB.api(id+'/media','GET',new CallVariables('InstagramPosts',this,page,{limit,pretty}),function(response){
                    if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                    dispatchFacebook({function: 'dispatchPosts',response,page:page.id,type:'Instagram'})
                })
            }//gets most recent limit number of posts for specified page
            this.getFacebookPosts=function(page,limit=9,pretty=0){
                window.FB.api('me/posts','GET',new CallVariables('FacebookPosts',this,page,{limit,pretty}),function(response){
                    if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                    dispatchFacebook({function: 'dispatchPosts',response,page:page.id,type:'Facebook'})
                })
            }//gets most recent limit number of posts for specified page
            this.dispatchPosts=function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                if(!this.pages[action.page].posts)this.pages[action.page].posts = {index:[]}
                for(let i in action.response.data){
                    if(!this.pages[action.page].posts[action.response.data[i].id])this.pages[action.page].posts.index.push(action.response.data[i].id)
                    action.response.data[i].type = action.type;
                    if(action.type === 'Instagram')action.response.data[i].created_time = action.response.data[i].timestamp
                    this.pages[action.page].posts[action.response.data[i].id] = action.response.data[i]
                }
                this.pages[action.page].posts.index = this.pages[action.page].posts.index.sort((a,b)=>{//orders the index by post date/created date
                    if(this.pages[action.page].posts[a].created_time > this.pages[action.page].posts[b].created_time)return -1
                    if(this.pages[action.page].posts[a].created_time === this.pages[action.page].posts[b].created_time)return 0
                    if(this.pages[action.page].posts[a].created_time < this.pages[action.page].posts[b].created_time)return  1
                })
            }// adds posts to the posts object of the relivent page, and updates the index
            this.getFacebookPost = function(page,id){
                const access_token = page.access_token
                const fields = "attachments,application,full_picture,message,created_time,reactions.limit(0).summary(total_count),reactions.type(WOW).limit(0).summary(total_count).as(reaction_wow),reactions.type(LOVE).limit(0).summary(total_count).as(reaction_love),reactions.type(LIKE).limit(0).summary(total_count).as(reaction_like),reactions.type(HAHA).limit(0).summary(total_count).as(reaction_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reaction_angry),reactions.type(SAD).limit(0).summary(total_count).as(reaction_sad),reactions.type(THANKFUL).limit(0).summary(total_count).as(reaction_thankful),reactions.type(PRIDE).limit(0).summary(total_count).as(reaction_pride),reactions.type(CARE).limit(0).summary(total_count).as(reaction_care),reactions.type(FIRE).limit(0).summary(total_count).as(reaction_fire),reactions.type(HUNDRED).limit(0).summary(total_count).as(reaction_hundred)"
                window.FB.api(id,'GET',{access_token,fields},
                    function(response){
                        if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                        dispatchFacebook({function: 'dispatchPost',response,page:page.id,platform:'Facebook'})
                    }
                )
            }//gets detailed insigts for a selected facebook post
            this.getInstagramPost = function(page,id){
                let access_token = page.access_token
                let fields='comments_count,id,thumbnail_url,media_url,media_type,like_count,caption'
                window.FB.api(id,'GET',{access_token,fields},
                    function(response){
                        if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                        dispatchFacebook({function: 'dispatchPost',response,page:page.id,platform:'Instagram'})
                    }
                )
            }//gets detailed insigts for a selected instaidgram post
            this.dispatchPost = function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                this.pages[action.page].post  = {...action.response,platform:action.platform}
            }// updates the relivent pages post atribute with the response data
            this.getInstagramPostInsights = function(post,pageId){
                let postId = post.id
                let metric = ''
                switch(post.media_type){
                    default:
                        metric = 'impressions,reach,taps_forward,taps_back,exits,replies,engagement,saved,likes,comments,shares,total_interactions,follows,profile_visits'
                }
                let period = 'day'
                window.FB.api(
                    '/'+postId+'/insights',
                    'GET',
                    {metric,period},
                    function(response) {
                        dispatchFacebook({function: 'dispatchPostInsights',response,post,pageId})
                    }
                  );
            }//gets insteraction data for instagram post
            this.dispatchPostInsights=function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                this.pages[action.page].post.insights = action.response.data
            }
            this.setTimeRange=function(a={}){
                if(!this.dispatch){
                    a.until = !a.until ? new Date().toUTCString().split('T')[0] : a.until.toISOString().split('T')[0]
                    a.since = !a.since ? new Date(new Date().getTime() - (1000 *60*60*24*31)).toISOString().split('T')[0] : a.since.toISOString().split('T')[0]
                    dispatchFacebook({function:'setTimeRange',since:a.since,until:a.until,page:a})
                }else{
                    this.timeRange = {since:a.since,until:a.until}
                    for(let i in this.pages.index)delete this.pages[this.pages.index[i]].posts
                }
            }
            this.checkLoginStatus=function(){
                if(!window.FB)return
                window.FB.getLoginStatus(function(response){//is a user logged in?
                    dispatchFacebook({function:'dispatchLoginStatus',response})}
                    )
            }//checks if user is loged in
            this.dispatchLoginStatus = function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                switch(action.response.state){
                    case 'connected':
                        this.status = 'connected'
                        this.access_token = action.response.authResponse.accessToken
                        this.getPages()
                        this.getUser()
                        break
                    case 'not_authorized':
                        this.status = 'unset'
                        break;
                    default:
                        this.status = 'unset'
                }
            }//if user is logged in it updates relivent attributes
            this.Login = function(){
                window.FB.login(function(response){
                    console.log(response)
                    if(response.error){dispatchFacebook({function:'dispatchError',response});return 'error'}
                    if(response.status && response.status === 'connected'){dispatchFacebook({response,function:'dispatchLogin'});return 'success'}
                    return 'Login not succesfull'
                },
                {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'})
            }//opens to facebook login interface and requests relivent access
            this.dispatchLogin = function(action){
                if(!this.dispatch)return 'this function can only be called by the dispatch function'
                if(action.response.error)this.status = 'error'
                else{
                this.status = 'connected'
                this.access_token = action.response.authResponse.accessToken
                this.getPages()
                this.getUser()
                }
            }//updates status
            this.dispatchToken=function(action=false){
                if(!action)dispatchFacebook({function: 'dispatchToken'})
                else {console.log(cookies.get('Facebook'))
                    this.access_token = cookies.get('Facebook').access_token}
                    this.getUser()
                    this.getPages()
            }//gets token form cookies
            this.dispatchError=function(action){
                switch(action.response.error.code){
                    case 4:
                        this.status = 'error'
                        this.error = 'Call limit reached'
                        break
                    case 10:
                        this.status = 'unset'
                        this.error = 'Invalide Permision'
                        break
                    case 100:
                        this.status = 'unset'
                        this.error = 'Invalide Paramiter'
                        break
                    case 190:
                        this.status = 'unset'
                        this.access_token = undefined
                        cookies.remove('Facebook')
                        break
                    default:
                        this.status ='error'
                }
            }//updates status and adds error
            this.init=function(action=undefined){
                if(action){
                    this.access_token = cookies.get('Facebook')?cookies.get('Facebook').access_token: undefined
                    if(this.access_token){
                        this.getUser()
                        this.getPages()
                    }else this.checkLoginStatus()
                }
                else dispatchFacebook({function:'init'})
            }//adds atributes dependent on the FB object
        }
    }

    const [facebook,dispatchFacebook] = useReducer(updateFacebook,new FacebookObject())

    useEffect(()=>{//updates cookie
        if(facebook.status === 'connected')cookies.set('set',['Facebook','/',{status: facebook.status,access_token:facebook.access_token}])
        if(facebook.satus === 'error')cookies.remove('Facebook')
    },[facebook.status,cookies.permit])

    useEffect(()=>{if(window.FB)facebook.init()},[window.FB])


    return(
        <facebookContext.Provider value={facebook}>
            {children}
        </facebookContext.Provider>
    )
}
export const useFacebookContext =()=> useContext(facebookContext)