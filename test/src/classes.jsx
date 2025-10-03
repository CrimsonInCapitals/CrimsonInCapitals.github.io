export class PageClass{
  constructor(name='Home',route='/', rank=2,date='07/08/2025',type='page',other={}){
    const articalRanktypes =['Other','Main','Parent','Case Study','Project','Perspective']
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