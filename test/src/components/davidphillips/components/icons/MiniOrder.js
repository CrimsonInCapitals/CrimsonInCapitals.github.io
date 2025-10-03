import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniOrder = (props) =>{
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
      d="M74.95 62.041c-1.1 0-2-.9-2-2 0-1.2.9-2.1 2-2.1h29.999c1.2 0 2.1.9 2.1 2.1 0 1.1-.9 2-2.1 2zM74.94 72.054c-1.083 0-2.083-.9-2.083-2 0-1.2 1-2.1 2.084-2.1h25c1.166 0 2.083.9 2.083 2.1 0 1.1-.917 2-2.083 2zM74.981 82.045c-1.133 0-2.067-.9-2.067-2 0-1.2.934-2.1 2.067-2.1h20c1.2 0 2.134.9 2.134 2.1 0 1.1-.934 2-2.134 2zM53.55 91.442c-.8-.8-.8-2.1 0-2.9s2.1-.8 2.9 0l8.5 8.5 8.6-8.5c.8-.8 2.1-.8 2.9 0s.8 2.1 0 2.9l-10 10c-.8.8-2.1.8-2.9 0z"
      clipRule="evenodd"
    />
    <path
      fill={layerProps?props.Inactive?layerProps.Accent:layerProps.Title:'#494444'}
      fillRule="evenodd"
      d="M62.95 60.041c0-1.2.9-2.1 2-2.1 1.2 0 2.099.9 2.099 2.1v40c0 1.1-.9 2-2.1 2-1.1 0-2-.9-2-2z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniOrder;
