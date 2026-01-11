import { useEffect, useRef, useState } from "react"
import backgroundImage from '../images/articles/Displate/TrippyTrialscomp.webp'
import { URL } from "../classes"
import { IMG } from "./fullscreenable"


import TrippyTrials from '../images/articles/Displate/TrippyTrialscomp.webp'
import relstrong from '../images/articles/Displate/relstrong.webp'
import askcover from '../images/articles/askitalian/APEROL TIME.jpg'
import ProductPage from '../images/articles/davidphillips/Templateslides/7.png'
import askkids from '../images/articles/askitalian/M2.jpg'
import BandEsticker from '../images/articles/bobbinandem/sticker.png'
import DPProductPage from '../images/articles/davidphillips/idesign/Desktop-Mockup-Product-Light.png'
import DPareas from '../images/articles/davidphillips/newpremades/11.png'
import dogroom from '../images/articles/thedogroom/logo.png'
import aspinal from '../images/articles/aspinaloflondon/outcomesgrid.png'
import DPhsdef from '../images/articles/davidphillips/homestaginglookbook/def.png'
import pitstop from '../images/articles/imedia/pinnedposts.png'
import overbury from '../images/articles/overbury/13.png'
import amazinggrace from '../images/articles/amazinggrace/sizing icons.png'
import scotwid from '../images/articles/scottishwidows/swframes.png'
import { Link } from "react-router-dom"



class Option{
    constructor(source,title,link){
        this.source=source
        this.title=title
        this.link=link
    }
}

const PictureList=[
    new Option(TrippyTrials,'Trippy Trials','/articles/mcescher'),
    new Option(ProductPage,'David Phillips Product Page','/articles/davidphillips/figma'),
    new Option(askcover,'Ask Italian','/articles/askitalian'),
    new Option(askkids,'Ask Italian','/articles/askitalian'),
    new Option(BandEsticker,'Bobbin and Em','/articles/bobbinandem'),
    new Option(DPProductPage,'David Phillips Product Overlay','/articles/davidphillips'),
    new Option(relstrong,'Relativity Stronghold','/articles/mcescher'),
    new Option(DPareas,'David Phillips Service Area','/articles/davidphillips'),
    new Option(dogroom,'The Dog Room','/articles/thedogroom'),
    new Option(DPhsdef,'David Phillips Homestaging','/articles/davidphillips/homestaginglookbook'),
    new Option(aspinal,'Aspinal of London','/articles/aspinaloflondon'),
    new Option(pitstop,'PitStop Pinned Posts','/articles/pitstop'),
    new Option(overbury,'Overbury Presenation','/articles/overbury'),
    new Option(amazinggrace,'Sizing Icons','/articles/amazinggrace'),
    new Option(scotwid,'Animation Frames','/articles/scottishwidows'),
]


class Picture{
    constructor(x,y,key,Pictures){
        this.x=x
        this.y=y
        this.key=key
        let usedoptions = []
        Pictures.map((picture)=>{
            usedoptions.push(picture.image.title)
        })
        let next = null
        let found = false
        while (found == false) {
            next = Math.floor(Math.random()*(PictureList.length-1))
            if(!usedoptions.includes(PictureList[next].title))found = true
        }
        this.image = PictureList[next]
    }
}

export const PictureSpace=({props})=>{
    const [Pictures,setPictures]=useState([])
        const addNew =(X,Y,distance)=>{
                let next = new Picture(X,Y,X+Y,Pictures)
                let newPictures = Pictures
                if(newPictures.length>8)newPictures.shift()
                newPictures.push(next)
                setPictures(newPictures)
        }
        const [position, setPosition] = useState({ x: 0, y: 0 ,distance:0});
        const latestPosition = useRef(position); // Keeps latest position without re-rendering

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (event) => {
        const coords = { x: event.clientX, y: event.clientY };
        latestPosition.current = coords; // Store latest position
        let last=position
        if(Pictures.length>0){
            last=Pictures[Pictures.length-1]
        }
        coords.distance = Math.sqrt(Math.pow(last.x - coords.x,2)+Math.pow(last.y - coords.y,2))
        if(coords.distance>100){
            setPosition(coords); // Optional: update state for live display
            addNew(coords.x,coords.y,coords.distance)
        }
    };
    // Attach mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    //   clearInterval(intervalId);
    };
  }, []);
    // useEffect(()=>        console.log(Pictures)
    // ,[Pictures])
    return(
        <div style={{width:'100%',height:'100%',position:'relative'}}>
            {Pictures.map((item,index)=>{
                return(
                    <Link className="topLeft layer_one" to={item.image.link}>
                    <img 
                        className="FloatPic" 
                        key={item.x+item.y} 
                        style={{left:item.x,top:item.y}} 
                        src={item.image.source}
                    />
                    </Link>
                )
            })}
        </div>
    )
}