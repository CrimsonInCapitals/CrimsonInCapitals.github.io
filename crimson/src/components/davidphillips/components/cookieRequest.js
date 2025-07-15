import { useCookiesContext } from "../context/Cookies"
import { Button } from "./Buttons"
import { Card } from "./card"
import { Section } from "./Elements"
import { H2, P2 } from "./TextStyles"


export const CookieRequest = ()=>{
    const {cookieHandler,DeclineCookies,AcceptCookies}=useCookiesContext()
    const Y = ()=>AcceptCookies()
    const N = ()=>DeclineCookies()
    return !cookieHandler.requested ?
        <Card layer='Three' className='overlay' style={{zIndex:'5',position:'fixed'}} Shadow>
            <H2>Accept Cookies</H2>
            <P2>cookies are used to save your theme preferances and quick acess bar settings.</P2>
            <Section horizontal>
            <Button type='Set' onClick={Y}>Accept</Button>
            <Button type='Set' onClick={N}>Decline</Button>
            </Section>
          </Card>
    : false
}