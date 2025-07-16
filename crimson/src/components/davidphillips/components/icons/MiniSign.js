import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniSign = (props) =>{
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
      d="M52.943 85.003v-24.41c0-1.88.7-3.68 2.1-5.01 1.3-1.32 3.1-2.07 5-2.07h40c1.8 0 3.6.75 5 2.07 1.3 1.33 2 3.13 2 5.01v24.41c0 1.88-.7 3.68-2 5.01-1.4 1.33-3.2 2.08-5 2.08h-13v12.91c0 1.15-.9 2.091-2 2.091-1.2 0-2.1-.941-2.1-2.091v-12.91h-5.9v12.91c0 1.15-.9 2.091-2 2.091-1.2 0-2.1-.941-2.1-2.091v-12.91h-12.9c-1.9 0-3.7-.75-5-2.08-1.4-1.33-2.1-3.13-2.1-5.01m50-9.08v-15.33c0-.77-.3-1.51-.9-2.06-.5-.55-1.3-.85-2-.85h-40c-.8 0-1.6.3-2.1.85s-.9 1.29-.9 2.06v15.33zm-42.9 12h40c.7 0 1.5-.31 2-.86.6-.54.9-1.28.9-2.06v-4.91h-45.9v4.91c0 .78.4 1.52.9 2.06.5.55 1.3.86 2.1.86"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniSign;
