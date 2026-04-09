import { PageClass } from "../../classes";
import { TGLC } from "../../components/logos/TGLC";
import '../../style/TGLC.css';

const properties = new PageClass('The Global Living Company','/TGLC',0,'04/19/2026','linkpage',{title:'The Global Living Company'})

const links =[
    {Display:'LinkedIn',src:'https://www.linkedin.com/company/the-global-living-company/posts/',target:'_blank'},
    {Display:'Instagram',src:'https://www.instagram.com/thegloballivingcompany/',target:'_blank'},
    {Display:'Our Website',src:'https://thegloballivingcompany.com/',target:'_blank'},
    {Display:'WhatsApp',src:'https://wa.me/971504381788',target:'_blank'},
    {Display:'Email Us',src:'mailto:info@thegloballivingcompany.com',target:'_blank'},

]


const Page =()=>{

    return(
        <body id="TGLC">
            <title>The Globl Living Comapny</title>
            <TGLC/>        
            <section className="links">
                {links.map((link,index)=>
                    <a className='link' key={index} href={link.src} target={link.target}>{link.Display}</a>
                )}
            </section>
            <p  className="poweredby">Powered by <a href='./'>CRIMSON in capitals</a></p>
        </body>
    )
}

properties.element = <Page/> 
export default properties.get