import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniClock = (props) =>{
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
      d="M80.017 52.916c14.9 0 27.099 12.13 27.099 27.08s-12.2 27.08-27.1 27.08c-15 0-27.1-12.13-27.1-27.08s12.1-27.08 27.1-27.08m0 4.16c-12.7 0-22.9 10.27-22.9 22.92s10.2 22.92 22.9 22.92c12.6 0 22.899-10.27 22.899-22.92s-10.3-22.92-22.9-22.92m-2.101 7.92c0-1.15.9-2.08 2.1-2.08 1.1 0 2.1.93 2.1 2.08v14.14l4.4 4.39c.8.81.8 2.13 0 2.94-.9.82-2.2.82-3 0l-5-5c-.4-.39-.6-.92-.6-1.47z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniClock;
