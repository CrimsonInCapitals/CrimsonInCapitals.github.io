import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniCalender = (props) =>{
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
      d="M52.908 99.982V64.99c0-3.915 3.2-7.092 7.1-7.092h2.9v-2.916c0-1.143.9-2.08 2.1-2.08 1.1 0 2.1.937 2.1 2.08v2.916h25.8v-2.916c0-1.143.9-2.08 2.1-2.08 1.1 0 2.1.937 2.1 2.08v2.916h2.901c3.9 0 7.099 3.177 7.099 7.092v34.992c0 3.915-3.199 7.083-7.099 7.083h-40c-3.9 0-7.1-3.168-7.1-7.083m10-37.917h-2.9c-1.6 0-2.9 1.305-2.9 2.925v7.91h45.8v-7.91c0-1.62-1.299-2.925-2.899-2.925h-2.9v2.925c0 1.143-1 2.079-2.1 2.079-1.2 0-2.1-.936-2.1-2.08v-2.924h-25.8v2.925c0 1.143-1 2.079-2.1 2.079-1.2 0-2.1-.936-2.1-2.08zm-5.8 15.003v22.914a2.91 2.91 0 0 0 2.9 2.916h40.001c1.6 0 2.899-1.305 2.899-2.916V77.068z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniCalender;
