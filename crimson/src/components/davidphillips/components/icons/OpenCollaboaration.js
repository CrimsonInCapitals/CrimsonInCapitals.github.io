import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgOpenCollaboaration = (props) =>{
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
      d="M54.957 127.079H34.523c-1.214 0-2.124-.93-2.124-2.08s.91-2.08 2.124-2.08h18.41v-87.92c0-1.88.709-3.68 2.024-5.01 1.416-1.33 3.136-2.07 5.057-2.07h39.957c1.922 0 3.743.74 5.058 2.07s2.023 3.13 2.023 5.01v87.92h18.512c1.113 0 2.023.93 2.023 2.08s-.91 2.08-2.023 2.08H54.957m47.947-4.16v-87.92c0-.77-.303-1.51-.809-2.06-.607-.55-1.314-.86-2.124-.86h-28.02l19.725 4.95c3.237.79 5.463 3.63 5.463 6.88v67.19c0 3.25-2.226 6.08-5.463 6.87l-19.725 4.95zm-44.913-90.03v.05c-.607.55-.91 1.29-.91 2.06v87.33l33.584-8.4a2.925 2.925 0 0 0 2.225-2.83v-67.19c0-1.34-.91-2.51-2.225-2.83zM85.911 65c0-1.15.91-2.08 2.124-2.08 1.113 0 2.023.93 2.023 2.08v25c0 1.15-.91 2.08-2.023 2.08-1.214 0-2.125-.93-2.125-2.08z"
      clipRule="evenodd"
    />
  </svg>
)};
export default SvgOpenCollaboaration;
