import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniCube = (props) =>{
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
      d="M79.9 106.483c-.945.038-2.022-.211-3.022-.711l-20-10c-2.488-1.224-4-3.67-4.097-6.379l.184-18.767a7.23 7.23 0 0 1 .914-3.854c.208.034.202.021.19-.005a7.8 7.8 0 0 1 2.683-2.518l20.002-9.999c2.05-.975 4.348-.995 6.348.005l20 10c1.238.599 2.22 1.48 2.896 2.527l.018.04c.706 1.113 1.124 2.431.97 3.764l.035 18.827c.096 2.708-1.471 5.145-3.793 6.364l-20 10c-1.132.464-2.165.728-3.329.706M57.13 70.898l-.108 18.515c-.078 1.081.586 2.104 1.586 2.604l19.242 9.611.041-20.329zm43.256-3.362L81.38 58.023c-.982-.461-1.939-.45-2.709-.034l-19.07 9.515 20.263 10.15zm-18.295 34.112 19.218-9.61c.918-.511 1.614-1.504 1.472-2.645l.108-18.515L82.132 81.32z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniCube;
