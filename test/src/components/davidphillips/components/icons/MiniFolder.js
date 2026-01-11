import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniFolder = (props) =>{
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
      d="M52.932 100.016v-40c0-3.9 3.2-7.1 7.1-7.1h12.9c1.9 0 3.7.8 5 2.1l2.1 2.1c.5.5 1.3.8 2 .8h17.999c3.9 0 7.101 3.2 7.101 7.1v35c0 3.9-3.201 7.1-7.101 7.1h-40c-3.9 0-7.1-3.2-7.1-7.1m50-34.5v-.5c0-1.6-1.301-2.9-2.901-2.9h-18c-1.8 0-3.6-.8-5-2.1l-2-2.1c-.6-.5-1.3-.8-2.1-.8h-12.9c-1.6 0-2.9 1.3-2.9 2.9v10.5c.8-.4 1.8-.6 2.9-.6h13.2c.6 0 1.3-.2 1.8-.7l3.2-2.7c1.3-1 2.901-1.6 4.601-1.6h17.199c1 0 2.001.2 2.901.6m-45.8 11.5v23c0 1.6 1.3 2.9 2.9 2.9h39.999c1.6 0 2.901-1.3 2.901-2.9v-28q0-1.2-.901-2.1c-.5-.5-1.3-.8-2-.8H82.832c-.7 0-1.4.2-1.9.7l-3.2 2.6c-1.3 1.1-2.9 1.7-4.5 1.7h-13.2c-1.6 0-2.9 1.3-2.9 2.9"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniFolder;
