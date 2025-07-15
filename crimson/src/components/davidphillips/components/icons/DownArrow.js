import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDownArrow = (props) =>{
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
      d="M51.285 92.772a1.47 1.47 0 0 0 1.47-1.47v-62.69a5.624 5.624 0 0 1 5.624-5.625h42.752a5.624 5.624 0 0 1 5.624 5.624v62.69a1.473 1.473 0 0 0 1.47 1.47h5.915a4.35 4.35 0 0 1 3.077 7.429l-33.486 33.486a5.624 5.624 0 0 1-7.953 0L42.292 100.2a4.35 4.35 0 0 1 3.078-7.428zm0 4.154H45.37a.198.198 0 0 0-.14.337l33.485 33.486a1.47 1.47 0 0 0 2.08 0l33.485-33.486a.2.2 0 0 0 .043-.215.2.2 0 0 0-.183-.122h-5.915a5.624 5.624 0 0 1-5.624-5.624v-62.69a1.47 1.47 0 0 0-1.47-1.47H58.379a1.47 1.47 0 0 0-1.47 1.47v62.69a5.623 5.623 0 0 1-5.624 5.624"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDownArrow;
