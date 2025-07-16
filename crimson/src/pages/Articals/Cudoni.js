import { Link } from 'react-router-dom'
import { H1, P } from '../../components/StyledComponents'

const Page=()=>{
    return(
            <section className='content'>
                <H1>Cudoni</H1>
                <P>Before they shut down, I worked for Cudoni in the photography department. This is a sample of the pictures I took during my time there.</P>
                <div>
                <P>Gucci leather cross-body Bag in black</P>
                <img src={require('../../sources/articals/cudoni/cudoni7.png')} alt="a set of proudct images depicting the above"/>
                </div>
               <div>
                <P size='exwide'>Gucci leather cross-body Bag in red</P>

                <img src={require('../../sources/articals/cudoni/cudoni3.png')}alt="a set of proudct images depicting the above"/>
                </div>
<div>
                <P size='exwide'>Hermès 35cm Kelly in brown with gold hardware</P>
                <img src={require('../../sources/articals/cudoni/cudoni1.png')}alt="a set of proudct images depicting the above"/>
                </div>
<div>
                <P size='exwide'>Dolce & Gabbana leather drum backpack</P>
                                <img src={require('../../sources/articals/cudoni/cudoni5.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <P size='exwide'>Chanel gold foe pearl necklace with garnets</P>
                                <img src={require('../../sources/articals/cudoni/cudoni6.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <P size='exwide'>Chanel Diamond monogram earrings</P>
                                <img src={require('../../sources/articals/cudoni/cudoni4.png')}alt="a set of proudct images depicting the above"/>
                                </div>
<div>
                <P size='exwide'>Christion Dior monogram belt</P>
                                <img src={require('../../sources/articals/cudoni/cudoni2.png')}alt="a set of proudct images depicting the above"/>
                                </div>


                
            </section>
    )
}





const Bento = ()=>{
    return(
        <Link to='../articals/cudoni' className='QuickBento CudoniBento'/>
    )
}




export const properties=[[2,2],'Cudoni',1,'Creating efficient systems to maxamise photography efficency and capture goods in the best light','cudoni',<Bento/>,<Page/>]