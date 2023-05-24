import { useEffect, useReducer, useState } from "react";
import { Section } from "./Card";
import { Ap, H1, H2, P } from "../StyledComponents";
import { useThemeContext } from "../../context/theme";
import { useFacebookContext } from "../../context/facebook";
import { InstagramPost } from "./InstagramPosts";
import { PostInsights } from "./Post";
export const Posts =({page})=>{ // scollable section of the ten most resent posts

    const [summary,setSummary] = useState()
    const facebook = useFacebookContext()
    useEffect(()=>{
        facebook.getFacebookPosts(page)
        facebook.getInstagramPosts(page)
    },[page])
    useEffect(()=>{
        if(!page.posts)return
        let sorted = page.posts.summary.sort((a,b)=>{
            if(page.posts[a].created_time > page.posts[b].created_time)return -1
            if(page.posts[a].created_time === page.posts[b].created_time)return 0
            if(page.posts[a].created_time < page.posts[b].created_time)return  1
        })
        setSummary(sorted)
    },[page.posts])

    return(
        <>
        <Section type='stack'>
            <H1>Posts: {page.posts&& '('+page.posts.summary.length+')'}</H1>
        {summary ?

            <Slider>
            {summary.map((id)=>(
                <Post page={page} current={page.post && id === page.post.id && true} post={page.posts[id]}key={id}/>
            ))}
            </Slider>
            :
            <Ap>Loading...</Ap>
        }
        </Section>
        {page.post && <PostInsights page={page}/>}
        </>
    )
}
export const Slider =({children})=>{
    return(
        <div className="sliderParent">
            <div className="sliderChild">
                {children}
            </div>
        </div>
    )
}
export const Post =({page,post,current})=>{
    const facebook = useFacebookContext()

    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 1px solid'})
    useEffect(()=>{
        current? setCardStyle({backgroundColor: theme.Card.Ribbon,border:theme.Card.Accent+' 1px solid'}):setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 1px solid'})
    },[theme,current])
    switch(post.type){
        case 'Facebook':
            let type = post.attachments.data[0].type
            const reactions = {
                like:post.reaction_like.summary.total_count,love:post.reaction_love.summary.total_count,haha:post.reaction_haha.summary.total_count,wow:post.reaction_wow.summary.total_count,sad:post.reaction_sad.summary.total_count,angry:post.reaction_angry.summary.total_count,thankful:post.reaction_thankful.summary.total_count,pride:post.reaction_pride.summary.total_count,care:post.reaction_care.summary.total_count,fire:post.reaction_fire.summary.total_count,hundred:post.reaction_hundred.summary.total_count,
                total: post.reactions.summary.total_count
            }
            return(
                <button onClick={()=>facebook.getFacebookPost(page,post.id)} className="post" style={cardStyle}>
                    <TitleBar type={type} date={post.created_time}/>
                    <Attachment attachments={post.attachments} page={page}/>
                    <ReactionBar reactions={reactions}/>
                    <PP>{post.message ? post.message: 'No Caption'}</PP>
                </button>
            )
        case 'Instagram':
            return(
                <button onClick={()=>facebook.getInstagramPost(page,post.id)} className="post" style={cardStyle}>
                    {/* <TitleBar type={type} date={post.created_time}/> */}
                    <Media media_url={post.media_url} media_type={post.media_type}/>
                    <Interactions post={post}/>
                    <PP>{post.caption ? post.caption: 'No Caption'}</PP>
                </button>
            )
        default:
            return(
                <PP>Post Type ErrowError</PP>
            )
    }
}

export const Media =({media_url,media_type})=>{
    const theme = useThemeContext()
    return(
       <>
       {media_type === "IMAGE" && <img src={media_url}/>}
       {media_type === "CAROUSEL_ALBUM" &&       <img src={media_url}/>}
       </>
    )
}
export const Attachment =({attachments,page})=>{
    const type = attachments.data.length===0? 'none':attachments.data.length>1? 'album': attachments.data[0].type
    const theme = useThemeContext()
    return(
        <>
        {attachments &&
        <>
        {type === 'profile_media'&& <div style={{border: theme.Card.Accent+''}} className="cover_backdrop"><img src={page.cover.source}/></div>}
        <div className={"img_container img_"+type} style={{backgroundColor: theme.Card.Accent, border: theme.Card.Accent+' 1px solid'}}>
            <img src={attachments.data[0].media.image.src} />
            {attachments.data[0].subattachments &&
                attachments.data[0].subattachments.data.map((sub,index)=>(index<2&&
                    <img key={sub.media.image.src} src={sub.media.image.src}/>
                ))
            }
        </div>
        </>
        }
        </>
    )
}

export const Interactions =({post})=>{
    return(
        <div className="bar left">
            <P className="reactions">
                {post.like_count>0 ? post.like_count === 1? '❤️ 1 Like': '❤️ '+post.like_count+' Likes' : 'No Likes'}

            </P>
        </div>
    )
}
export const ReactionBar =({reactions})=>{
// "(#100) For field 'reactions': Param type must be one of {NONE, LIKE, LOVE, WOW, HAHA, SAD, ANGRY, THANKFUL, PRIDE, CARE, FIRE, HUNDRED}"

    return(
        <div className="bar left">
            {reactions.total>0 &&
                <div className="reactions">
                    {reactions.like >0 && <P>👍</P>}
                    {reactions.love >0 && <P>❤️</P>}
                    {reactions.wow >0 && <P>😲</P>}
                    {reactions.haha >0 && <P>😂</P>}
                    {reactions.sad >0 && <P>😭</P>}
                    {reactions.angry >0 && <P>😡</P>}
                    {reactions.thankful >0 && <P>🙏</P>}
                    {reactions.pride >0 && <P>🏳️‍🌈</P>}
                    {reactions.care >0 && <P>🤗</P>}
                    {reactions.fire >0 && <P>🔥</P>}
                    {reactions.hundred >0 && <P>💯</P>}
            </div>
            }
            <P className="reactions">
                {reactions.total>0 ? reactions.total === 1? '1 Reaction': reactions.total+' Reactions' : 'No Reactions'}

            </P>
        </div>
    )
}
export const TitleBar =({type,date})=>{
    const now = new Date();
    const past = new Date(date);
    const diff = now.getTime() - past.getTime();
    const minutesAgo = Math.floor(diff / (1000 * 60));
    const hoursAgo = Math.floor(diff / (1000 * 60 * 60));
    const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeksAgo = Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
    const monthsAgo = Math.floor(diff / (1000 * 60 * 60 * 24 * 28))

    const ago = monthsAgo > 12? '1y+':monthsAgo > 0? monthsAgo+'M':weeksAgo >0? weeksAgo+'w':daysAgo>0? daysAgo+'d':hoursAgo>0? hoursAgo+'h': minutesAgo>5? minutesAgo+'m': 'just now'

    const getTitle=(type)=>{
    switch(type){
        case 'photo':
            return('Posted a picture')
        case 'cover_photo':
            return('Updated cover Photo')
        case 'profile_media':
            return('Updated the profile photo')
        case 'album':
            return('Posted an Album')
        case 'share':
            return('Shared a link')
        default:
            return('Added a post')
    }}
    const title = getTitle(type)
    const theme = useThemeContext()
    return(
        <div className="bar">
            {type === 'Instagram'? <img src={'../../icons/'+theme.IconSource+'instagram.svg'}/>:<img src={'../../icons/'+theme.IconSource+'facebook.svg'}/>}
            <PH>{title}</PH>
            {<P className="ago">{ago}</P>}

        </div>

    )
}

export const PH=({children})=>{
    const theme = useThemeContext()
    return(
        <h3 className="postHeading" style={{...theme.TextStyle.CardHeading}}>{children}</h3>
    )
}
export const PP=({children, className})=>{
    const theme = useThemeContext()
    return(
        <p className={"message "+className} style={theme.TextStyle.CardParagraph}>{children}</p>
    )
}