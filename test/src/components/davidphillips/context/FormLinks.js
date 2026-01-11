import { Icons } from "../components/icons/index"

export class Link{
    constructor(t,d,i,u,g=1){
      this.Title = t
      this.Description = d
      this.Icon = i
      this.URL = u
      this.Grade = g
    }
  }
   
   
  export const FormLinks = [
   
    new Link(
      'Brand Asset Request',
      'Request form for new peace of colateral, like business cards, brochures, or social media content.',
      Icons.obj.CustomeMessured.element,
      'https://forms.monday.com/forms/908062bf219fc2d9019fefeeb0c8397d?r=use1'
    ),
    new Link(
      'Photoshoot Request',
      'Requst that our photographer attend a new install. Request will be reviewed based on business use case.',
      Icons.obj.Camera.element,
      'https://forms.monday.com/forms/8c25271b37ba0123cf78e6fffe7763e6?r=use1'
    ),
    new Link(
      'New Testimony',
      'submitt a new customer review, that you recieved directly.',
      Icons.obj.Review.element,
      'https://forms.monday.com/forms/deec915c3de4979b8ca1f53140204bb3?r=use1'
    ),
  
    new Link(
      'New Project',
      'Submit a new request to PDT to arange the development of a large scale install pitch.',
      Icons.obj.Building.element,
      'https://forms.monday.com/forms/60a0659876e4935d57201c027831d6cf?r=use1'
    ),
    new Link(
      'Report Project Risk',
      'Submit a risk alert for a current project to be reviewed in the next PSG meeting.',
      Icons.obj.HardHat.element,
      'https://forms.monday.com/forms/ff056721dea8eb80a4b950fdae8b9b6d?r=use1'
    ),
    new Link(
      'Show Home',
      'Send a new Show Home oportunity to the design team.',
      Icons.obj.HomeStaging.element,
      'https://forms.monday.com/forms/80facd76cfbdd5143169df4b98b11e5b?r=use1'
    ),
    new Link(
      'Campaign Request',
      'request a new campaign based around a spesific event or targeting a spesific group',
      Icons.obj.DateSelection.element,
      'https://forms.monday.com/forms/44a98d4f601c1b100b3b892ccb0a5aac?r=use1'
    ),
  ]