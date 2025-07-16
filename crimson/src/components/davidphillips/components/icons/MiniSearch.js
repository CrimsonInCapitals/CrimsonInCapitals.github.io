import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniSearch = (props) =>{
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
      d="M89.05 92.015c-3.867 3.16-8.667 5.066-14.134 5.066-12.133 0-22-9.894-22-22.093 0-12.187 9.867-22.08 22-22.08 12.267 0 22.134 9.893 22.134 22.08 0 5.346-1.866 10.254-5.066 14.08l14.532 14.453c.8.814.8 2.134 0 2.947-.933.813-2.133.813-3.066 0zm-1.467-4.36c3.333-3.24 5.333-7.72 5.333-12.667 0-9.88-8-17.907-18-17.907-9.867 0-17.866 8.027-17.866 17.907 0 9.893 8 17.92 17.866 17.92 5.067 0 9.467-2 12.667-5.254"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniSearch;
