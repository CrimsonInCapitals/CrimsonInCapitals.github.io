import { Route,Routes } from 'react-router'
import { CardButton, Section } from "./Elements"
import { H1, H5, ST } from './TextStyles'
import { Card } from './card'
import { useInternalContext } from '../context/links'
import { Link } from 'react-router'
import { getStyle } from '../Objects/ClassManager'
import { LayerProvider, ModeObject, Modes, useLayerContext, useModeContext } from '../context/brandLayers'
import { Logo } from './logo'

export const MenuButton = ({to,name,onClick,...props})=>{
    const {layerProps,layer}=useLayerContext()
    const {Mode}=useModeContext()

    return(
        <Link to={to} className={'MenuButton Layer_'+layer+'_'+Mode.Title} style={{color: layerProps.copy}}>{name}</Link>
    )
}
const isrankone =(variable)=> {if(variable.rank === 1){return true}else{return false}}

export const GuidlinesSubmenu = () =>{
    const {layerProps,layer}=useLayerContext()
    // console.log('layer props sub menu')
    const pages = useInternalContext()
    const isinguidlines = (page)=> page.to.includes('Guidlines')&&page.rank==2?true:false
    // console.log('called')
    return(
            <Section AICenter horizontal cornerRadius='0px' layer='Three'className={'subMenu'} style={{background:layerProps.Background,BorderRadius:0}}>
                {pages.filter(isinguidlines).map(({name,to,rank})=>(
                    <MenuButton key={name} to={'../'+to} name={name}/>
                    
                    ))}
            </Section>
    )
}
export const HeaderMenu = ({...props})=>{
    const pages = useInternalContext()
    const {Mode,setMode,updateMode}=useModeContext()
    const clickdo=()=>{
        updateMode(Mode.Next)
    }
    return(
        <header id='headermenu' style={{background:Mode.Layers.One.Background,zIndex:'2'}}>
            <LayerProvider layer='One'>
                <Section layer='One' AICenter tight cornerRadius='0px' position='fixed' id='HeaderSection'>
                    <Logo height='80px'margin='100'/>
                    <Section id='MenuLinks' horizontal maxwidth='1080px'>


                    {pages.filter(isrankone).map(({name,to})=>(
                    <MenuButton key={name} to={to} name={name}/>
                    
                    ))}
                        {/* <button type='button' onClick={clickdo}>switch to: {Modes[Mode.Next].Title}</button> */}

                    </Section>
                </Section>
            </LayerProvider>
            <LayerProvider layer='Three'>
                     <Routes>
                       {pages.map(({to,component,subMenu})=><Route path={to} key={to}element={subMenu}/>)}
                     </Routes>
                {/* <GuidlinesSubmenu/> */}
            </LayerProvider>
        </header>

    )
}

