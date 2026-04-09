import { Link, useLocation } from "react-router-dom"
import { Instagram } from "./Icons/Instagram"
import { Facebook } from "./Icons/Facebook"
import { Displate } from "./Icons/Displate"
import { TikTok } from "./Icons/TikTok"
import { LinkedIn } from "./Icons/LinkedIn"
import * as Pages from '../Pages/'
import { CrimsonMask } from "./CRIMSONmask"
import ReactGA from "react-ga4";


export const Footer=()=>{
    const location = useLocation()
    return(
        <>
        <CrimsonMask/>
        <svg width='0' height='0'>
            <defs>
                <clipPath id="footermask"  clipPathUnits="objectBoundingBox" transform="scale(1,1)">
                    <rect x='0'y='0' width='100' height='100'/>
                </clipPath>
            </defs>
        </svg>
        <div id="footercontainer">

        <footer className="layer_one">
            <nav>
                <div className="space-between">

                <section>
                    <div>
                        <h5>Links</h5>
                        {Object.keys(Pages).filter(r=>Pages[r]('rank') === 1).map((r)=><Link key={Pages[r]('name')}to={Pages[r]('route')} className={location.pathname == Pages[r]('route')?'activeLink':'inactiveLink'}>{Pages[r]('name')}</Link>
                        )}

                    </div>
                    <div>
                        <h5>New</h5>
                        {Object.keys(Pages).filter(r=>Pages[r]('rank') > 1).sort((a,b)=> Pages[b]('date') - Pages[a]('date')).slice(0,3).map((r)=><Link key={Pages[r]('name')} to={Pages[r]('route')} className={location.pathname == Pages[r]('route')?'activeLink':'inactiveLink'}>{Pages[r]('name')}</Link>)}

                    </div>
                </section>
                <div className="socials">
                    <Instagram width="1.2em" onClick={()=>{
                        ReactGA.event('Social',{event_catagory:'Engagment',label:'Instagram'})
                        window.open('https://www.instagram.com/crimson.svg/')
                    }}/>
                    <Facebook width="1.2em" onClick={()=>{
                        ReactGA.event('Social',{event_catagory:'Engagment',label:'Facebook'})
                        window.open('https://www.facebook.com/Crimsonincapitals')
                    }}/>
                    <Displate width="1.2em" onClick={()=>{
                        ReactGA.event('Social',{event_catagory:'Engagment',label:'Displate'})
                        window.open('https://displate.com/crimsonincapitals1?art=5f0d09c08e6b6')
                    }}/>
                    <TikTok width="1.2em" onClick={()=>{
                        ReactGA.event('Social',{event_catagory:'Engagment',label:'TikTok'})
                        window.open('https://www.tiktok.com/@harrisoncole23')
                    }}/>
                    <LinkedIn width="1.2em" onClick={()=>{
                        ReactGA.event('Social',{event_catagory:'Engagment',label:'LinkedIn'})
                        window.open('https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/')
                    }}/>

                </div>
                </div>

                <p>Crimson in Capitals — Harrison Adam Cole</p>
            </nav>
            <div 
              style={{
                    width:'100%',
                    aspectRatio: '100/17',
                    backgroundColor:'var(--Crimson)', 
                    clipPath:'url(#logo-mask)',
                    zIndex:'10',
                    paddingRight:'11%',
                    boxSizing:'border-box',
                    maskMode:'alpha',
                    position:'absolute',
                    bottom:'-4vw'
                }}
            ></div>         
        </footer>
        </div>
        </>

    )
}