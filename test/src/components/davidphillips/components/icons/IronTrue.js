import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgIronTrue = (props) =>{
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
      d="m99.896 63.59 7.176 36c.118.636-.117 1.271-.47 1.765-.353.424-.941.706-1.647.706h-50c-.589 0-1.177-.283-1.648-.777a2.54 2.54 0 0 1-.353-1.835l2.941-10.376c2.706-9.53 11.413-16.165 21.295-16.165h20.235l-1.647-8.471c-.235-1.341-1.53-2.33-2.824-2.33h-26c-1.058 0-2-.917-2-2.117 0-1.13.942-2.047 2-2.047h26c3.295 0 6.236 2.33 6.942 5.647m-1.647 13.483H77.19c-8 0-15.059 5.364-17.294 13.129l-2.117 7.694h44.706zM84.955 80.39c4 0 7.176 3.177 7.176 7.13 0 3.882-3.176 7.058-7.176 7.058-3.883 0-7.06-3.176-7.06-7.059 0-3.953 3.177-7.129 7.06-7.129m0 4.165c-1.53 0-2.824 1.34-2.824 2.964s1.294 2.895 2.824 2.895c1.647 0 2.94-1.271 2.94-2.895 0-1.623-1.293-2.964-2.94-2.964"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgIronTrue;
