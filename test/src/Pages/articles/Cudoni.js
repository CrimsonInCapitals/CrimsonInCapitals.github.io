import { Link } from "react-router-dom"
import { MenuFull } from "../../components/Menu"
import { FocusedContentSection } from "../../components/FocusedContentSection"
import { Footer } from "../../components/Footer"
import { PageClass,URL } from "../../classes"
import { useThemeContext } from "../../context/theme"
import { useEffect } from "react"
import { Photography, ProcessOpt } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/cudoni/cover.png'
import { IMG } from "../../components/fullscreenable"

const properties = new PageClass('Cudoni','/articles/cudoni',4,'03/30/2023','article',{chips:[<Photography/>,<ProcessOpt/>]})

const Background =()=>{
    const style={    
        backgroundImage: URL(backgroundImage),
        backgroundSize: 'cover',
        backgroundPosition:'center center',
        // opacity: '30%'
    }
    return(
        <Link to={properties.route} style={style} className="fill"/>
    )
}
properties.fill = <Background/>

const Page = ()=>{
    return(
        <ArticalContainer properties={properties}>
                <p>Before they shut down, I worked for Cudoni in the photography department. This is a sample of the pictures I took during my time there.</p>
                <div>
                <p>Gucci leather cross-body Bag in black</p>
                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni7.png')} alt="a set of proudct images depicting the above"/>
                </div>
               <div>
                <p size='exwide'>Gucci leather cross-body Bag in red</p>

                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni3.png')}alt="a set of proudct images depicting the above"/>
                </div>
<div>
                <p size='exwide'>Hermès 35cm Kelly in brown with gold hardware</p>
                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni1.png')}alt="a set of proudct images depicting the above"/>
                </div>
<div>
                <p size='exwide'>Dolce & Gabbana leather drum backpack</p>
                                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni5.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <p size='exwide'>Chanel gold foe pearl necklace with garnets</p>
                                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni6.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <p size='exwide'>Chanel Diamond monogram earrings</p>
                                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni4.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <p size='exwide'>Christion Dior monogram belt</p>
                                <IMG className='inline' src={require('../../images/articles/cudoni/cudoni2.png')}alt="a set of proudct images depicting the above"/>
                                </div>


                
      </ArticalContainer>
    )
}

const Bento = ()=>{
    return(
        <Link to='../articles/cudoni' className='QuickBento CudoniBento'/>
    )
}

properties.element = <Page/> 
export default properties.get






// export const properties=[[2,2],'Cudoni',1,'Creating efficient systems to maxamise photography efficency and capture goods in the best light','cudoni',<Bento/>,<page/>]