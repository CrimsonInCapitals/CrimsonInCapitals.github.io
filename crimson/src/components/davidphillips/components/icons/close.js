import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgCloseIcon = (props) =>{
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
      d="M77.0496 79.999L53.5203 56.4691C52.7103 55.6591 52.7103 54.3391 53.5203 53.5291C54.3303 52.7191 55.6496 52.7191 56.4696 53.5291L79.99 77.0491L103.52 53.5291C104.33 52.7191 105.649 52.7191 106.469 53.5291C107.279 54.3391 107.279 55.6591 106.469 56.4691L82.9402 79.999L106.469 103.529C107.279 104.339 107.279 105.659 106.469 106.469C105.649 107.289 104.33 107.289 103.52 106.469L79.99 82.9491L56.4696 106.469C55.6496 107.289 54.3303 107.289 53.5203 106.469C52.7103 105.659 52.7103 104.339 53.5203 103.529L77.0496 79.999Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCloseIcon;
