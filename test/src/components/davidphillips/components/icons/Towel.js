import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgTowel = (props) =>{
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
      d="M33.198 32.103h-8.246a2.078 2.078 0 0 1 0-4.154H35.13a12.03 12.03 0 0 1 9.76-4.984h69.785c4.015 0 7.572 1.964 9.76 4.985h10.178a2.078 2.078 0 0 1 0 4.153h-27.278a7.9 7.9 0 0 0-.552 2.908v2.908h27.83a2.078 2.078 0 0 1 0 4.154h-7.892v77.676a7.06 7.06 0 0 1-7.061 7.062h-12.877v2.908c0 3.9-3.162 7.061-7.062 7.061H39.906a7.06 7.06 0 0 1-7.062-7.061V42.073h-7.892a2.078 2.078 0 0 1 0-4.154h7.892V35.01c0-1.003.123-1.977.353-2.908m81.477-4.984c-1.268 0-2.466.299-3.529.83h7.058a7.9 7.9 0 0 0-3.529-.83m-12.046 90.586V35.011c0-3.019 1.111-5.779 2.945-7.892H44.89a7.89 7.89 0 0 0-7.892 7.892v82.694zm19.938-75.632h-15.784v65.63h15.784zm-15.784 80.584h12.877a2.907 2.907 0 0 0 2.907-2.908v-7.892h-15.784zm-69.785-.799v7.861a2.907 2.907 0 0 0 2.908 2.907H99.72a2.907 2.907 0 0 0 2.908-2.907v-7.861z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgTowel;
