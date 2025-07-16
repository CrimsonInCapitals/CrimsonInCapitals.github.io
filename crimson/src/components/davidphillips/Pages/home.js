import { Card } from "../components/card"
import { Section } from "../components/Elements"
import { HorizontalScroller } from "../components/horizontalscroller"
import Svg2Countertop from "../components/icons/Countertop"
import SvgCupon from "../components/icons/Cupon"
import { LinkCard } from "../components/linkcard"
import { H1, H2 } from "../components/TextStyles"
import { SharePointLinks } from "../context/SharePointLinks"
import { FormLinks } from "../context/FormLinks"
import { HomeLinks } from "../Data/homepagelinks"
import { Cascade } from "../components/Table"

export const Home = ({...props})=>{
    document.title = 'Guidlines: Home'

    return(
        <Section fill layer="Two" left right top AICenter far>
            <Section className='main'>
                <H1>Welcome to the David Phillips intranet</H1>
            </Section>


                <HorizontalScroller title='Form links'>
                    {FormLinks.map(({Title,Description,Icon,URL})=>{
                        return(
                            <LinkCard 
                                style={{width:'fit-content',hight:'-webkit-fill-available'}}
                                title={Title}
                                description={Description}
                                icon={Icon}
                                url={URL}
                            />
                        )
                    })}
                </HorizontalScroller>

           
       
        <Card className='main' AICenter Shadow>
                <H2>Home Page</H2>
            </Card>
            <Cascade className='main' overFlow>
               {HomeLinks.map(item=>{
                return(
                    <LinkCard Shadow style={{flex:'1 0 21%',minWidth:'20%'}}
                    title={item.Title}
                    icon={item.Icon}
                    url={item.URL}
                />
                )
               })}
                
            </Cascade>
            <HorizontalScroller title='SharePoint links'>
                    {SharePointLinks.map(({Title,Description,Icon,URL})=>{
                        return(
                            <LinkCard
                                title={Title}
                                description={Description}
                                icon={Icon}
                                url={URL}
                            />
                        )
                    })}
                </HorizontalScroller>
        </Section>
    )
}