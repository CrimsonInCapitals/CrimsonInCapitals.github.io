import { useEffect, useRef } from "react"

export const Facebook =({width='2em', className='vector_button'})=>{
    const IconRef = useRef(null)
    const CircleRef = useRef(null)
    const StemRef = useRef(null)
    const ArmRef = useRef(null)

    var Animation = null
    const handleEnter =()=>{
        clearInterval(Animation)
        Animation = setInterval(Grow,20)
    }
    const handleLeave =()=>{
        clearInterval(Animation)
        Animation = setInterval(Shrink,20)
    }
    const Grow = ()=>{
        var CR = CircleRef.current.getAttribute('r') 
        var SL = StemRef.current.getAttribute('stroke-dashoffset')
        var AL = ArmRef.current.getAttribute('stroke-dashoffset')
        if(CR <10 ){
            var newCR = parseInt(CR)+1
            CircleRef.current.setAttribute("r",newCR)
        }
        else if(SL >0){
            var newSL = parseInt(SL)-2
            StemRef.current.setAttribute("stroke-dashoffset",newSL)
        }
        else if(AL >0){
            var newAL = parseInt(AL)-2
            ArmRef.current.setAttribute("stroke-dashoffset",newAL)
        }
        else clearInterval(Animation)
    }
    const Shrink = ()=>{
        var CR = CircleRef.current.getAttribute('r') 
        var SL = StemRef.current.getAttribute('stroke-dashoffset')
        var AL = ArmRef.current.getAttribute('stroke-dashoffset')
        if(AL <19){
            var newAL = parseInt(AL)+2
            ArmRef.current.setAttribute("stroke-dashoffset",newAL)
        }
        else if(SL <20){
            var newSL = parseInt(SL)+2
            StemRef.current.setAttribute("stroke-dashoffset",newSL)
        }
        else if(CR >0 ){
            var newCR = parseInt(CR)-2
            CircleRef.current.setAttribute("r",newCR)
        }
        else clearInterval(Animation)

    }
    return(
    
        <svg width={width}   viewBox="0 0 20 20" ref={IconRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=>{window.open('https://www.facebook.com/Crimsonincapitals')}} className={className}>
            <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9913 3.65686 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79687C8.4375 5.29062 9.93043 3.90625 12.2146 3.90625C13.3087 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1921C11.9499 6.5625 11.5625 7.33334 11.5625 8.12416V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1283 20 14.9913 20 10Z" fill="var(--Copy)"/>
            <circle ref={CircleRef} cx="10" cy="10" r="0" fill="#1384E9"/>
            <mask id="Facebook_stem" maskUnits="userSpaceOnUse" x="8" y="3" width="7" height="17">
                <path d="M11.5625 8.12416V10V19.8785C11.0534 19.9584 10.5316 20 10 20C9.46844 20 8.94662 19.9584 8.4375 19.8785V10V7.79688C8.4375 5.29063 9.93043 3.90625 12.2146 3.90625C13.3087 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1921C11.9499 6.5625 11.5625 7.33334 11.5625 8.12416Z" fill="#ffffff"/>
            </mask>
            <g mask="url(#Facebook_stem)">
                <path 
                    ref={StemRef} 
                    d="M15 5.50037C13.5 5.16703 10 4.00014 10 7.00029C10 9.00029 10 16.3332 10 20.5M20 11.5H5.5" 
                    stroke="white" 
                    stroke-width="4"
                    strokeDasharray='20'
                    strokeDashoffset='20'
                    fill="none"
                />
            </g>
            <mask id="Facebook_arm" maskUnits="userSpaceOnUse" x="5" y="10" width="10" height="3">
                <path d="M14.3359 10L13.8926 12.8906H8.4375H5.89844V10H8.5H14.3359Z" fill="#ffffff"/>
            </mask>
            <g mask="url(#Facebook_arm)">
                <path 
                    ref={ArmRef} 
                    d="M15 5.50037C13.5 5.16703 10 4.00014 10 7.00029C10 9.00029 10 16.3332 10 20.5L11.5 26L19 11.5H16H5.5" 
                    stroke="white" 
                    stroke-width="4"
                    strokeDasharray='19'
                    strokeDashoffset='19'
                    fill="none"
                />
            </g>
        </svg>

    )
}