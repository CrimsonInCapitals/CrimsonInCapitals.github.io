import { Link } from "react-router-dom"
import { useThemeContext } from "../context/theme"
import { CP, H2, P } from "./StyledComponents"

export const BentoCard = (
    {Dims=[2,2],Title='Example',Type='Contnent Type',Description='artical content description and intro',content,Route}
)=>{
    const isrankone =(variable)=> {if(variable.rank === 1){return true}else{return false}}
    const {theme,S} = useThemeContext()
    console.log(Route)
    return(
        <article className={"BentoBox"} style={{...S({element:'header',properties:['backgroundColor','border']}),gridColumn:'span '+Dims[0],gridRow:'span '+Dims[1]}}>
            {content}
            <Link className="topleft" to={'../'+Route}>
                <H2>{Title}</H2>
                <P>{Type}</P>
            </Link>
            <div className="bottomleft">
                <CP>{Description}</CP>
            </div>
        </article>
    )
}