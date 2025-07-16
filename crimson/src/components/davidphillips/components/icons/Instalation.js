import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgInstalation = (props) =>{
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
      d="M81.462 91.635 40.401 50.573l-5.081-1.27a2.08 2.08 0 0 1-1.225-.863l-8.46-12.689a2.076 2.076 0 0 1 .26-2.62l7.134-7.134c.7-.7 1.797-.809 2.62-.26l12.69 8.46c.43.286.737.723.862 1.224l1.27 5.082 41.036 41.034a7.065 7.065 0 0 1 8.296 1.248l29.953 29.953a7.06 7.06 0 0 1 1.248 8.296l2.864 2.865a2.077 2.077 0 0 1 0 2.937l-7.134 7.134a2.077 2.077 0 0 1-2.937 0l-2.891-2.891a7.06 7.06 0 0 1-8.186-1.306L82.768 99.821a7.06 7.06 0 0 1-1.306-8.186m6.886-7.381-41.22-41.22a2.1 2.1 0 0 1-.547-.966l-1.215-4.86-10.604-7.07-4.725 4.726 7.069 10.604 4.86 1.215c.366.091.7.28.965.546L84.152 88.45zm38.471 35.533a2.91 2.91 0 0 0 0-4.112L96.867 85.722a2.91 2.91 0 0 0-4.113 0l-7.05 7.05a2.91 2.91 0 0 0 0 4.111l29.953 29.953a2.91 2.91 0 0 0 4.112 0zm-2.728 8.602 1.174 1.175 4.197-4.197-1.174-1.175z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgInstalation;
