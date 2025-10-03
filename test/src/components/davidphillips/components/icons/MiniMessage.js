import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniMessage = (props) =>{
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
      d="M59.941 52.919h40c4 0 7.1 3.17 7.1 7.08v30c0 1.88-.7 3.68-2 5.01-1.4 1.33-3.2 2.08-5.1 2.08h-27.9c-.8 0-1.5.3-2 .85l-7.1 7.02c-1.7 1.69-4.2 2.2-6.4 1.28-2.2-.91-3.6-3.06-3.6-5.45v-40.79c0-1.88.7-3.68 2-5.01 1.4-1.32 3.2-2.07 5-2.07m0 4.17c-.7 0-1.5.3-2 .85-.6.55-.9 1.29-.9 2.06v40.79c0 .71.5 1.341 1.1 1.601.6.27 1.4.119 1.9-.371l7-7.03c1.3-1.32 3.1-2.07 5-2.07h27.9c.8 0 1.6-.31 2.1-.86.6-.54.9-1.28.9-2.06v-30c0-1.61-1.3-2.91-3-2.91z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniMessage;
