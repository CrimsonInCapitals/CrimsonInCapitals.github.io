import { Link } from "react-router-dom"
import { H1, H2, P } from "../../components/StyledComponents"

export const Page=()=>{
    return(
        <section className="content">
            <H1>Displate Posters</H1>
            <div>
                <H2>Minecraft Set</H2>
                <P>Inspired by the works of MC Escher, I recreated some of his iconic works to resemble Minecraft. I decided to replicate the style of Minecraft promotional posters as I felt that the isometric design would suit the style well.</P>
            </div>
           <span>
            <img style={{flex:'1'}}src={require('../../sources/articals/displate/mine waterfall.jpg')}/>
            <img style={{flex:'1'}}src={require('../../sources/articals/displate/STRONGHOLD.jpg')}/>

           </span>
        </section>
    )
}
export const Bento=()=>{
    return(
        <Link to='../articals/displate' className="QuickBento DisplateBento"/>
    )
}








export const properties=[[4,2],'Displate',1,'I have designed a series of posters that I sell on Displate','displate',<Bento/>,<Page/>]