import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniArrowUp = (props) =>{
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
      d="M51.4744 95.9905C50.6637 96.813 49.3406 96.813 48.5299 95.9905C47.7074 95.1798 47.7074 93.8683 48.5299 93.0457L74.6724 66.903C77.438 64.1374 81.9324 64.1374 84.698 66.903L111.472 93.6779C112.283 94.4885 112.283 95.8114 111.472 96.622C110.662 97.4326 109.339 97.4326 108.528 96.622L81.7536 69.8477C80.6092 68.7033 78.7615 68.7033 77.629 69.8477L51.4744 95.9905Z"      
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniArrowUp;
