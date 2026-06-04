import { Link } from "react-router-dom"
import { PageClass,URL } from "../../classes"
import { Blender, Designer } from "../../components/Chips"
import { ArticalContainer } from "../../components/ArticalHolder"
import backgroundImage from '../../images/articles/Displate/cover.webp'
import { IMG, Reel } from "../../components/fullscreenable"

const properties = new PageClass('MC Escher','/articles/mcescher',4,'12/15/2025','article',{chips:[Designer,Blender]})

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
                <p> A set of pieces based on the works of prolific Graphic artist MC Escher. These works have been re-rendered in the style of Minecraft game art. Some pieces are direct adaptations while others are more conceptual illusions. The entire set is illustrated on an isometric grid to achieve perspective bending results.</p>
                <div className="bff">
                    <h2>Trippy Trials</h2>
                    <p>The latest in the set is based on the work 'Convex and Concave'. The name is a play on the Minecraft update that introduced the structure depicted within 'Tricky Trials’.</p>
                </div>
                <IMG className='inline' src={require('../../images/articles/Displate/TrippyTrialscomp.webp')} alt="A minecraft trail chamber optical illustion."/>
                <p>Trippy Trials was the first in the series to feature detailed posed characters. While the entire collections were made in Affinity, using isometric planes, character references were muddled in blender. This ensured accurate proportioning. Below are the posed references. Each model has a grid texture matching the illustration and a scale cube.</p>
                <Reel col={4}>
                    <IMG className='inline' src={require('../../images/articles/Displate/spidergrid.webp')} alt="character referance for a spider"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/vgrid.webp')} alt="character referance for Adriene"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/pgrid.webp')} alt="character referance for Paw Print"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/sgrid.webp')} alt="character referance for Steve"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/spider.webp')} alt="character render of a spider"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/v.webp')} alt="character render of Adriene"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/p.webp')} alt="character render of Paw Print"/>
                    <IMG className='inline' src={require('../../images/articles/Displate/steve.webp')} alt="character render of Steve"/>
                </Reel>
                <p>Trippy Trials also includes realistic light casting from 25 sources with consideration for material reflectiveness and the difference in occlusion between concave and convex regions based on the light’s origin.</p>
                    
                <div className="bff">
                    <h2>Waterfall & Relativity Stronghold</h2>
                    <p>The first in the set was designed and released in September 2021. It is based on the MC Escher work of the same name, ‘Waterfall'.</p>
                    <p>The second in the set, 'Relativity Stronghold', was also released in September 2021 and is based on the MC Escher work 'Relativity'. Relativity Stronghold was the first in the series to feature realistic shadows, as seen being cast by the lantern. All four of the characters (skeletons) in this piece are pixel aligned.</p>
                </div>

                    <Reel>
                        <IMG className='inline' src={require('../../images/articles/Displate/waterfall.webp')} alt="Waterfall by Harrison Adam Cole, based on the work by MC Escher of the same name"/>
                        <IMG className='inline' src={require('../../images/articles/Displate/relstrong.webp')} alt="Relativity Stonghold by Harrison Adam Cole, based on the work by MC Escher 'Relativity'"/>
                    </Reel>
                <div className="bff">
                    <h2>Fortress Staircase & Mansion Corridors</h2>
                    <p>Pieces three and four both take loose inspiration from 'Ascending and Descending'. This concept is one of the most famous optical illusions, known as 'the infinite staircase'. Fortress Staircase is designed after the 'Nether fortress', and Mansion Corridors is designed after 'Woodland Mansions'.</p>
                </div>
                    <Reel>
                        <IMG className='inline' src={require('../../images/articles/Displate/the climb minecraft.jpg')} alt="Waterfall by Harrison Adam Cole, based on the work by MC Escher of the same name"/>
                        <IMG className='inline' src={require('../../images/articles/Displate/mc5.jpg')} alt="Relativity Stonghold by Harrison Adam Cole, based on the work by MC Escher 'Relativity'"/>
                    </Reel>
                    <div className="bff">

                    <h3>Displate</h3>
                    <p>This series is my most successful on Displate, a platform that sells metal posters. You can view my Displate account in the link below.</p>
                    <a href="https://displate.com/artist/crimsonincapitals1?art=5f0d09c08e6b" target="_blank" className="inlinelink">Displate Account</a>
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






