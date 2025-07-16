import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDateSelection = (props) =>{
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
      d="M33 117.09v-70C33 40.41 38.4 35 45.1 35H53v-2.91c0-1.15 1-2.09 2.1-2.09 1.2 0 2.1.94 2.1 2.09V35H103v-2.91c0-1.15.999-2.09 2.099-2.09 1.2 0 2.101.94 2.101 2.09V35h7.899c6.7 0 12.101 5.41 12.101 12.09v70c0 6.67-5.401 12.08-12.101 12.08h-70c-6.7 0-12.099-5.41-12.099-12.08m20-77.92h-7.9c-4.4 0-7.9 3.55-7.9 7.92V55H123v-7.91c0-4.37-3.501-7.92-7.901-7.92H107.2v2.92c0 1.15-.901 2.08-2.101 2.08-1.1 0-2.099-.93-2.099-2.08v-2.92H57.2v2.92c0 1.15-.9 2.08-2.1 2.08-1.1 0-2.1-.93-2.1-2.08zm-15.8 20v57.92c0 4.37 3.5 7.91 7.9 7.91h69.999c4.4 0 7.901-3.54 7.901-7.91V59.17zm55 25.42-8.6-8.53c-.8-.81-.8-2.13 0-2.95.9-.81 2.2-.81 3 0l8.5 8.53 8.499-8.53c.9-.81 2.2-.81 3 0 .8.82.8 2.14 0 2.95l-8.5 8.53 8.5 8.52c.8.82.8 2.14 0 2.95s-2.1.81-3 0l-8.5-8.53-8.5 8.53c-.8.81-2.1.81-3 0-.8-.81-.8-2.13 0-2.95z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDateSelection;
