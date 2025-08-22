import { Link, useLocation } from "react-router-dom"
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
const NavLink=({text='Home',to='/'})=>{
    const location = useLocation()

    const active = location.pathname === to?true:false
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
            <NavLink to='/about' text="About"/>
            <LogoInvisalbe/>
            <NavLink to='/services' text="Services"/>
            <NavLink to='/articals' text="Articals"/>
        </nav>
    )
}


export const MenuFull=()=>{
    return(
        <div className="menu_holder layer_two">
            <div className="centerer">
                <nav id="header" className="layer_one">
                    <NavLink active={true} to='/' text="Home"/>
                    <NavLink to='/about' text="About"/>
                    <LogoInvisalbe/>
                    <NavLink to='/services' text="Services"/>
                    <NavLink to='/articals' text="Articals"/>
                </nav>
            </div>

            <menu id="nav">
                <Logo/>
            </menu>

        </div>

    )
}