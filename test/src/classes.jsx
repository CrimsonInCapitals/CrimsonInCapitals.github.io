export class PageClass{
  constructor(name='Home',route='/',element, rank=2,date='07/08/2025'){
    this.name = name
    this.route = route
    this.element=element
    this.rank=rank
    this.date = date
    this.get=(r)=>this[r]?this[r]:false
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