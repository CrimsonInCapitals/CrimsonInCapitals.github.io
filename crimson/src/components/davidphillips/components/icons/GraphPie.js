import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const Svggraphpie = (props) =>{
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
      d="M52.9194 80.0036C52.9194 65.0536 65.0489 52.9136 79.9989 52.9136C94.9489 52.9136 107.079 65.0536 107.079 80.0036C107.079 94.9436 94.9489 107.083 79.9989 107.083C72.5189 107.083 65.749 104.053 60.849 99.1434C55.9491 94.2435 52.9194 87.4736 52.9194 80.0036ZM77.9193 57.1736C66.9293 58.1636 58.1691 66.9335 57.1791 77.9135H77.9193V57.1736ZM65.3393 97.6034C69.3093 100.923 74.4189 102.913 79.9989 102.913C92.6489 102.913 102.919 92.6436 102.919 80.0036C102.919 68.0536 93.7589 58.2336 82.079 57.1736V80.0036C82.079 80.5636 81.8591 81.0836 81.4691 81.4736L65.3393 97.6034ZM57.1791 82.0834C57.6091 86.8434 59.4891 91.1835 62.3891 94.6635L74.9691 82.0834H57.1791Z" 
      clipRule="evenodd"
    />
  </svg>)}
export default Svggraphpie;
