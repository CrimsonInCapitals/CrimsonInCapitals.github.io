import { Link } from "react-router-dom"
import { NameText } from "./TextComponants"
import { Instagram } from "./Icons/Instagram"
import { Facebook } from "./Icons/Facebook"
import { Displate } from "./Icons/Displate"
import { TikTok } from "./Icons/TikTok"
import { LinkedIn } from "./Icons/LinkedIn"
import * as Pages from '../Pages/'


export const Footer=()=>{
    return(
        <>
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
                        {Object.keys(Pages).map((r)=>Pages[r]('rank') == 1 &&<Link to={Pages[r]('route')}>{Pages[r]('name')}</Link>
                        )}


                    </div>
                    <div>
                        <h5>New</h5>
                        TextComponants
                        text
                    </div>
                </section>
                <div className="socials">
                    <Instagram width="1.2em"/>
                    <Facebook width="1.2em"/>
                    <Displate width="1.2em"/>
                    <TikTok width="1.2em"/>
                    <LinkedIn width="1.2em"/>

                </div>
                </div>

                <p>Crimson in Capitals — Harrison Adam Cole</p>
            </nav>
            <rect 
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
            ></rect>         
        </footer>
        </div>
        </>

    )
}