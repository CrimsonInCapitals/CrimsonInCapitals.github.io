import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgJHandle = (props) =>{
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
      d="M97.676 126.378v-4.443L24.327 97.486a2.078 2.078 0 0 1 1.313-3.94l74.77 24.922a2.08 2.08 0 0 1 1.42 1.971v4.483l5.815 1.938V25.065a2.078 2.078 0 0 1 4.154 0v103.457l10.8-3.6V25.065a2.078 2.078 0 0 1 4.154 0v98.472l7.236-2.411a2.077 2.077 0 1 1 1.313 3.94l-9.931 3.311-.077.025-14.877 4.959-.077.025-9.93 3.311a2.07 2.07 0 0 1-1.314 0l-74.769-24.923a2.08 2.08 0 0 1-1.314-2.628 2.08 2.08 0 0 1 2.627-1.313l72.036 24.012v-5.467m7.97 4.195-3.816-1.273v2.545z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgJHandle;
