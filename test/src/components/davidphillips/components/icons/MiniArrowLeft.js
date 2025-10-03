import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniArrowLeft = (props) =>{
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
      d="M96.0055 108.53C96.8281 109.341 96.8281 110.664 96.0055 111.475C95.1949 112.297 93.8834 112.297 93.0608 111.475L66.9181 85.3324C64.1524 82.5668 64.1524 78.0724 66.9181 75.3068L93.693 48.5325C94.5036 47.7219 95.8265 47.7219 96.6371 48.5325C97.4477 49.3431 97.4477 50.6663 96.6371 51.4769L69.8628 78.2512C68.7184 79.3956 68.7184 81.2433 69.8628 82.3758L96.0055 108.53Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniArrowLeft;
