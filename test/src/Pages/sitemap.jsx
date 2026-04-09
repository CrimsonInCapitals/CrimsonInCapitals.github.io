import { Link } from 'react-router-dom';
import { PageClass } from '../classes';
import { useThemeContext } from '../context/theme';
import * as Pages from './'
import { FocusedContentSection } from '../components/FocusedContentSection';



const properties = new PageClass('Site Map','/sitemap',0)

const Page =()=>{
  const theme = useThemeContext()
    return(
      <main id={theme} className='layer_one'>
        <FocusedContentSection>
            <section style={{gap:'4px'}}>
      {Object.keys(Pages).sort((a,b)=>{
        console.log(Pages[a]('route').length)
        return Pages[a]('route').length - Pages[b]('route').length
        }).map((r)=>{
            let page = Pages[r]()
            return <Link to={'../'+page.route}>{page.name}: <small>{page.route}</small></Link>
            })
        }
            </section>

        </FocusedContentSection>
  
      </main>
    )
}


properties.element = <Page/> 
export default properties.get