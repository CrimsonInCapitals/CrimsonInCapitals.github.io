import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniPen = (props) =>{
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
      d="m58.591 104.451-.5.5c-.8.8-2.125.775-3 0-.75-.75-.775-2.075 0-3l.5-.5c-.45-1.05-.8-2.2-.775-3.275l-.025-7.925c-.025-1.925.825-3.675 2.1-5.1l28.1-28.1c2.826-2.675 7.25-2.75 10.1.1l7.926 7.826c2.725 2.825 2.649 7.249-.026 10.074l-28.1 28.1c-1.425 1.275-3.175 2.125-5.1 2.1l-7.924-.025c-1.075.025-2.226-.325-3.276-.775m22.3-37.3-21 21c-.6.6-.95 1.25-.9 2.1l.026 7.925c.025.725.299 1.5.899 2.1.45.45 1.225.725 1.95.75l7.926.025c.85.05 1.624-.275 2.099-.9l21-21zm14.9 9.1 4.2-4.2c1.225-1.075 1.201-3 .026-4.074l-7.951-7.952c-1.075-1.175-3-1.2-4.075.026l-4.2 4.2z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniPen;
