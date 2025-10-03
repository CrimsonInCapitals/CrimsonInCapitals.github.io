import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgInsetJHandle = (props) =>{
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
      d="M109.097 111.194 24.358 82.948a2.078 2.078 0 0 1 1.314-3.94l82.004 27.334V25.065a2.078 2.078 0 0 1 4.154 0v81.277l5.816-1.938V94.85c0-.894.573-1.688 1.419-1.97l3.565-1.189V25.065a2.078 2.078 0 0 1 4.154 0V126.86l7.236-2.411a2.077 2.077 0 1 1 1.313 3.94l-9.969 3.324a2.1 2.1 0 0 1-1.313 0l-2.251-.751v.442c0 .893-.573 1.688-1.421 1.97l-9.969 3.323a2.1 2.1 0 0 1-1.313 0L24.358 108.45a2.077 2.077 0 1 1 1.314-3.94l82.004 27.335v-2.268l-83.318-27.773a2.077 2.077 0 1 1 1.314-3.94l84.738 28.246a2.08 2.08 0 0 1 1.42 1.971v3.764l5.816-1.939v-21.123l-7.236 2.411a2.06 2.06 0 0 1-1.313 0M121.8 96.346v30.237l.83.277V96.07z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgInsetJHandle;
