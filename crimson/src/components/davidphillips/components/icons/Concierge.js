import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgConcierge = (props) =>{
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
      d="M134.584 116.723H24.923a2.077 2.077 0 0 1 0-4.154h7.892V99.692c0-3.9 3.162-7.061 7.062-7.061h37.8v-2.636H44.86a7.06 7.06 0 0 1-7.061-7.062v-1.185c0-20.768 15.121-38.03 34.945-41.37a7.065 7.065 0 0 1 7.009-7.93 7.065 7.065 0 0 1 7.008 7.93c19.823 3.34 34.945 20.603 34.945 41.37v1.185a7.063 7.063 0 0 1-7.061 7.062H81.83v2.636h37.8c3.9 0 7.062 3.162 7.062 7.061v12.877h7.892a2.078 2.078 0 0 1 0 4.154M119.63 96.785H39.877a2.91 2.91 0 0 0-2.908 2.907v12.877h85.569V99.692a2.91 2.91 0 0 0-2.908-2.907M76.87 39.892a42 42 0 0 1 5.766 0q.025-.188.025-.382a2.91 2.91 0 0 0-2.908-2.908 2.91 2.91 0 0 0-2.883 3.29M44.861 85.84h69.785a2.91 2.91 0 0 0 2.907-2.908v-1.185c0-20.862-16.937-37.8-37.8-37.8s-37.8 16.938-37.8 37.8v1.185a2.91 2.91 0 0 0 2.908 2.908"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgConcierge;
