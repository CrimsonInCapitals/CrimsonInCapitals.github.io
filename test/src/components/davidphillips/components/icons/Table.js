import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgTable = (props) =>{
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
      d="m54.642 70.312-11.7 58.36c-.2.98-1 1.68-2 1.68h-6c-.6 0-1.2-.27-1.6-.74s-.6-1.08-.5-1.69l9.6-57.61h-7.5c-1.1 0-2.1-.93-2.1-2.09v-6.51c0-.22.1-.45.1-.66l10-30c.3-.85 1.1-1.42 2-1.42h69.999c.9 0 1.7.57 2 1.42l10 30c0 .21.1.44.1.66v6.51c0 1.16-.9 2.09-2.1 2.09h-9.5l9.6 57.61c.1.61-.1 1.22-.5 1.69s-1 .74-1.6.74h-6c-1 0-1.8-.7-2-1.68l-11.699-58.36zm-7.9 0-9.3 55.87h1.8l11.2-55.87zm-9.7-6.52v2.35h85.8v-2.35zm70.399 6.52c2.3 11.14 11.201 55.87 11.201 55.87h1.799l-9.299-55.87zm-69.6-10.68h84.2l-8.6-25.84h-67z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgTable;
