import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMessageBubbles = (props) =>{
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
      d="M52.876 86.84h-17l-9.361 9.361a2.078 2.078 0 0 1-3.546-1.468V44.887a12.046 12.046 0 0 1 12.046-12.046H94.83a12.045 12.045 0 0 1 12.046 12.046v17.862h17.862a12.046 12.046 0 0 1 12.046 12.046v49.846a2.078 2.078 0 0 1-3.545 1.468l-9.361-9.36H64.923a12.047 12.047 0 0 1-12.047-12.047zm49.847-24.092V44.888a7.893 7.893 0 0 0-7.893-7.892H35.015a7.894 7.894 0 0 0-7.892 7.892v44.832l6.424-6.424c.39-.39.917-.608 1.468-.608h17.861v-7.892a12.047 12.047 0 0 1 12.047-12.047zM57.03 74.796v29.907a7.893 7.893 0 0 0 7.893 7.893h59.815c.551 0 1.079.218 1.469.608l6.423 6.424V74.795a7.89 7.89 0 0 0-7.892-7.893H64.923a7.894 7.894 0 0 0-7.893 7.893"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMessageBubbles;
