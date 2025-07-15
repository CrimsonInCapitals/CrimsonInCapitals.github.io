import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgBarHandle = (props) =>{
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
      d="M109.077 136.697 24.339 108.45a2.077 2.077 0 0 1 1.313-3.94l82.005 27.335V25.065a2.078 2.078 0 0 1 4.154 0v106.78l10.8-3.6V25.065a2.078 2.078 0 0 1 4.154 0V126.86l7.235-2.411a2.076 2.076 0 1 1 1.314 3.94l-9.932 3.311-.075.025-14.916 4.972a2.1 2.1 0 0 1-1.314 0m-83.425-47.14 9.313 3.103 14.297-4.765a2.077 2.077 0 0 1 1.313 3.94l-9.043 3.015 38.295 12.764 14.296-4.765a2.077 2.077 0 1 1 1.314 3.94l-9.043 3.015 9.043 3.014a2.076 2.076 0 1 1-1.314 3.94L24.338 93.497a2.076 2.076 0 1 1 1.314-3.94"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBarHandle;
