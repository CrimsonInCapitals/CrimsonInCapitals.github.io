import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniArrowDown = (props) =>{
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
      d="M108.526 63.9988C109.336 63.1763 110.659 63.1763 111.47 63.9988C112.293 64.8094 112.293 66.121 111.47 66.9435L85.3276 93.0863C82.5619 95.8519 78.0675 95.8519 75.3019 93.0863L48.5276 66.3114C47.717 65.5008 47.717 64.1779 48.5276 63.3672C49.3382 62.5566 50.6614 62.5566 51.472 63.3672L78.2463 90.1415C79.3907 91.2859 81.2384 91.2859 82.3709 90.1415L108.526 63.9988Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniArrowDown;
