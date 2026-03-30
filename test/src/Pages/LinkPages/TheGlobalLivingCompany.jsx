import { PageClass } from "../../classes";
import { TGLC } from "../../components/logos/TGLC";
import '../../style/TGLC.css';

const properties = new PageClass('The Global Living Company','/TGLC',0,'04/19/2026','linkpage',{})

const links =[
    {Display:'LinkedIn',src:'https://www.linkedin.com/company/the-global-living-company/posts/',target:'_blank'},
    {Display:'Instagram',src:'https://www.instagram.com/thegloballivingcompany/',target:'_blank'},
    {Display:'Our Website',src:'https://thegloballivingcompany.com/',target:'_blank'},
    // {Display:'WhatsApp',src:'https://thegloballivingcompany.com/',target:'_blank'},
    {Display:'Email Us',src:'mailto:info@thegloballivingcompany.com',target:'_blank'},

]


const Page =()=>{

    return(
        <body id="TGLC">
            <title>The Globl Living Comapny</title>
            {/* <h1>The Globl Living Comapny</h1> */}
            <TGLC/>        
    <div className="links">
        {links.map(link=>
            <a className='link' href={link.src} target={link.target}>{link.Display}</a>
        )}
        </div>
        <p  className="poweredby">Powered by <a href='./'>CRIMSON in capitals</a></p>
        </body>
    )
}

properties.element = <Page/> 
export default properties.get