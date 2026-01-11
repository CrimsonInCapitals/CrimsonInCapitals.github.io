import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniDetails = (props) =>{
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
      d="M100.055 102.041h-40c-4 0-7.1-3.1-7.1-7v-30c0-4 3.1-7.1 7.1-7.1h40c3.9 0 7 3.1 7 7.1v30c0 3.9-3.1 7-7 7m-8-4.1h8c1.6 0 2.9-1.3 2.9-2.9v-30c0-1.7-1.3-3-2.9-3h-8zm-4.1-35.9h-27.9c-1.7 0-3 1.3-3 3v30c0 1.6 1.3 2.9 3 2.9h27.9zm-10.5 20h-9.9c-1.2 0-2.1-.9-2.1-2 0-1.2.9-2.1 2.1-2.1h9.9l-1.4-1.5c-.8-.8-.8-2.1 0-2.9s2.1-.8 2.9 0l5 5q.6.6.6 1.5c0 .5-.2 1-.6 1.4l-5 5c-.8.8-2.1.8-2.9 0s-.8-2.1 0-2.9z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniDetails;
