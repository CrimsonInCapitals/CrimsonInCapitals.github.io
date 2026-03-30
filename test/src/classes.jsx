import { Link } from "react-router-dom"
import { GenChip } from "./components/Chips"

export class PageClass{
  constructor(name='Home',route='/', rank=2,date='07/08/2025',type='page',other={}){
    const articalRanktypes =['Other','Main','Parent','Case Study','Project','Perspective','Exploration']
    this.name = name
    this.route = route
    // this.element=element
    this.rank=rank
    this.date = new Date(date)
    this.type=type
    switch (type) {
      case 'article':
        try{
          this.chips = other.chips
          this.subtype = articalRanktypes[rank]
        }catch(error){throw new Error('chips not defined',error.message)}
        break;
      case 'parent':
        try{
          this.chip = other.chip
          this.image = other.image
          this.description = other.description
        }catch(error){throw new Error('parent must have all required properties',error.message)}
    
      default:
        break;
    }
    this.type = this.type==undefined? 'page':type
    this.other=other
    this.get=(r=undefined)=>r==undefined?this:this[r]?this[r]:false
  }
}
export class RedirectClass{
  constructor(name='',route='',redirect='',external=false){
    this.route = route
    this.name = name
    this.redirect = redirect
    this.external = external
    this.get=(r=undefined)=>r==undefined?this:this[r]?this[r]:false

  }
}
export class action{
        constructor(s,e,v,r,t=100){
            this.r=r;
            this.v=v;
            this.s=s;
            this.e=e
            this.w= s/(t/100)
            this.t= t/100
        }
    }


export const URL=(source)=>{
  return("url("+source+")")
}


export const GenChip=({to="/",name="chip",display="chip",className="",action="link",f=undefined,type='unknown',weight=1,active=false})=>{
  const Class = active==true? "chip "+className+" activeChip":className+" chip"
  
  return action!=='link'?<button className={Class} onClick={f}><span>{display}</span></button>
    :<Link to={to} className={Class}><span>{display}</span></Link>
}
export class Chip{
  constructor(to="/",name="chip",displayText="chip",className="",type='unknown',weightInFitering=1,hiddenOnCard=false){
    this.to = to == 'ArticlesFilter'?'/articles/'+name:to
    this.name = name
    this.display=displayText
    this.className=className
    this.type=type
    this.weight=weightInFitering
    this.hidden=hiddenOnCard
    this.Componant=(props)=>{
        return <GenChip {...props}{...this}/>
    }
    this.get=(r=undefined)=>r==undefined?this:this[r]?this[r]:false
  }
}