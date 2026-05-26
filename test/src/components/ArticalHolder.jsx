import { Children, isValidElement, useEffect } from "react"
import { useThemeContext } from "../context/theme"
import { FocusedContentSection } from "./FocusedContentSection"
import { MenuFull } from "./Menu"
import { Footer } from "./Footer"
import * as Pages from '../Pages'
import * as Chips from "./Chips"
import { DisplayDate, getAgo, ProjectCard, ProjectReel } from "./ProjectCard"
import { Helmet } from "react-helmet"





export const ArticalContainer = ({ properties, children }) => {
    const theme = useThemeContext()
    const isArtical = (r) => {
        let Page = Pages[r]()
        return (Page.type == 'article')
    }

    const getHeat = (r) => {
        let Page = Pages[r]()
        if (Page.type !== 'article') return false
        if (Page.name == properties.name) return false
        let overlap = 0
        let filtered = Page.chips.filter(chip => {
            return properties.chips.some(Cchip => Cchip.name === chip.name)
        })
        filtered.map((chip) => {
            overlap = overlap + chip.weight
        })
        return overlap
    }
    const PageswithHeat = Object.keys(Pages).filter(isArtical).map(r => {
        return { ...Pages[r](), heat: getHeat(r) }
    })
    console.log(properties)
    return (
        <>
        <Helmet>
            <meta property="og:title" content={properties.title} />
            <meta property="og:description" content="CRIMSON Article" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={"https://crimsonincapitals.github.io"+properties.route} />
            <meta property="og:image" content={properties.image} />
            {console.log(properties.image)}
        </Helmet>
        <main id={theme} className='layer_one'>
            <MenuFull />
            <FocusedContentSection style={{ gap: '0' }}>

                <section style={{ gap: '40px', paddingTop: 'calc(70px + 3em)' }}>
                    <div>
                        <h1>{properties.name}</h1>
                        <p className="date">{DisplayDate(properties.date, 'recent')} —  {properties.subtype}</p>
                        <div className='artical_chip_holder'>     {getAgo(properties.date) < 30 && <Chips.New.Componant />}
                            {properties.chips.map((chip, index) => <chip.Componant key={index} />)}</div>
                    </div>
                    {children}
                </section>
                <section className='fill layer_three' style={{ backgroundColor: 'var(--Background)',gap:0 }}>

                    <section style={{ display: 'flex', gap: '20px'}}>
                    <div style={{gap:'0px'}}>
                    <div className="artical_chip_holder">
                    <h5>Explore Tags: </h5>
                    {properties.chips.map((chip, index) => <chip.Componant key={index} />)}
                    </div>
                        <p className="date">{DisplayDate(properties.date, )}</p>
                    </div>

                        <h2>Similar Projects</h2>
                        <ProjectReel>
                            {PageswithHeat.filter((page) => page.heat !== false).sort((a, b) => b.heat - a.heat).map((page, index) => <ProjectCard page={page} key={index} type='recent' />)}
                        </ProjectReel>
                    </section>
                </section>
            </FocusedContentSection>
            <Footer />
        </main>
                </>
    )
}