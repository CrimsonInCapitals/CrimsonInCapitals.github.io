import { useState } from "react"
import { Card } from "./card"
import { Section } from "./Elements"
import { H3, H4, H5, P2, P3 } from "./TextStyles"

export const Avitar=(id)=>{
    const [Avitar,setAvitar]=useState({})
    return(
        <Card horizontal AICenter>
            <AvitarImage img={'x'} hug/>
            <Section tight>
                <H3>{'Harrison Adam Cole'}</H3>
                <P2>{'Artworker & Presentation Designer'}</P2>
            </Section>
        </Card>
    )
}


export const AvitarImage =()=>{
    return(
        <image className="AvitarImage x1"></image>
    )
}