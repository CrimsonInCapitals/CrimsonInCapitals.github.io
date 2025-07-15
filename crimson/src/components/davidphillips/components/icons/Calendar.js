import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgCalendar = (props) =>{
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
      d="M32.943 117.49v-70c0-6.68 5.4-12.09 12.1-12.09h7.9v-2.91c0-1.15 1-2.09 2.1-2.09 1.2 0 2.1.94 2.1 2.09v2.91h45.8v-2.91c0-1.15 1-2.09 2.1-2.09 1.2 0 2.1.94 2.1 2.09v2.91h7.9c6.7 0 12.1 5.41 12.1 12.09v70c0 6.67-5.4 12.08-12.1 12.08h-70c-6.7 0-12.1-5.41-12.1-12.08m20-77.92h-7.9c-4.4 0-7.9 3.55-7.9 7.92v7.91h85.8v-7.91c0-4.37-3.5-7.92-7.9-7.92h-7.9v2.92c0 1.15-.9 2.08-2.1 2.08-1.1 0-2.1-.93-2.1-2.08v-2.92h-45.8v2.92c0 1.15-.9 2.08-2.1 2.08-1.1 0-2.1-.93-2.1-2.08zm-15.8 20v57.92c0 4.37 3.5 7.91 7.9 7.91h70c4.4 0 7.9-3.54 7.9-7.91V59.57z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCalendar;
