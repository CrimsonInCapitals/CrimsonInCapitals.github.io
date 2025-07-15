import {createContext, useContext, useState } from "react";
import { useCookiesContext } from "./Cookies";

class ColourObject{
    constructor(css,hex,Name,Ref){
        this.css = css
        this.hex = hex
        this.Name = Name
        this.Ref = Ref
    }
}// creates an onject with css hex name and reference
class layerPropsClass{
    constructor(Name,b,t,c,a,s,f){
        this.AbsoluteName=b.Name
        this.Background = b.css
        this.Title = t.css
        this.Copy = c.css
        this.Accent = a.css
        this.Shadow = s.css
        this.Focul = f.css
        this.ColourNames={
            Background:b.Name,
            Title:t.Name,
            Copy:c.Name,
            Accent:a.Name,
            Shadow:s.Name
        }
        this.hex={
            Background:b.hex,
            Title:t.hex,
            Copy:c.hex,
            Accent:a.hex,
            Shadow:s.hex
        }
    }
}// creates the object with each of the layer properties

class Segmentlayers{
    constructor(Name,Accent,Light,Pure,Dark,Umbra,code){
        this.Name= Name
        this.Accent = new ColourObject('var(--DP'+code+'Accent) ',Accent,code+'Accent',code+'A')
        this.Light =  new ColourObject('var(--DP'+code+'Light)',Light,code+'Light',code+'L')
        this.Pure =   new ColourObject('var(--DP'+code+'Pure)',Pure,code+'Pure',code+'P')
        this.Dark =   new ColourObject('var(--DP'+code+'Dark)',Dark,code+'Dark',code+'D')
        this.Umbra =  new ColourObject('var(--DP'+code+'Umbra)',Umbra,code+'Umbra',code+'U')
        this.Code = code
    }
}// creates the segment object using the shades passed from accent to umbra  (css consturction example code+'Accent' = var(--DPREAAccent)
const Colours = {Obj:{},Array:[ 
    new ColourObject('var(--DPW)','#FFFFFF','White','W'),
    new ColourObject('var(--DPB)','#F2EFED','Bone','B'),
    new ColourObject('var(--DPS)','#D9D2CA','Stone','S'),
    new ColourObject('var(--DPG)','#A0948E','Griege','G'),
    new ColourObject('var(--DPT)','#7A6F6D','Typhoon','T'),
    new ColourObject('var(--DPE)','#494444','Evening','E'),
    new ColourObject('var(--DPA)','#292428','Aubergine','A'),
    new ColourObject('var(--DPD)','#1A1A1A','Dark','D'),
    new ColourObject('var(--DPZ)','#000000','Black','Z')
]}
Colours.Array.map((C)=>Colours.Obj[C.Ref] = C)
const W = Colours.Obj.W;
const B = Colours.Obj.B;
const S = Colours.Obj.S;
const G = Colours.Obj.G;
const T = Colours.Obj.T;
const E = Colours.Obj.E;
const A = Colours.Obj.A;
const D = Colours.Obj.D;
const Z = Colours.Obj.Z;


const Layers ={Array:[
    new layerPropsClass(W.Name ,W,T,E,S,S,T),
    new layerPropsClass(B.Name ,B,T,E,S,G,T),
    new layerPropsClass(S.Name ,S,E,D,B,G,E),
    new layerPropsClass(G.Name ,G,E,D,S,T,E),
    new layerPropsClass(T.Name ,T,B,W,E,E,B),
    new layerPropsClass(E.Name ,E,B,W,A,A,B),
    new layerPropsClass(A.Name ,A,S,B,E,D,S),
    new layerPropsClass(D.Name ,D,S,B,E,Z,S),
]}
Layers.Array.map((L)=>Layers[L.AbsoluteName] = L)
class SegmentBlock{
    constructor(F=Segments[0]){
        this.One = new layerPropsClass(F.Code+'One',      W,          T,     A,    F.Light,      S,      F.Pure)
        this.Two = new layerPropsClass(F.Code+'One',      W,          F.Pure,     A,    F.Light,      S,      F.Pure)
        this.Three = new layerPropsClass(F.Code+'Two',    F.Accent,   F.Pure,     E,    F.Light,      F.Light,F.Accent)
        this.Four = new layerPropsClass(F.Code+'Three',   F.Light,    F.Umbra,    A,    F.Accent,     F.Dark, F.Accent)
        this.Five = new layerPropsClass(F.Code+'Four',    F.Dark,     F.Accent,   W,    F.Umbra,      F.Umbra,F.Accent)
        this.Six = new layerPropsClass(F.Code+'Five',     F.Umbra,    F.Accent,   B,    F.Dark,       A,      F.Accent)
        this.Seven = new layerPropsClass(F.Code+'Six',    A,          F.Pure,     B,    F.Umbra,      D,      F.Pure)
        this.Eight = new layerPropsClass(F.Code+'Six',    A,          S,     B,    F.Umbra,      D,      F.Pure)

    }
}
export const Segments={Array:[
    new Segmentlayers('Real Estate','#E5EDFF','#6488E2','#4169E4','#1641C5','#2E324E','REA'),
    new Segmentlayers('Landlords','#EAF9FB','#AFEBF4','#5BCDDD','#1898AA','#33464C','LLS'),
    new Segmentlayers('BTR','#E7FEF0','#88D7A9','#5BB280','#336C4B','#33413A','BTR'),
    new Segmentlayers('Student','#FFF9E5','#FCCE4C','#FEC200','#CE9D00','#544420','BFS'),
    new Segmentlayers('Developers','#FFECE5','#FC7247','#FD561A','#D23C06','#542E25','DEV'),
    new Segmentlayers('International','#FFE5E5','#DE4F4F','#DB1616','#BA0000','#4D2124','INT'),
    new Segmentlayers('Contractors','#FFE5F9','#CE6FB7','#BA539E','#A3137C','#462E40','FFE'),
    new Segmentlayers('Defaut','#FACBCE','#CB5E65','#B7454D','#73262b','#382529','DEF')

],Dark:{},Light:{}}
Segments.Array.map((S)=>Segments[S.Code] = new SegmentBlock(S))
Segments.Array.map((S)=>{
    let x = new SegmentBlock(S)
    Segments.Dark[S.Code] = {   One:{RelativeName:S.Code+'One',...x.Eight},
                                Two:{RelativeName:S.Code+'Two',...x.Seven},
                                Three:{RelativeName:S.Code+'Three',...x.Six},
                                Four:{RelativeName:S.Code+'Three',...x.Five}
                        }})
Segments.Array.map((S)=>{
    let x = new SegmentBlock(S)
    Segments.Light[S.Code] = {  One:{RelativeName:S.Code+'One',...x.One},
                                Two:{RelativeName:S.Code+'Two',...x.Two},
                                Three:{RelativeName:S.Code+'Three',...x.Three},
                                Four:{RelativeName:S.Code+'Three',...x.Four}
}})
export class Mode{
    constructor(T,L,S,P,N){
        this.Title = T
        this.Layers = {array:L}
        L.map((layer)=>{
            this.Layers[layer.RelativeName] = layer
        })
        this.SegmentLayers=S
        this.Segments = Segments.Array
        this.Set = ()=>this
        this.Next=N
        this.Possition=P
        this.Absolute=Layers.Array
        this.GetLayerProps=(layer='One',segment=undefined)=>{
            if(segment){
                try{
                    let x = this.SegmentLayers[segment]
                    try{
                        let x = this.SegmentLayers[segment][layer]
                        return this.SegmentLayers[segment][layer]
                    }catch(error){console.error("Layer provided was not idenitified in Segment",error.message)}
                }
                catch(error){console.error("Segment provided was not idenitified",error.message)}
            }
            try{
                let x = this.Layers[layer]
                return this.Layers[layer]
            }catch(error){
                console.error("Layer provided was not idenitified",error.message)
                return this.Layers.One
            }
        }
        this.GetAccentLayerProps=(layer='One',segment=undefined)=>{
            let AbsoluteObj = {}
            let NewLayerProps = {}
            let NewLayer = ''
            let AccentName = this.GetLayerProps(layer).ColourNames.Accent
            this.Layers.array.map((layer)=>{
                if(AccentName ==layer.AbsoluteName){
                    NewLayerProps = layer;
                    NewLayer = layer.RelativeName
                }
            })
            return {NewLayerProps,NewLayer}
    
        }
        // this.Segments=[REA,LLS,BTR,BFS,DEV,INT,FFE]
    }
}

export const Modes ={
    array:[
    new Mode('Light',[
        {RelativeName:'One',...Layers.White},
        {RelativeName:'Two',...Layers.Bone},
        {RelativeName:'Three',...Layers.Stone},
        {RelativeName:'Four',...Layers.Griege},
    ],
    Segments.Light
    ,0,1),
    
    new Mode('Dark',[
        {RelativeName:'One',...Layers.Aubergine},
        {RelativeName:'Two',...Layers.Dark},
        {RelativeName:'Three',...Layers.Evening},
        {RelativeName:'Four',...Layers.Typhoon},
    ],    Segments.Dark
    ,1,0)
],
Select:function(mode=1){
    const {cookieHandler}=useCookiesContext()
    try{
        let modetest = this.array[mode].One // tests if passed 'mode' is valid
        return this.array[mode]
    } catch(error){
        console.error('mode returned invalid, using cookie',error.message)
        try{
            let cookietest = this.array[cookieHandler.get('PreferedTheme')].One // tests if Cookie request returns valid
            return this.array[cookieHandler.get('PreferedTheme')]
        } catch(error){
            console.error('cookie returned invalid, using device defualt',error.message)
            return this.array[window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 1:0]
        }
    }}
}




const ModeContext = createContext()




export const ModeProvider = ({children,mode=undefined,...props})=>{
    const {cookieHandler}=useCookiesContext()
    const [Mode,setMode] = useState(Modes.Select(mode))
    Mode.Possition !== Modes.Select(mode).Possition && setMode(Modes.Select(mode))
    if(!props.demo)cookieHandler.set('PreferedTheme',Modes.Select(mode).Possition)
    const updateMode=(mode)=>setMode(Modes.Select(mode))
    // if(props.report)console.log(Mode)


    return(
        <ModeContext.Provider value={{Mode,updateMode,mode}}>
            {children}
        </ModeContext.Provider>
    )
}
export const useModeContext = ()=>useContext(ModeContext)


const LayerContext = createContext('One','None');

export const LayerProvider = ({children,layer='One',Segment=undefined,...props})=>{
    const {Mode} = useModeContext() 
    const [layerProps,setLayerProps] = useState(Mode.GetLayerProps(layer,Segment))
    if(Mode.GetLayerProps(layer,Segment) !== layerProps)setLayerProps(Mode.GetLayerProps(layer,Segment))
    const getXColor =(x,l=layer)=>Mode.GetLayerProps(l)[x]
    // if(props.report)console.log(layerProps)
    return(
        <LayerContext.Provider value={{layer,layerProps,getXColor}}>
            {children}
        </LayerContext.Provider>
    )
    

}
export const useLayerContext = ()=>useContext(LayerContext)



