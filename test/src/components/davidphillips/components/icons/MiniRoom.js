import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniRoom = (props) =>{
const {layerProps}=useLayerContext()
;return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    viewBox="0 0 160 160"
    fill="none"
    {...props}
  >
    <path
      fill={layerProps?props.Inactive?layerProps.Accent:layerProps.Title:'#494444'}
      fillRule="evenodd"
      d="M53.966 93.208c-.706-1.113-1.123-2.432-.97-3.765l-.035-18.827c-.096-2.708 1.471-5.145 3.794-6.364l20-10c1.131-.464 2.164-.727 3.328-.705.944-.038 2.021.21 3.021.71l20 10c2.488 1.224 4.001 3.671 4.097 6.379l-.183 18.768a7.23 7.23 0 0 1-.915 3.853c-.208-.034-.201-.021-.189.005a7.8 7.8 0 0 1-2.684 2.518l-20.002 9.999c-2.05.975-4.348.996-6.348-.004l-20-10c-1.238-.6-2.22-1.48-2.896-2.528zM77.892 58.38l-19.218 9.61c-.918.511-1.615 1.504-1.473 2.645l-.108 18.515 20.757-10.44zm24.96 30.75.109-18.515c.078-1.081-.587-2.103-1.587-2.603L82.132 58.4l-.041 20.33zm-43.255 3.362 19.005 9.513c.982.461 1.94.449 2.71.034l19.069-9.515-20.263-10.15z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniRoom;
