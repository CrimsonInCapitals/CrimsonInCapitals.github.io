import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniWeb = (props) =>{
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
      d="M52.875 80.046c0-15 12.2-27.1 27.1-27.1 15 0 27.1 12.1 27.1 27.1 0 14.9-12.1 27-27.1 27-14.9 0-27.1-12.1-27.1-27m18.6-21.3c-7.8 3.1-13.5 10.4-14.3 19.2h9.3c.3-7.9 2.2-14.8 5-19.2m31.3 19.2c-.7-8.8-6.4-16.1-14.3-19.2 2.8 4.4 4.7 11.3 5 19.2zm-14.3 23.3c7.9-3.1 13.6-10.4 14.3-19.2h-9.3c-.3 7.9-2.2 14.8-5 19.2m-31.3-19.2c.8 8.8 6.5 16.1 14.3 19.2-2.8-4.4-4.7-11.3-5-19.2zm32.1-4.1c-.2-7-1.8-13.1-4.3-17-1.4-2.3-3.1-3.9-5-3.9s-3.5 1.6-5 3.9c-2.4 3.9-4 10-4.3 17zm-18.6 4.1c.3 7 1.9 13.1 4.3 17 1.5 2.3 3.1 3.9 5 3.9s3.6-1.6 5-3.9c2.5-3.9 4.1-10 4.3-17z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniWeb;
