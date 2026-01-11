import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniInfo = (props) =>{
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
      d="M79.94 52.9c15 0 27.168 12.15 27.168 27.083 0 14.95-12.168 27.083-27.168 27.083-14.833 0-26.999-12.133-26.999-27.083 0-14.934 12.166-27.084 26.999-27.084m0 4.166c-12.5 0-22.832 10.283-22.832 22.917 0 12.65 10.332 22.916 22.832 22.916 12.667 0 23.001-10.266 23.001-22.916 0-12.634-10.334-22.917-23.001-22.917m2.168 32.917h2.832v4.166h-10c-1 0-1.999-.933-1.999-2.083s1-2.083 2-2.083h3V79.149h-3c-1 0-2-.933-2-2.083s1-2.083 2-2.083h4.999c1.167 0 2.168.933 2.168 2.083zm-4.167-22.066c0-1.133 1-2.083 1.999-2.083 1.167 0 2.168.95 2.168 2.083v3.15c0 1.15-1.001 2.083-2.168 2.083-1 0-1.999-.933-1.999-2.083z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniInfo;
