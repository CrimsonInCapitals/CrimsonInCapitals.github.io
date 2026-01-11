import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMiniArrow = (props) =>{
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
      d="M97.167 79.525s0 .165.124.33h4.578c2.227 0 4.207 1.485 4.949 3.63a5.13 5.13 0 0 1-1.733 5.774L85.166 105.26a8.03 8.03 0 0 1-10.27 0l-19.92-16.002c-1.856-1.32-2.475-3.63-1.732-5.774.742-2.145 2.722-3.63 4.949-3.63h4.578c.124-.165.124-.33.124-.33V60.06c0-3.96 3.217-7.093 7.176-7.093h19.92c3.959 0 7.176 3.134 7.176 7.093zm-4.207 0V60.06c0-1.65-1.361-2.969-2.97-2.969H70.072c-1.608 0-2.97 1.32-2.97 2.97v19.465c0 1.155-.494 2.31-1.36 3.135-.866.99-1.98 1.486-3.218 1.486h-4.33c-.495 0-.866.163-.99.658-.247.495 0 .99.371 1.32l19.92 15.838c1.486 1.319 3.588 1.319 5.073 0l19.921-15.838c.371-.33.494-.825.371-1.32-.124-.495-.619-.659-.99-.659h-4.33c-1.238 0-2.352-.495-3.218-1.485a4.38 4.38 0 0 1-1.36-3.135"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniArrow;
