import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDashboard = (props) =>{
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
      d="M99.088 106.164h-40a7.08 7.08 0 0 1-7.08-7.08v-40a7.08 7.08 0 0 1 7.08-7.08h40a7.08 7.08 0 0 1 7.079 7.08v40a7.08 7.08 0 0 1-7.08 7.08m-27.08-50h-12.92c-1.61 0-2.92 1.31-2.92 2.92v40c0 1.61 1.31 2.92 2.92 2.92h12.92zm30 20.84v-17.92c0-1.61-1.31-2.92-2.92-2.92h-22.92v20.84zm-25.84 25h22.92c1.61 0 2.92-1.31 2.92-2.92v-17.92h-25.84z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDashboard;
