import { PageClass } from "../../classes";
import { TGLC } from "../../components/logos/TGLC";
import '../../style/TGLC.css';

const properties = new PageClass('The Global Living Comapny','/TGLC',0,'04/19/2026','linkpage',{})

const links =[
    {Display:'Shop',src:'https://thegloballivingcompany.com/'},
    {Display:'Linked In',src:'https://www.linkedin.com/company/the-global-living-company/posts/'},
    {Display:'Email Us',src:'mailto:info@thegloballivingcompany.com'},
    {Display:'Shop',src:'https://thegloballivingcompany.com/'},
    {Display:'Linked In',src:'https://www.linkedin.com/company/the-global-living-company/posts/'},
    {Display:'Email Us',src:'mailto:info@thegloballivingcompany.com'},
]


const Page =()=>{

    return(
        <body id="TGLC">
            <title>The Globl Living Comapny</title>

            {/* <h1>The Globl Living Comapny</h1> */}
            <TGLC/>        
    <div className="links">
        {links.map(link=>
            <a className='link' href={link.src} target="_blank">{link.Display}</a>
        )}
        </div>
        <p  className="poweredby">Powered by <a href='./'>CRIMSON</a></p>
        </body>
    )
}

properties.element = <Page/> 
export default properties.get