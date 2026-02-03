import { useEffect, useRef, useState } from "react"
import { People } from "../Data/people"



class review{
    constructor(title,content,authorID,date=new Date(),roleID=undefined){
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
const reviews=[
    new review(
        'Lorem ipsum dolor sit amet consectetur adipiscing elit.', 
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        3,new Date(2026,0,30)
    ),
    new review(
        'Lorem ipsum dolor sit amet consectetur adipiscing elit.', 
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        2,new Date(2026,0,30)
    ),
    new review(
        'Lorem ipsum dolor sit amet consectetur adipiscing elit.', 
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        1,new Date(2026,0,30)
    ),
    new review(
        'Lorem ipsum dolor sit amet consectetur adipiscing elit.', 
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        1,new Date(2026,0,30)
    ),
]

export const Review=({review})=>{

    return(
        <article className="review">
            <h2>"{review.title}"</h2>
            <p className="ReviewContent">"{review.content}"</p>
            <div className="credit">
                <p className="ReviewerName">{review.author.getName('FaL')}</p>
                <p className="ReviewerTitle">{!review.possitionIsCurrent && 'former'} {review.authortitle}</p>
                <review.parent.Componant/>
            </div>
        </article>
    )
}


export const ReviewReel=()=>{
    return(
        <section className="ReviewReel">
            <div className="holder" style={{animationDuration:reviews.length*10+'s'}}>
                {reviews.map((review)=><Review review={review}/>)}
                {reviews.map((review)=><Review review={review}/>)}
                {reviews.map((review)=><Review review={review}/>)}
            </div>
        </section>
    )
}