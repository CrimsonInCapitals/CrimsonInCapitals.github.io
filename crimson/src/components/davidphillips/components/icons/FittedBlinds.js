import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgFittedBlinds = (props) =>{
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
      d="M22.846 24.946c0-1.147.93-2.077 2.077-2.077h109.661c1.147 0 2.077.93 2.077 2.077v109.662c0 1.145-.93 2.077-2.077 2.077a2.08 2.08 0 0 1-2.077-2.077V27.023H26.999v107.585c0 1.145-.93 2.077-2.076 2.077a2.08 2.08 0 0 1-2.077-2.077zm14.123 91.8v17.862c0 1.145-.93 2.077-2.077 2.077a2.08 2.08 0 0 1-2.077-2.077V34.915c0-1.147.93-2.077 2.077-2.077h89.723c1.147 0 2.077.93 2.077 2.077v99.693a2.08 2.08 0 0 1-2.077 2.077 2.08 2.08 0 0 1-2.077-2.077v-17.862zm85.569-4.154v-5.815h-85.57v5.815zm0-9.969v-5.815h-85.57v5.815zm0-9.97v-5.815h-85.57v5.816zm0-9.969V76.87h-85.57v5.816zm0-9.969V66.9h-85.57v5.815zm0-9.969v-5.815h-85.57v5.815zm0-9.97v-5.815h-85.57v5.816zm0-9.968v-5.816h-85.57v5.816z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgFittedBlinds;
