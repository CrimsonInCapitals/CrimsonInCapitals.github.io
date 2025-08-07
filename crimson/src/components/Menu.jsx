import { Link } from "react-router-dom"
import { Logo, LogoInvisalbe, MaskedLogo } from "./logo"

export const MenuPartA= ()=>{
    return(
        <menu id="nav">
            <Logo/>
        </menu>
    )
}
export const MenuLogoMask=()=>{
        const style = {backgroundColor:'red'}
    return(
        <menu id="nav" style={style}>
            <MaskedLogo/>
        </menu>
    )
}
const NavLink=({text='Home',to='/',active=false})=>{
    return(
        <div className="NavLink">
            <hr/>
            <Link to={to} className={active?'activeLink':'inactiveLink'}>{text}</Link>
            <hr className={active?'activeLink':'inactiveLink'}/>
        </div>
    )
}


export const MenuPartB=()=>{
    return(
        <nav id="header" className="layer_one">
            <NavLink active={true} to='/' text="Home"/>
            <NavLink to='/About' text="About"/>
            <LogoInvisalbe/>
            <NavLink to='/Services' text="Services"/>
            <NavLink to='/Articals' text="Articals"/>
        </nav>
    )
}