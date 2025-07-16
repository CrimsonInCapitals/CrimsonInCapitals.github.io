import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgPanelBlinds = (props) =>{
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
      d="M32.815 37.088h-7.892a2.077 2.077 0 0 1-2.077-2.077v-9.97c0-1.146.93-2.076 2.077-2.076h109.661a2.078 2.078 0 0 1 0 4.154H27v5.815h107.584a2.078 2.078 0 0 1 0 4.154h-7.892v95.538h7.892a2.078 2.078 0 0 1 0 4.154H34.892a2.077 2.077 0 0 1-2.077-2.077zm29.908 0H36.969v95.538h25.754zm29.907 0H66.876v95.538H92.63zm29.908 0H96.784v95.538h25.754z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgPanelBlinds;
