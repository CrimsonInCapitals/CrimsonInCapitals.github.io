import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniAccount = (props) =>{
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
      d="M79.792 52.91c9.5 0 17.1 7.66 17.1 17.08 0 9.43-7.6 17.09-17.1 17.09-9.4 0-17-7.66-17-17.09 0-9.42 7.6-17.08 17-17.08m0 4.17c-7.1 0-12.9 5.79-12.9 12.91 0 7.13 5.8 12.92 12.9 12.92 7.2 0 13-5.79 13-12.92 0-7.12-5.8-12.91-13-12.91m-22.7 47.909c0 1.16-.9 2.091-2.1 2.091-1.1 0-2.1-.931-2.1-2.091v-2.019c0-3.09 2-5.82 5-6.75v-.01c7-2.14 14.4-3.3 22.1-3.3s15.1 1.16 22.101 3.31v.01c3 .93 5 3.65 5 6.73v2.029c0 1.16-.901 2.091-2.101 2.091-1.1 0-2.1-.931-2.1-2.091v-2.019c0-1.26-.8-2.381-2-2.771-6.6-2.03-13.6-3.119-20.9-3.119s-14.3 1.09-20.9 3.119c-1.2.38-2 1.501-2 2.771z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniAccount;
