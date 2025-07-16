import { useThemeContext } from "../../context/theme"
import { H2 } from "../StyledComponents"
import { AvitarButton } from "../button"
import { Section } from "./Card"

export const PageSelector =({pages,setPage,page})=>{
    console.log(page)
    return(
        <section>
            <div className="sliderParent">
                <div className="sliderChild">
                    {pages.index.map((pageId)=>(
                        <AvitarButton ImgSrc={pages[pageId].picture.data.url} priority={pageId === page.id ?'focus':''} text={pages[pageId].name} onClick={()=>setPage(pageId)}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
