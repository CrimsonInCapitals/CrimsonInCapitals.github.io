import { useEffect, useRef } from "react"

export const Figma =({width='2em', className='vector_button'})=>{
    
    return(
        <svg width={width} viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* <path d="M0 5C0 2.23858 2.23858 0 5 0H10V10H5C2.23858 10 0 7.76142 0 5V5Z" fill="#F24E1E"/> */}
            {/* <path d="M0 15C0 12.2386 2.23858 10 5 10H10V20H5C2.23858 20 0 17.7614 0 15V15Z" fill="#A259FF"/> */}
            {/* <path d="M0 25C0 22.2386 2.23858 20 5 20H10V25C10 27.7614 7.76142 30 5 30V30C2.23858 30 0 27.7614 0 25V25Z" fill="#0ACF83"/> */}
            {/* <path d="M10 0H15C17.7614 0 20 2.23858 20 5V5C20 7.76142 17.7614 10 15 10H10V0Z" fill="#FF7262"/> */}
            <circle cx="5" cy="15" r="0" fill="#1ABCFE">
                <animate attributeName="cx" begin='0.5s' dur='0.5s' from='5' to='15'repeatCount='1' fill="freeze"/>
                <animate attributeName="r" begin='0.5s' dur='0.5s' from='0' to='5'repeatCount='1' fill="freeze"/>
                <set attributeName='r' to='5' begin='1s'/>
            </circle>

            <circle cx="15" cy="5" r="5" fill="#FF7262">
                <animate attributeName="r" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
                <animate attributeName="cx" begin='0s' dur='0.5s' from='5' to='5'repeatCount='1' />
                <animate attributeName="cx" begin='0.5s' dur='0.5s' from='5' to='15'repeatCount='1' />
            </circle>
                <rect width='5' height='10' x='10' fill='#FF7262'>
                <animate attributeName="width" begin='0s' dur='0.75s' from='0' to='0'repeatCount='1' />
                <animate attributeName="width" begin='0.75s' dur='0.25s' from='0' to='5'repeatCount='1' />
            </rect>
            <rect width='5' height='10' x='5' fill='#F24E1E'>
                <animate attributeName="width" begin='0s' dur='0.5s' from='0' to='0'repeatCount='1' />
                <animate attributeName="width" begin='0.5s' dur='0.25s' from='0' to='5'repeatCount='1' />
            </rect>

            <circle cx="5" cy="5" r="5" fill="#F24E1E">
                <animate attributeName="r" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
            </circle>
            {/* purple */}
            <circle cx="5" cy="15" r="5" fill="#A259FF">
                <animate attributeName="r" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
            </circle>
            <rect width='5' height='10' x='5' y='10' fill='#A259FF'>
                <animate attributeName="height" begin='0s' dur='0.5s' from='0' to='10'repeatCount='1' />
                <animate attributeName="width" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
                <animate attributeName="y" begin='0s' dur='0.5s' from='15' to='10'repeatCount='1' />
            </rect>
            {/* green */}
            <rect width='5' height='5' x='5' y='20' fill='#0ACF83'>
                <animate attributeName="height" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
                <animate attributeName="width" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
                <animate attributeName="x" begin='0s' dur='0.5s' from='10' to='5'repeatCount='1' />
            </rect>
            <circle cx="5" cy="25" r="5" fill="#0ACF83">
                <animate attributeName="cx" begin='0s' dur='0.5s' from='10' to='5'repeatCount='1' />
                <animate attributeName="cy" begin='0s' dur='0.5s' from='20' to='25'repeatCount='1' />
                <animate attributeName="r" begin='0s' dur='0.5s' from='0' to='5'repeatCount='1' />
            </circle>
        </svg>

    )
}