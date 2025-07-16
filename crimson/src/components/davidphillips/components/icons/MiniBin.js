import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniBin = (props) =>{
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
      d="M58.45 64.073h-3.1c-1.1 0-2.1-.93-2.1-2.08s1-2.08 2.1-2.08h15.9c.1-1.85.8-3.62 2.1-4.93 1.3-1.33 3.1-2.07 5-2.07h4c1.9 0 3.7.74 5 2.07 1.3 1.31 2.1 3.08 2.1 4.93h15.899c1.2 0 2.101.93 2.101 2.08s-.901 2.08-2.101 2.08h-3l-2.6 36.41c-.2 3.71-3.3 6.59-7 6.59h-24.7c-3.7 0-6.799-2.88-7.099-6.59zm17-4.16h9.8c0-.75-.3-1.46-.8-1.98-.6-.55-1.3-.86-2.1-.86h-4c-.7 0-1.5.31-2 .86-.6.52-.9 1.23-.9 1.98m22.7 4.16h-35.5l2.5 36.12a2.93 2.93 0 0 0 2.9 2.72h24.7c1.5 0 2.8-1.19 2.9-2.72zm-14.9 7.92c0-1.15 1-2.08 2.1-2.08 1.2 0 2.1.93 2.1 2.08v23c0 1.15-.9 2.08-2.1 2.08-1.1 0-2.1-.93-2.1-2.08zm-10 0c0-1.15 1-2.08 2.1-2.08 1.2 0 2.1.93 2.1 2.08v23c0 1.15-.9 2.08-2.1 2.08-1.1 0-2.1-.93-2.1-2.08z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniBin;
