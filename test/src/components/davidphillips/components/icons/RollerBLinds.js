import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgRollerBLinds = (props) =>{
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
      d="M22.846 40.018c0-5.459 1.474-10.285 3.648-13.285 1.765-2.436 4.019-3.746 6.373-3.746h101.717a2.077 2.077 0 0 1 0 4.154h-95.06c2.017 3.02 3.364 7.66 3.364 12.877s-1.347 9.857-3.365 12.877h95.061a2.077 2.077 0 0 1 0 4.154H32.867c-2.135 0-4.187-1.078-5.867-3.095v78.695h107.584a2.077 2.077 0 0 1 0 4.154H24.923a2.08 2.08 0 0 1-2.077-2.077zm10.02-12.877c-1.155 0-2.142.833-3.008 2.029C28.088 31.613 27 35.572 27 40.018c0 4.445 1.087 8.405 2.858 10.849.866 1.195 1.853 2.028 3.009 2.028s2.142-.833 3.008-2.028c1.77-2.444 2.859-6.404 2.859-10.849s-1.088-8.405-2.859-10.849c-.866-1.195-1.853-2.028-3.008-2.028"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgRollerBLinds;
