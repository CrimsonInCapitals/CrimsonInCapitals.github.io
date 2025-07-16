import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDryCleanA = (props) =>{
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
      d="M80.014 52.882c14.941 0 27.059 12.118 27.059 27.059 0 15.059-12.118 27.176-27.059 27.176S52.955 95 52.955 79.941c0-14.942 12.118-27.06 27.059-27.06m0 4.235c-12.706 0-22.941 10.236-22.941 22.824a22.896 22.896 0 0 0 22.941 22.941c12.588 0 22.941-10.235 22.941-22.941 0-12.588-10.353-22.824-22.941-22.824M71.19 89.94v-20c0-1.06.941-2 2.118-2H86.72c1.059 0 2 .94 2 2 0 1.176-.941 2.117-2 2.117H75.426v5.882h4.588c1.176 0 2.117.942 2.117 2a2.11 2.11 0 0 1-2.117 2.118h-4.588v7.883a2.11 2.11 0 0 1-2.118 2.117 2.11 2.11 0 0 1-2.118-2.117"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDryCleanA;
