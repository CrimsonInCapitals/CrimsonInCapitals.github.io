import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgBookmark = (props) =>{
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
      d="M42.916 114.962v-80c0-6.6 5.415-12.1 12.084-12.1h60c1.15 0 2.083 1 2.083 2.1v100c0 1.2-.933 2.099-2.083 2.099h-7.917v7.901c0 .7-.374 1.399-.988 1.799s-1.381.4-2.027.1l-9.068-4.5-9.07 4.5c-.645.3-1.411.3-2.026-.1a2.19 2.19 0 0 1-.988-1.799v-7.901H55c-6.669 0-12.084-5.399-12.084-12.099m10-87.6c-3.36.9-5.833 4-5.833 7.6v70.899c1.623-1.4 3.626-2.4 5.833-2.8zm60 75.499v-75.8H57.083v75.8zm-5.833 20h5.833v-15.8H55c-4.37 0-7.917 3.601-7.917 7.901 0 4.4 3.547 7.899 7.917 7.899h27.916v-7.899c0-1.1.933-2.101 2.084-2.101h20c1.15 0 2.083 1.001 2.083 2.101zm-20 2.101v6.699l6.985-3.5a2.04 2.04 0 0 1 1.863 0l6.985 3.5v-14.6H87.083z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBookmark;
