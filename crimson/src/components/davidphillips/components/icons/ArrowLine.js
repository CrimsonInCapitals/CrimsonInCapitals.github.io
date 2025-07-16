import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgArrowLine = (props) =>{
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
      d="m78.526 106.481-20-20.001a2.084 2.084 0 0 1 2.946-2.946l16.444 16.442v-44.97c0-1.147.933-2.087 2.083-2.087s2.084.94 2.084 2.087v44.97l16.443-16.442a2.084 2.084 0 0 1 2.946 2.946l-20 20.001c-.392.39-.919.613-1.473.613a2.1 2.1 0 0 1-1.473-.613"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgArrowLine;
