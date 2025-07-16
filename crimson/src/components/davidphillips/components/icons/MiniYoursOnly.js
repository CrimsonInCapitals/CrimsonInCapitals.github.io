import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniYoursOnly = (props) =>{
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
      d="M79.9952 52.9175C94.9452 52.9175 107.085 65.0474 107.085 79.9974C107.085 94.9473 94.9452 107.087 79.9952 107.087C65.0453 107.087 52.9155 94.9473 52.9155 79.9974C52.9155 65.0474 65.0453 52.9175 79.9952 52.9175ZM79.9952 57.0874C67.3453 57.0874 57.0854 67.3574 57.0854 79.9974C57.0854 92.6473 67.3453 102.917 79.9952 102.917C92.6452 102.917 102.915 92.6473 102.915 79.9974C102.915 67.3574 92.6452 57.0874 79.9952 57.0874Z"  
    />
  </svg>
  )
}
export default SvgMiniYoursOnly;
