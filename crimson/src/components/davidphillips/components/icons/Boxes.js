import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgBoxes = (props) =>{
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
      d="M76.846 86.816v47.769c0 1.147-.93 2.077-2.077 2.077H24.923a2.077 2.077 0 0 1-2.077-2.077V84.739c0-1.147.93-2.077 2.077-2.077h37.8v-47.77c0-1.124.894-2.04 2.01-2.075l20.84-9.279a2.078 2.078 0 0 1 1.69 3.795l-12.315 5.483h29.927L92.56 27.333a2.078 2.078 0 0 1 1.69-3.795l21.197 9.438q.171.072.325.171a2.062 2.062 0 0 1 .951 1.78v47.735h17.861c1.147 0 2.077.93 2.077 2.077v49.846c0 1.147-.93 2.077-2.077 2.077H84.738a2.077 2.077 0 0 1-2.077-2.077v-47.77zm-34.062 0H27v45.692h45.692V86.816H56.83v37.8c0 1.147-.93 2.077-2.078 2.077h-9.89a2.077 2.077 0 0 1-2.078-2.077zm9.891 0h-5.737v35.723h5.737zm59.894-4.154V36.969H66.876v45.693h45.693m9.969 4.154h-10.8v37.8c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077v-37.8h-10.8v45.692h35.723zm4.154 45.692h5.815V86.816h-5.815zm-19.108-45.692h-5.815v35.723h5.815z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBoxes;
