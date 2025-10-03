import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgBedTwo = (props) =>{
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
      d="M32.815 113.756h-7.892a2.08 2.08 0 0 1-2.077-2.077V86.755c0-3.9 3.162-7.06 7.061-7.06h2.908V46.877c0-3.9 3.162-7.06 7.062-7.06h79.753c3.9 0 7.062 3.16 7.062 7.06v32.816h2.908a7.06 7.06 0 0 1 7.061 7.061v24.924c0 1.146-.93 2.077-2.077 2.077h-7.892v3.904c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077v-3.904H46.938v3.904c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077zM129.6 83.848H29.907A2.907 2.907 0 0 0 27 86.756v22.846h97.615l7.892-.001V86.755a2.907 2.907 0 0 0-2.907-2.907m-7.062-4.154V46.878a2.91 2.91 0 0 0-2.908-2.907H39.877a2.91 2.91 0 0 0-2.908 2.908v32.815h5.815V61.833c0-1.147.93-2.077 2.077-2.077h69.785c1.147 0 2.077.93 2.077 2.077v17.861zm-5.815 34.062v1.828l5.815-.001v-1.827zm-79.754 0v1.828l5.815-.001v-1.827zm9.969-34.062h30.739V63.91H46.938zm34.892 0h30.739V63.91H81.83z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBedTwo;
