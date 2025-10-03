import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniWallet = (props) =>{
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
      d="M52.943 100.017V68.782c0-3.162 2.1-5.928 5.1-6.812l30-8.649c2.1-.616 4.4-.197 6.2 1.14s2.8 3.44 2.8 5.66v2.814h3c3.9 0 7 3.174 7 7.08v30.002c0 3.917-3.1 7.079-7 7.079h-40c-3.9 0-7.1-3.162-7.1-7.079m40-37.082v-2.814c0-.918-.5-1.779-1.2-2.325-.7-.558-1.7-.731-2.5-.475l-19.5 5.614zm-35.9 7.08v30.002c0 1.616 1.4 2.917 3 2.917h40c1.6 0 2.9-1.301 2.9-2.917V70.015c0-1.605-1.3-2.92-2.9-2.92h-40c-1.6 0-3 1.315-3 2.92"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniWallet;
