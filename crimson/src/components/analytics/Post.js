import { P } from "../StyledComponents"
import { Section } from "./Card"

export const PostInsights=({page})=>{
    switch(page.post.type){
        case 'Facebook':
            return(
                <Section>
                <P>{page.post.id}</P>
                <P>{page.post.message}</P>
                <img src={page.post.full_picture}/>
                </Section>
            )
            case 'Instagram':
                return(
                    <Section>
                    <P>{page.post.id}</P>
                    <P>{page.post.caption}</P>
                    <img src={page.post.media_url}/>
                    </Section>
                )
    }
}