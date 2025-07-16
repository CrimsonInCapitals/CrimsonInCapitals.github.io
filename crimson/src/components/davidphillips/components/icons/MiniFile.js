import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniFile = (props) =>{
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
      d="M100.787 74.246c.8.9 1.3 2 1.3 3.3v22.5c0 1.8-.701 3.6-2.1 5-1.3 1.3-3.1 2-5 2h-30c-3.9 0-7.1-3.1-7.1-7v-40c0-4 3.2-7.1 7.1-7.1h12.5c1.3 0 2.4.5 3.3 1.3zm-23-17c-.1-.1-.2-.2-.3-.2h-12.5c-1.6 0-2.9 1.3-2.9 3v40c0 1.6 1.3 2.9 2.9 2.9h30q1.2 0 2.1-.9c.5-.5.8-1.3.8-2v-22.5c0-.2 0-.3-.1-.3-.1-.1-.2-.2-.3-.2h-12.5c-3.9 0-7.1-3.1-7.1-7v-12.5c0-.2 0-.3-.1-.3m15.7 15.7-11.4-11.5v8.6c0 1.6 1.3 2.9 2.9 2.9z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniFile;
