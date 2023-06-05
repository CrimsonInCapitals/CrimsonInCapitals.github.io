import { useThemeContext } from "../../context/theme"
import { H2 } from "../StyledComponents"
import { Section } from "./Card"

export const PageSelector =({pages,setPage,page})=>{
    const theme=useThemeContext()
    return(
        <section>
            <div className="sliderParent">
                <div className="sliderChild">
                    {pages.index.map((pageId)=>(
                        <>
                        <label htmlFor={pageId} className={theme.mode+"_Tertiary rounded  pages"}>
                        <img src={pages[pageId].picture.data.url}/>
                        {pages[pageId].name}
                        </label>
                        <input id={pageId} name="page" selected type='radio' onClick={()=>setPage(pageId)}/>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}
