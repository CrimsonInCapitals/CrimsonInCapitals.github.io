import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniArrowRight = (props) =>{
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
      d="M63.9945 51.4793C63.1719 50.6687 63.1719 49.3455 63.9945 48.5349C64.8051 47.7123 66.1166 47.7123 66.9392 48.5349L93.0819 74.6773C95.8476 77.443 95.8476 81.9373 93.0819 84.703L66.307 111.477C65.4964 112.288 64.1735 112.288 63.3629 111.477C62.5523 110.667 62.5523 109.343 63.3629 108.533L90.1372 81.7586C91.2816 80.6142 91.2816 78.7665 90.1372 77.634L63.9945 51.4793Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniArrowRight;
