import { Link } from "react-router-dom"
import '../style/ProjectCard.css'
import { Brand, Figma, GenChip, InDesign, New, PhotoShop } from "./Chips"
import { Children, useState } from "react"
import ReactGA from "react-ga4";

ReactGA.initialize([
    {
        trackingId:'G-GR0Z4YY3B1',
        gaOptions:{send_page_view:false}
    }
])

const DateOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return (<>{n}<sup>{(s[(v - 20) % 10] || s[v] || s[0])}</sup></>);
};
export const CardChipHolder = ({ children }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className="chipHolder">
            {Children.toArray(children).slice(0, 3)}
            {Children.count(children) > 3 && <div className="plusHolder" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <button className="plus chip"><span>+</span></button>
                {hover && <div className="otherChips">{Children.toArray(children).slice(3, Children.toArray(children).length)}</div>}
            </div>}
        </div>
    )
}
export const getAgo = (date) => {
    let ago = new Date() - date
    ago = Math.floor(ago / (1000 * 60 * 60 * 24))
    return ago
}
export const DisplayDate = (date, type = undefined) => {
    if (type == 'recent') {
        let ago = getAgo(date)
        switch (true) {
            case ago > 720:
                break
            case ago > 30:
                return Math.floor(ago / 30) > 1 ? Math.floor(ago / 30) + ' Months ago' : Math.floor(ago / 30) + ' Month ago'
            default:
                return (ago + ' Days ago')
        }
    }
    const s = ["th", "st", "nd", "rd"];
    const v = date.getDate() % 100;
    return (
        <>
            {date.getDate()}{(s[(v - 20) % 10] || s[v] || s[0])} {date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()}
        </>
    )
}//takes a date and returns a string

export const ProjectCard = ({ page, type = undefined }) => {
    const [hovered,setHovered]=useState(false)
    const HoverTrack=()=>{
        if(hovered)return
        setHovered(true)
        ReactGA.event('project_hover',{event_catagory:'Engagment',event_lable:page.name})
    }
    const chips = getAgo(page.date) < 30 && type !== 'recent' ? [New, ...page.chips] : page.chips
    return (
        // <Link to={page.route} className="ProjectCard layer_three">
        <article className="ProjectCard layer_three" onMouseEnter={HoverTrack}>
            {page.fill && page.fill}
            <Link className="topLeft layer_one" to={page.route}>
                <h4>{page.name}</h4>
                <p className="date">{DisplayDate(page.date, type)}{type == 'recent' && ' — ' + page.subtype}</p>
            </Link>
            <div className="bottomLeft">
                {page.type == 'article' &&
                    <CardChipHolder>
                        {chips.map(chip => !chip.hidden && <chip.Componant key={chip.name} />)}
                    </CardChipHolder>}
            </div>

        </article>
        /* </Link> */


    )
}


export const BrandCard = ({ page, type = undefined }) => {
    const [hovered,setHovered]=useState(false)
    const HoverTrack=()=>{
        if(hovered)return
        setHovered(true)
        ReactGA.event('brand_hover',{event_catagory:'Engagment',event_lable:page.name})
    }
    return (
        // <Link to={page.route} className="ProjectCard layer_three">
        <article className="BrandCard layer_three" onMouseEnter={HoverTrack}>
            {page.fill && page.fill}
            <Link className="topLeft layer_one" to={page.route}>
                <h2>{page.name}</h2>
                {/* <p className="date">{DisplayDate(page.date,type)}{type=='recent'&& ' — '+ page.subtype}</p> */}
            </Link>
            <div className="bottomLeft">
                <p>{page.description}</p>

            </div>

        </article>
        /* </Link> */


    )
}


export const ProjectReel = ({ children, display = 4, fixed = false ,cropped=true,brands=false}) => {
    const [displaying, setDisplaying] = useState(display)
    const reveal = 6
    const [Reveal, setReveal] = useState(Children.count(children) - display > reveal ? reveal : Children.count(children) - display)
    const [Remove, setRemove] = useState(displaying - display)
    const getInc = () => {
        let newdisplaying = displaying + Reveal
        let newremove = Reveal
        let newadd = newdisplaying < Children.count(children) - reveal ? reveal : Children.count(children) - newdisplaying
        setDisplaying(newdisplaying)
        setReveal(newadd)
        setRemove(newremove)
    }
    const getDec = () => {
        let newdisplaying = displaying - Remove
        let newremove = newdisplaying > display + reveal ? reveal : newdisplaying - display
        let newadd = Remove
        setDisplaying(newdisplaying)
        setReveal(newadd)
        setRemove(newremove)
    }
    // display>Children.count(children) && display = Children.count(children)
    return (
        <section className={brands?"brands projectReel":"projectReel"}>
            {cropped ? Children.toArray(children).slice(0, displaying): children}
            {/* {Children.toArray(children).slice(0, displaying)} */}
            {Remove > 0 && !fixed && <button className="showmore" onClick={getDec}>Show {Remove} Less</button>}
            {Reveal > 0 && !fixed && <button className="showmore" onClick={getInc}>Show {Reveal} More</button>}

        </section>
    )
}

