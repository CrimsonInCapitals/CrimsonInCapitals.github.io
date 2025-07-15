import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgJHandle2 = (props) =>{
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
      d="M109.036 111.194 24.298 82.948a2.078 2.078 0 0 1 1.313-3.94l82.005 27.335V25.065a2.077 2.077 0 0 1 4.154 0v75.683q.299-.225.603-.421c2.002-1.278 4.209-1.555 5.935-.836 1.832.764 3.431 2.684 3.431 6.41v22.621l.831-.277V25.065a2.077 2.077 0 0 1 4.154 0V126.86l7.235-2.411a2.076 2.076 0 1 1 1.314 3.94l-9.97 3.324-4.984 1.661a2.1 2.1 0 0 1-1.314 0l-94.707-31.57a2.077 2.077 0 1 1 1.313-3.94l91.974 30.658v-22.621c0-1.071-.152-1.851-.554-2.331-.347-.416-.901-.374-1.443-.208-.997.308-1.991 1.111-2.719 2.206a6.6 6.6 0 0 0-1.099 3.656q-.001.34-.107.657a2.08 2.08 0 0 1-2.627 1.313"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgJHandle2;
