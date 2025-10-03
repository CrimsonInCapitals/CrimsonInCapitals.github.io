import { Icons } from "../components/icons/index";

export class Link{
    constructor(t,d,i,u,g=1){
      this.Title = t
      this.Description = d
      try{
        this.Icon = Icons.obj[i].element}
        catch(error){
          this.Icon = Icons.obj.Sofa.element
        }
      this.URL = u
      this.Grade = g
    }
  }
export const SharePointLinks=[
  new Link(
    'Marketing',
    'Digital copies of our brochures, Linked In banners, Images of installs and more.',
    'Scales',
    'https://davidphillipsgroup.sharepoint.com/SPOMarketing'
  ),
  new Link(
    'Projects',
    'All files portaining to Project development and contracting.',
    'CriticalPath',
    'https://davidphillipsgroup.sharepoint.com/SPOProjects'
  ),
  new Link(
    'Inventory',
    'All files portaining to Inventory managment.',
    'Boxes',
    'https://davidphillipsgroup.sharepoint.com/SPOInventory%20Portal'
  ),
  new Link(
    'Product',
    'All files portaining to product.',
    'FabricOptions',
    'https://davidphillipsgroup.sharepoint.com/SPOInventory%20Portal/Forms/AllItems.aspxhttps://davidphillipsgroup.sharepoint.com/SPOProjects'
  ),
]