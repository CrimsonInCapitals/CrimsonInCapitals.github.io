import { useState } from "react"
import { useThemeContext } from "../../context/theme"

const facebookIcon = 'facebook.svg'


export const Login =({f})=>{
    const theme = useThemeContext()
    const [Message,setMessage] =useState()
    const Login = [{
        name: 'facebook',
        icon: 'facebook.svg',
        login: function(){
            window.FB.login(function(response){
                if(response.error)return
                console.log(response)
                if(response.status && response.status === 'connected'){f({response,task: 'login'});setMessage('');return}
                setMessage('Login not succesfull')

            },
            {scope: 'email, manage_fundraisers,read_insights,publish_video,catalog_management,pages_manage_cta,pages_manage_instant_articles,pages_show_list,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_subscriptions,instagram_basic,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,leads_retrieval,whatsapp_business_management,instagram_manage_messages,page_events,pages_read_engagement,pages_manage_metadata,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement,whatsapp_business_messaging'})
        }
        }]
    return(
        <section>
            <h2>Connect Platforms:</h2>
            {Login.map((platform)=>(
            <button className={'login '+platform.name} onClick={platform.login}><img src={require('../../icons/'+theme.IconSource+platform.icon)}/><p>Login</p></button>
            ))}
            {Message && <span>{Message}</span>}
        </section>
    )
}