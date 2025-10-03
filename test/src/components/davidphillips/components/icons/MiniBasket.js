import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniBasket = (props) =>{
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
      d="m91.802 67.919 7.405-.01c2.063.003 4.05.9 5.368 2.443 1.319 1.552 1.951 3.608 1.643 5.644L102.687 101a7.06 7.06 0 0 1-7.021 6.081l-31.312.004c-3.563-.004-6.512-2.596-7.042-6.086l-3.594-25.002c-.254-2.032.332-4.093 1.733-5.635 1.305-1.56 3.257-2.445 5.319-2.449l7.406-.002 6.988-13.846c.528-1.026 1.695-1.447 2.79-.93 1.003.517 1.44 1.77.912 2.797l-6.002 11.983h14.25l-5.999-11.991a2.07 2.07 0 0 1 .964-2.788c1.061-.512 2.237-.105 2.74.927zm7.458 4.164-38.532-.006c-.844-.002-1.642.364-2.123 1.016a2.9 2.9 0 0 0-.742 2.313l3.594 25.003c.18 1.431 1.438 2.504 2.844 2.502l31.312-.005c1.5.008 2.774-1.058 2.969-2.498l3.531-25.001c.082-.844-.116-1.679-.665-2.32a2.87 2.87 0 0 0-2.188-1.004"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniBasket;
