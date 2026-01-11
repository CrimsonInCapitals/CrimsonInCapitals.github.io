import { Card } from "../components/card"
import { P1, Statment } from "../components/TextStyles"

export const FourZeroFour = ()=>{
    document.title = '404: Page Not Found'
    return(
        <Card className='main'>
            <Statment>404</Statment>
            <P1>Page not fount</P1>
        </Card>
    )
}