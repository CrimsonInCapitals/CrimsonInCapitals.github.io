import { Card, DescreatCard } from "../components/card"
import { DemoCard } from "../components/carddemo"
import DeliveryMap from "../components/deliverymap"
import { CardButton, Dot, Section, VL } from "../components/Elements"
import { Slogan } from "../components/Slogan"
import { BulletPoint, FP, H1, H2, H3, H4, H5, P1, P2, P3 } from "../components/TextStyles"
import { ModeProvider, useModeContext } from "../context/brandLayers"

export const ValuesPage = ({children,layer='One',docked={left:false, right:false, top:false, bottom: false},content_direction='tb',className='',...props})=> {
document.title = 'Company Values'
const {Mode}=useModeContext()

return(
      <Card>

          <DeliveryMap/>

      </Card>

    )
}