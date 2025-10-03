import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgDHandle2 = (props) =>{
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
      d="M109.124 136.697 24.385 108.45a2.077 2.077 0 0 1 1.314-3.94l82.004 27.335.001-106.78a2.077 2.077 0 0 1 4.154 0v106.78l10.8-3.6V25.065a2.077 2.077 0 0 1 4.154 0V126.86l7.235-2.411a2.077 2.077 0 1 1 1.313 3.94l-9.932 3.311-.074.025-14.917 4.972a2.1 2.1 0 0 1-1.313 0m-14.936-33.855a2.078 2.078 0 0 1 1.278 3.953c-8.697 2.813-21.505 2.388-32.081.132-7.213-1.539-13.383-3.955-16.642-6.654-2.337-1.935-3.325-4.115-3.01-6.226.29-1.931 1.779-4.076 5.22-5.996a2.078 2.078 0 0 1 2.024 3.628c-1.874 1.045-2.978 1.932-3.135 2.984-.131.875.581 1.608 1.55 2.41 2.9 2.402 8.441 4.422 14.859 5.792 9.869 2.105 21.822 2.603 29.936-.023"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDHandle2;
