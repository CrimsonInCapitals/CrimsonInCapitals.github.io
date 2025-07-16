import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDryCleanB = (props) =>{
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
      d="M80.014 52.882c14.941 0 27.059 12.118 27.059 27.059 0 15.059-12.118 27.176-27.059 27.176S52.955 95 52.955 79.941c0-14.942 12.118-27.06 27.059-27.06m0 4.235c-12.706 0-22.941 10.236-22.941 22.824a22.896 22.896 0 0 0 22.941 22.941c12.588 0 22.941-10.235 22.941-22.941 0-12.588-10.353-22.824-22.941-22.824m-4.588 24.941v7.883a2.11 2.11 0 0 1-2.118 2.117 2.11 2.11 0 0 1-2.118-2.117v-20c0-1.06.941-2 2.118-2h8.353c3.883 0 7.06 3.176 7.06 7.058 0 3.883-3.177 7.06-7.06 7.06zm0-4.118h6.236a2.913 2.913 0 0 0 2.94-2.94 2.913 2.913 0 0 0-2.94-2.942h-6.236z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDryCleanB;
