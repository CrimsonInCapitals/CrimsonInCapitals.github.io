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