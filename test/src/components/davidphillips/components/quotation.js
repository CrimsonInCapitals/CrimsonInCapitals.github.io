import { useLayerContext } from '../context/brandLayers';
import { layerProps, properties } from '../Objects/brand';
import { getStyle } from '../Objects/ClassManager';
import '../styling/card.css'

import React from 'react';

const QuotationMark = ({layerProp,...props})=> {
    props.Accent=true
    const {layerProps,layer}=useLayerContext()
return(
    <svg width="3em" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <g clip-path="url(#_clip1)">
            <g>
                <path d="M40.918,8.484l4.011,0.397l2.407,3.975l-0.802,3.975c-18.453,10.336 -22.064,21.466 -22.465,29.416c12.035,0.398 21.663,10.336 21.663,22.261c-0,12.323 -10.029,23.056 -22.465,23.056c-12.436,-0 -23.267,-9.143 -23.267,-27.826c0,-27.826 21.662,-48.497 40.918,-55.254Z" fill={layerProps.Accent}/>
                <path d="M93.582,8.484l4.011,0.397l2.407,3.975l-0.802,3.975c-18.453,10.336 -22.064,21.466 -22.465,29.416c12.035,0.398 21.662,10.336 21.662,22.261c0,12.323 -10.028,23.056 -22.464,23.056c-12.436,-0 -23.267,-9.143 -23.267,-27.826c-0,-27.826 21.662,-48.497 40.918,-55.254Z" fill={layerProps.Accent}/>
            </g>
        </g>
    </svg>
    )
}
export default QuotationMark

// ='export const ',B1,' =({layerProps,…props})=> {return(',C1,')}'