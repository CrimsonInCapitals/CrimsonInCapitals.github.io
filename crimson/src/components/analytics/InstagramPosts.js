import { useEffect, useReducer, useState } from "react";
import { Section } from "./Card";
import { Ap, CH1, H1, H2, P } from "../StyledComponents";
import { useThemeContext } from "../../context/theme";
import { useFacebookContext } from "../../context/facebook";
export const InstagramPosts =({page})=>{ // scollable section of the ten most resent posts
    const facebook = useFacebookContext()
    useEffect(()=>{
        facebook.getInstagramPosts(page)
    },[page,])

    return(
        <Section type='stack'>
            <H1>Instagram Posts:</H1>
        {page.InstagramPosts ?
            <>
            <Slider>
            {page.InstagramPosts.map((post)=>(
                <InstagramPost page={page} current={page.post && post.id === page.post.id && true} post={post}key={post.id}/>
            ))}
            </Slider>
            </>
            :
            <Ap>Loading...</Ap>
        }
        </Section>
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
export const InstagramPost =({page,post,current})=>{
    const facebook = useFacebookContext()
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 1px solid'})
    useEffect(()=>{
        current? setCardStyle({backgroundColor: theme.Card.Ribbon,border:theme.Card.Accent+' 1px solid'}):setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 1px solid'})
    },[theme])
    return(
        <button onClick={()=>facebook.getInstagramPost(page,post.id)} className="post" style={cardStyle}>
            {/* <TitleBar type={type} date={post.created_time}/> */}
            <Media media_url={post.media_url} media_type={post.media_type}/>
            {/* <ReactionBar reactions={reactions} date={post.created_time}/> */}
            <PP>{post.caption ? post.caption: 'No Caption'}</PP>
        </button>
    )
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
    return(
        <div className="bar">
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