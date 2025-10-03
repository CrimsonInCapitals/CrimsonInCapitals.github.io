import { Avitar } from "../components/Avitar"
import { Card } from "../components/card"
import { Section } from "../components/Elements"
import { H1, Statment } from "../components/TextStyles"


export const People = ({...props})=>{
    document.title = 'Guidlines: Home'

    return(
        <Section fill layer="Two" left right top AICenter far>
            <Section className='main'>
                <H1>Welcome to People Hub</H1>
            </Section>
            <Card className='main'>
                <Statment>Comming soon</Statment>
            </Card>
            <Avitar/>
        </Section>
    )
}