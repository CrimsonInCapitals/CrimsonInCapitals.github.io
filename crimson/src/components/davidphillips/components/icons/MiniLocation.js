import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniLocation = (props) =>{
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
      d="M96.553 60.334c9.167 9.167 9.168 24.004.036 33.135l-11.544 11.545c-2.768 2.768-7.303 2.72-10.078-.054l-11.52-11.52c-9.107-9.108-9.107-23.944.03-33.082 9.132-9.131 23.969-9.131 33.076-.024m-2.95 2.949c-7.478-7.479-19.661-7.479-27.17.03s-7.516 19.699-.037 27.177l11.52 11.52c1.146 1.146 3.034 1.189 4.174.049l11.544-11.544c7.509-7.51 7.509-19.693-.03-27.232m-13.576 4.048a9.59 9.59 0 0 1 9.59 9.589c-.049 5.235-4.343 9.53-9.584 9.584a9.606 9.606 0 0 1-9.59-9.59c-.005-5.301 4.289-9.596 9.584-9.583m-.03 4.13a5.385 5.385 0 0 0-5.416 5.417 5.436 5.436 0 0 0 5.428 5.428 5.385 5.385 0 0 0 5.416-5.416 5.436 5.436 0 0 0-5.428-5.428"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniLocation;
