import { properties as AmazingGrace} from "../pages/Articals/AmazingGrace"
import { properties as AskItalian} from "../pages/Articals/AskItalian"
import { properties as AspinalofLondon} from "../pages/Articals/AspinalofLondon"
import { properties as BobbinEm} from "../pages/Articals/Bobbin&Em"
import { properties as Cudoni} from "../pages/Articals/Cudoni"
import { properties as DavidPhillips} from "../pages/Articals/DavidPhillips"
import { properties2 as DavidPhillipsbrand} from "../pages/Articals/DavidPhillips"
import { properties3 as DavidPhillipsicons} from "../pages/Articals/DavidPhillips"
import { properties4 as DavidPhillipsfigma} from "../pages/Articals/DavidPhillips"
import { properties5 as DavidPhillipsother} from "../pages/Articals/DavidPhillips"
import { properties as Displate} from "../pages/Articals/Displate"
import { properties as LiquidGlass} from "../pages/Articals/LiquidGlass"
import { properties as MineSweeper} from "../pages/Articals/MineSweeper"
import { properties as TheDogRoom} from "../pages/Articals/TheDogRoom"
import { properties as VectorIllustration} from "../pages/Articals/VectorIllustration"
import { properties as SystemIcons} from "../pages/Articals/SystemIcons"


export class Artical{
    constructor(dims,title,type,description,Route,content,component,priority=1){
        this.Dims=dims
        this.Title = title
        const contentTypes=['Case Study','Project Gallery','Though Leadership','Code Proejct']
        this.Type=contentTypes[type]
        this.Description=description
        this.Route='articals/'+Route
        this.component=component
        this.content=content
        this.priority=priority
    }
}


export const Articals=[
        new Artical(...DavidPhillips),
        new Artical(...DavidPhillipsbrand),
        new Artical(...DavidPhillipsicons),
        new Artical(...DavidPhillipsfigma),
        new Artical(...DavidPhillipsother),
        new Artical(...Displate),
        new Artical(...TheDogRoom),
        new Artical(...AspinalofLondon),
        new Artical(...Cudoni),
        new Artical(...AmazingGrace),
        // new Artical(...AskItalian),
        // new Artical(...LiquidGlass),
        // new Artical(...BobbinEm),
        // new Artical(...VectorIllustration),
        // new Artical(...DigitalBrochures),
        // new Artical(...SystemIcons),
        // new Artical(...MineSweeper),
]