import { useEffect, useRef, useState } from "react"
import { Aspinal, Crimson, Cudoni, DavidPhillips, GLC, Helen, TheDogRoom } from "./Chips"

class Possition{
    constructor(start,end,title,parent,description){
        this.start = start
        this.end = end
        this.title = title
        this.parent = parent
        this.description = description
    }
}
class History{
    constructor(possitions){
        // this.possitions=possitions
        this.getForDate=(date= new Date())=>{
            let list = []
            this.possitions.map((possition,index)=>{
                if(possition.start<= date && (possition.end> date || possition.end == undefined)){
                    possition.index = index
                    list.push(possition)
                }
            })
            return list
        }
        this.getCurrent=()=>this.getForDate(new Date())
        this.LatestPossitionsAtCompany={}
        this.possitions = possitions.sort((a,b)=>{
            if(a.end == undefined || b.end == undefined){
                if(a.end == b.end){
                    return a.start - b.start
                }
                if(a.end == undefined)return +1
                if(b.end == undefined)return -1
            }
            if(isNaN(a.end)||isNaN(b.end))throw new Error('invalid date types')
            return a.end - b.end
        })
        this.possitions.map((possitions)=>{
            this.LatestPossitionsAtCompany[possitions.parent]=possitions
        })
    }
}
class Person{
    constructor(names,history){
        this.names = names
        this.getName=(lenth='FaL')=>{
            switch (lenth) {
                case 'Fal':
                    let names = this.names
                    return names[0]+' '+names[names.lenth-1]
                default:
                    return this.names.join(" ")
            }
        }
        this.history=history
        this.getPossitionForDate=(date)=>history.getForDate(date)
        this.getCurrentPossition=()=>history.getCurrent()
    }
}
const People =[
    new Person(['Harrison','Adam','Cole'],
        new History([
            new Possition(new Date(2019,0),undefined,'Principal Graphic Designer',Crimson,'Freelance Graphic Design Services'),
            new Possition(new Date(2026,0,12),undefined,'Graphic Designer',Helen,'Freelance graphic design services provided for the organisation of charity events'),
            new Possition(new Date(2025,10,15),undefined,'Graphic Designer',GLC,'Freelance graphic design servieces for furnishing services targeting the UAE'),
            new Possition(new Date(2023,3,15),new Date(2025,6,15),'Midweight Graphic Designer',DavidPhillips,"In this role my responsibilities required working with a multitude of stakeholders, within my depart, the company and externally. My primary duty's consist of creating and maintaining content for to purpose of pitching to current and potential clients. In this I used inDesign and PowerPoint, creating bespoke presentation slides as well as a suite of templates. This allows people from across the business with a wide range of skill levels to compile and create content for internal and external use that is in line with brand guidelines and best UX practices. In this role I have also created brochures for print and image and video content for external communications. This was done using all the core Adobe applications, Photoshop, Illustrator, Premier Pro, and After Effects."),
            new Possition(new Date(2023,6,15),new Date(2023,3,15),'Artworker & Presentation Designer',DavidPhillips,''),
            new Possition(new Date(2022,11),new Date(2023,3),'Senior Product Photographer',Cudoni,'As a Senior Product Photographer, my role included taking a high volume of item photographs as well as advising others on ways to shoot challenging items that would require deviation from the standardised shot list. This role prioritised efficient working to maximise sellable units per day. I was responsible for making key changes to increase the speed and quality of output. I did this by creating more efficient workspaces that allowed the item photographing process to be performed more easily. I also made recommendations on lighting, allowing for a more evenly lit subject and improving customer perception through online channels.'),
            new Possition(new Date(2022,4),new Date(2022,6),'Graphic Designer',TheDogRoom,'Brand design and development aimed at introducing and establishing the business within the community and building a client base. Work primarily revolved around creating a visual identity that matched owners’ style, as a sole trader. Along with design work, I also set up social media accounts and a Google My Business account. The result of initial announcements and introductions on these platforms, lead to the business being fully booked from the first two months at the point of opening.'),
            new Possition(new Date(2019,8),new Date(2019,11),'Graphic Designer',Aspinal,'Brand exploration and development to lift brand recognition and define a visual identity to scale as they grow. Focused on brand symbols and typography to enhance their heritage identity.'),
            new Possition(new Date(2022,7),new Date(2022,11),'Junior Product Photographer',Cudoni,''),
            new Possition(new Date(2022,3),new Date(2022,7),'Junior SEO Creative','Fast Generations',''),
        ])
    ),
    new Person(['Jo','Lee-Hill'],
        new History([
            new Possition(new Date(2022,2,15),undefined,'Business Owner',TheDogRoom,'Owner and operator of The Dog Room, a Haslemere based dog grooming business')
        ])),
    new Person(['Helen','Fairclough'],
        new History([
            new Possition(new Date(2017,0),undefined,'Fundraising Designer',Helen,'The organisation of charity fundrasing events')
        ])),
    new Person(['Eray','Karadeniz'],
        new History([
            new Possition(new Date(2025,8),undefined,'Marketing Manager',GLC,'As Marketing Manager, Group at The Global Living Company, I lead marketing strategy and execution across the UAE, UK and Australia driving growth, brand visibility and digital performance in the Build-to-Rent and residential furnishing sectors.'),
        ])
    )
]

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


export const ReviewReel=({children})=>{
    return(
        <section className="ReviewReel">
            <div className="holder">
                {reviews.map((review)=><Review review={review}/>)}
                {reviews.map((review)=><Review review={review}/>)}
                {reviews.map((review)=><Review review={review}/>)}
            </div>
        </section>
    )
}