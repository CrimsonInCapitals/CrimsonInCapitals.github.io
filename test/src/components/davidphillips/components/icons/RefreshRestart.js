import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgRefreshRestart = (props) =>{
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
      d="M61.045 62.626c8.137-8.4 21.238-10.547 31.825-4.434 12.494 7.213 16.778 23.206 9.567 35.695s-23.202 16.775-35.696 9.561a26.02 26.02 0 0 1-12.165-15.863 2.076 2.076 0 0 1 1.473-2.552 2.08 2.08 0 0 1 2.549 1.472A21.88 21.88 0 0 0 68.824 99.84c10.495 6.059 23.945 2.462 30.006-8.036s2.452-23.945-8.044-30.004c-9.37-5.41-21.089-3.119-27.808 4.903h9.518a2.084 2.084 0 0 1 .004 4.167l-13.305-.001a2.05 2.05 0 0 1-1.256-.268 2.1 2.1 0 0 1-1.061-1.815l.005-13.533a2.08 2.08 0 0 1 2.081-2.085 2.09 2.09 0 0 1 2.085 2.084z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgRefreshRestart;
