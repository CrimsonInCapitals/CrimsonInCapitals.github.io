import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgHamberger = (props) =>{
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
      d="M54.9883 57.0792C53.8383 57.0792 52.9082 56.1491 52.9082 54.9991C52.9082 53.8491 53.8383 52.9192 54.9883 52.9192H104.988C106.138 52.9192 107.078 53.8491 107.078 54.9991C107.078 56.1491 106.138 57.0792 104.988 57.0792H54.9883ZM54.9883 82.0792C53.8383 82.0792 52.9082 81.1491 52.9082 79.9991C52.9082 78.8491 53.8383 77.9191 54.9883 77.9191H104.988C106.138 77.9191 107.078 78.8491 107.078 79.9991C107.078 81.1491 106.138 82.0792 104.988 82.0792H54.9883ZM54.9883 107.079C53.8383 107.079 52.9082 106.149 52.9082 104.999C52.9082 103.849 53.8383 102.919 54.9883 102.919H104.988C106.138 102.919 107.078 103.849 107.078 104.999C107.078 106.149 106.138 107.079 104.988 107.079H54.9883Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgHamberger;
