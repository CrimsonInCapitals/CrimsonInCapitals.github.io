import { Link, useLocation } from "react-router-dom"
import { Logo, LogoInvisalbe, MaskedLogo } from "./logo"
import * as Pages from '../Pages/'
import { useFullScreenContext } from "./fullscreenable"
export const MenuPartA= ()=>{
    const {hideMenu}=useFullScreenContext()

    return(
        <menu id="nav" className={hideMenu?"hidden":""}>
            <Link to={'/'}><Logo/></Link>
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
    const {hideMenu}=useFullScreenContext()
    const active = location.pathname === to?true:false
    return(
        <div className={hideMenu?"NavLink hidden":"NavLink"}>
            <hr/>
            <Link to={to} className={active?'activeLink':'inactiveLink'}>{text}</Link>
            <hr className={active?'activeLink':'inactiveLink'}/>
        </div>
    )
}


export const MenuPartB=()=>{
    const {hideMenu}=useFullScreenContext()

    return(
        <nav id="header" className={hideMenu?"hidden layer_one":"layer_one"}>
                    <NavLink active={true} to={Pages.Home('route')} text="Home"/>
                    <NavLink to={Pages.About('route')} text="About"/>
                    <LogoInvisalbe/>
                    <NavLink to={Pages.Services('route')} text="Services"/>
                    <NavLink to={Pages.Articles('route')} text="Articles"/>
        </nav>
    )
}


export const MenuFull=()=>{
    const {hideMenu}=useFullScreenContext()
    return(
        <div className="menu_holder layer_two">
            <div className={hideMenu?"hidden centerer":"centerer"}>
                <nav id="header" className={hideMenu?"hidden layer_one":"layer_one"}>
                    <NavLink active={true} to={Pages.Home('route')} text="Home"/>
                    <NavLink to={Pages.About('route')} text="About"/>
                    <LogoInvisalbe/>
                    <NavLink to={Pages.Services('route')} text="Services"/>
                    <NavLink to={Pages.Articles('route')} text="Articles"/>
                </nav>
            </div>

            <menu id="nav" className={hideMenu?"hidden":""}>
                <Link to={'/'}><Logo/></Link>
            </menu>

        </div>

    )
}