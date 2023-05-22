import { useEffect, useState } from "react";
import { Section } from "./Card";
import { Ap, H1, H2, P } from "../StyledComponents";
import { useThemeContext } from "../../context/theme";
export const Posts =({page})=>{ // scollable section of the ten most resent posts
    const PostDefault = {
        populate: function(){
            window.FB.api(
                '/me/posts',
                'GET',
                {access_token: page.access_token,"pretty":"0","fields": "attachments,application,full_picture,message,created_time,reactions.limit(0).summary(total_count),reactions.type(WOW).limit(0).summary(total_count).as(reaction_wow),reactions.type(LOVE).limit(0).summary(total_count).as(reaction_love),reactions.type(LIKE).limit(0).summary(total_count).as(reaction_like),reactions.type(HAHA).limit(0).summary(total_count).as(reaction_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reaction_angry),reactions.type(SAD).limit(0).summary(total_count).as(reaction_sad),reactions.type(THANKFUL).limit(0).summary(total_count).as(reaction_thankful),reactions.type(PRIDE).limit(0).summary(total_count).as(reaction_pride),reactions.type(CARE).limit(0).summary(total_count).as(reaction_care),reactions.type(FIRE).limit(0).summary(total_count).as(reaction_fire),reactions.type(HUNDRED).limit(0).summary(total_count).as(reaction_hundred)","limit":"15"},
                function(response) {
                    console.log(response)
                    setPosts10({...Posts10,data:response.data})
                }
              );
        },
        select: function(id){
            setPosts10({...Posts10,selected:id})
        }
    }
    const [Posts10,setPosts10]=useState(PostDefault)
    useEffect(()=>{Posts10.populate()},[page])
    useEffect(()=>{console.log(Posts10)},[Posts10])

    return(
        <Section type='stack'>
            <H1>Posts:</H1>

        {Posts10.data ?
            <>
            <Slider>
            {Posts10.data.map((post)=>(
                <FacebookPost select={()=>Posts10.select(post.id)} post={post}key={post.id} imgsrc={post.full_picture} text={post.message} type={post.attachments.data[0].type} title={post.attachments.data[0].title} date={post.created_time.split('T')[0]} />

            
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
export const FacebookPost =({post,text,type,title,select})=>{
    const reactions = {
        like:post.reaction_like.summary.total_count,
        love:post.reaction_love.summary.total_count,
        haha:post.reaction_haha.summary.total_count,
        wow:post.reaction_wow.summary.total_count,
        sad:post.reaction_sad.summary.total_count,
        angry:post.reaction_angry.summary.total_count,
        thankful:post.reaction_thankful.summary.total_count,
        pride:post.reaction_pride.summary.total_count,
        care:post.reaction_care.summary.total_count,
        fire:post.reaction_fire.summary.total_count,
        hundred:post.reaction_hundred.summary.total_count,
        total: post.reactions.summary.total_count
    }
    const mainimg = post.attachments.data[0].media.image.src
    const theme = useThemeContext()
    const [cardStyle,setCardStyle] =useState({backgroundColor: theme.Card.Background,border: theme.Card.Accent+' 1px solid'})
    useEffect(()=>{
        setCardStyle({backgroundColor: theme.Card.Background,border:theme.Card.Accent+' 1px solid'})
    },[theme])
    return(
        <button onClick={select} className="post" style={cardStyle}>
        <TitleBar type={type} date={post.created_time}/>
        <Attachment attachments={post.attachments}/>
        <ReactionBar reactions={reactions} date={post.created_time}/>
        <PP>{post.message ? post.message: 'No Caption'}</PP>


    </button>
    )
}

export const Attachment =({attachments})=>{
    const type = attachments.data.length===0? 'none':attachments.data.length>1? 'album': attachments.data[0].type
    const theme = useThemeContext()
    return(
        <>
        {attachments &&
        <div className={"img_container img_"+type} style={{backgroundColor: theme.Card.Accent, border: theme.Card.Accent+' 1px solid'}}>
            <img src={attachments.data[0].media.image.src} />
            {attachments.data[0].subattachments &&
                attachments.data[0].subattachments.data.map((sub,index)=>(index<2&&
                    <img key={sub.media.image.src} src={sub.media.image.src}/>
                ))
            }
        </div>
        }
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