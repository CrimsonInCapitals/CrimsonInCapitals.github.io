import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgSmartSheets = (props) =>{
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
      d="M32.873 125.046v-57.5c0-6.7 5.41-12.1 12.085-12.1h10.415v-10.4c0-6.7 5.41-12.1 12.085-12.1h57.5c1.15 0 2.083.9 2.083 2.1v90c0 1.1-.933 2-2.083 2h-90c-1.15 0-2.085-.9-2.085-2m22.5-65.5H44.958c-4.372 0-7.917 3.6-7.917 8v10.4h18.332zm22.5-22.5H67.458c-4.372 0-7.917 3.6-7.917 8v10.4h18.332zm45 18.4v-18.4H82.041v18.4zm0 22.5v-18.4H82.041v18.4zm0 22.5v-18.4H82.041v18.4zm-40.832 22.5h40.832v-18.4H82.041zm-22.5 0h18.332v-18.4H59.541zm-22.5-18.4v18.4h18.332v-18.4zm0-22.5v18.4h18.332v-18.4zm40.832-22.5H59.541v18.4h18.332zm0 40.9v-18.4H59.541v18.4zm-15.637-30.6c-.815-.9-.815-2.2 0-3 .812-.8 2.132-.8 2.945 0l1.86 1.9 5.195-5.2c.812-.8 2.132-.8 2.945 0s.812 2.1 0 2.9l-6.668 6.7c-.812.8-2.133.8-2.945 0z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgSmartSheets;
