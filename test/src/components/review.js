import { useEffect, useRef, useState } from "react"
import { People } from "../Data/people"



class review{
    constructor(title,content,authorID,date=new Date(),subject=0,roleID=undefined){
        this.title=title
        this.content=content
        this.author = People[authorID]
        let possitionAtTime = roleID==undefined?this.author.getPossitionForDate(date)[0]:this.author.history[roleID]
        this.possitionIsCurrent = possitionAtTime.end == undefined? true:false
        this.authortitle = possitionAtTime.title
        this.parent = possitionAtTime.parent
        this.parentName = possitionAtTime.parent.display
    }
}
export const reviews=[
    new review(
        'We would confidently recommend him to anyone looking for a clear and structured design partner.', 
        'We have been working with Harrison for a short while and he has been attentive, responsive and clear throughout the process. Working with Harrison has helped us explore our options and strike the right balance between being design-led and agent-first. He brings structure, clarity and thoughtful reasoning to his work, making collaboration easy and effective. We plan to continue working with him and would confidently recommend him to anyone looking for a clear and structured design partner.',
        3,new Date(2026,0,30)
    ),
    new review(
        '★★★★★ (5 Stars) What an absolute gem 💎', 
        'Harrison gave me so many ideas on how to incorporate my dogs in my logo for my dog grooming business. So helpful on font, colours and style. I chose everything he suggested. What an absolute gem 💎',
        1,new Date(2026,1,11)
    ),
    new review(
        'I consider myself lucky to have worked with him', 
        "Harrison is a gifted talent able to interpret and add to concepts and visions and make them practical realities. Not only that but he keeps a clear head under pressure and is able to keep his sense of humour too. I consider myself lucky to have worked with him and know he will add huge value to any organisation he works with.",
        5,new Date(2025,6,30)
    ),
    // new review(
    //     'Lorem ipsum dolor sit amet consectetur adipiscing elit.', 
    //     'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    //     1,new Date(2026,0,30)
    // ),
]

export const Review=({review,focal=false,concat=false})=>{

    return(
        <article className={focal?"focal review":"review"}>
            <h2>"{review.title}"</h2>
            <p className={concat? "concat ReviewContent":"ReviewContent"}>"{review.content}"</p>
            <div className="credit">
                <p className="ReviewerName">{review.author.getName('FaL')}</p>
                <p className="ReviewerTitle">{!review.possitionIsCurrent && 'former'} {review.authortitle}</p>
                <review.parent.Componant/>
            </div>
        </article>
    )
}


export const ReviewReel=()=>{
    if(reviews.length>0)return(
        <div style={{alignItems:'center'}}>
            <h2>Reviews</h2>
            <section className="ReviewReel">
                <div className="holder" style={{animationDuration:reviews.length*10+'s'}}>
                    {reviews.map((review)=><Review review={review} concat/>)}
                    {reviews.map((review)=><Review review={review} concat/>)}
                    {reviews.map((review)=><Review review={review} concat/>)}
                </div>
            </section>
        </div>
    )
}