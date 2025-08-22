import { useEffect, useRef } from "react"

export const Displate =({width='2em', className='vector_button'})=>{
    const IconRef = useRef(null)
    const BowlRef = useRef(null)
    const StemRef = useRef(null)

    var Animation = null
    const handleEnter =()=>{
        console.log('enter')
        clearInterval(Animation)
        Animation = setInterval(Grow,20)
    }
    const handleLeave =()=>{
        clearInterval(Animation)
        Animation = setInterval(Shrink,20)
    }
    const Grow = ()=>{
        console.log(BowlRef.current.getAttribute('stroke-dashoffset'))
        var BL = BowlRef.current.getAttribute('stroke-dashoffset') 
        var SL = StemRef.current.getAttribute('stroke-dashoffset')
        console.log(BowlRef.current.getAttribute('stroke-dashoffset')+' '+StemRef.current.getAttribute('stroke-dashoffset'))
        if(BL > 0){
            var newBL = parseInt(BL)-2
            BowlRef.current.setAttribute("stroke-dashoffset",newBL)
        }
        else if(SL >0){
            var newSL = parseInt(SL)-2
            StemRef.current.setAttribute("stroke-dashoffset",newSL)
        }
        else clearInterval(Animation)
    }
    const Shrink = ()=>{
        var BL = BowlRef.current.getAttribute('stroke-dashoffset') 
        var SL = StemRef.current.getAttribute('stroke-dashoffset')
        if(SL <12){
            var newSL = parseInt(SL)+1
            StemRef.current.setAttribute("stroke-dashoffset",newSL)
        }
        else if(BL < 64){
            var newBL = parseInt(BL)+1
            BowlRef.current.setAttribute("stroke-dashoffset",newBL)
        }
        else clearInterval(Animation)

    }
    return(
    
        <svg width={width}   viewBox="0 0 20 20" ref={IconRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=>{window.open('https://displate.com/crimsonincapitals1?art=5f0d09c08e6b6')}} className={className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.18927 14.4774C4.70435 13.6341 4.92297 12.8447 5.7539 9.25644C6.61883 5.52336 5.42345 4.65332 6.45117 4.65332C7.35255 4.65332 7.91381 5.04618 8.19564 5.3443C8.4799 5.64241 8.53093 7.11134 8.00127 10.3617C7.46919 13.6122 6.75003 15.4956 6.45848 15.5318C6.16693 15.5683 5.49148 15.3574 5.0906 15.1465C4.69214 14.9356 4.09695 14.629 4.18927 14.4774Z" fill="var(--Copy)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3919 9.16088C10.3919 9.16088 7.14361 10.5219 5.2461 10.3084C3.34858 10.0948 2.06332 9.75176 2.06332 8.0474C2.06332 6.34303 3.71051 2.19594 10.0275 2.19594C16.3469 2.19594 17.2993 7.28596 17.2993 8.76316C17.2993 10.2404 16.9907 14.1505 10.9823 16.2847C3.9049 18.7993 2.74839 16.0655 2.49572 15.1826C2.49572 15.1826 1.63082 15.3972 1.75716 16.2847C1.91508 17.3982 2.33538 19.9434 6.79126 19.9434C11.2447 19.9434 20.0229 15.9671 20.0229 9.2549C20.0229 2.54265 14.0558 0.065918 10.2607 0.065918C6.46572 0.065918 0.0224609 2.56549 0.0224609 7.62148C0.0224609 10.4279 2.14828 11.1893 4.33006 11.1893C6.50941 11.1893 11.0431 9.57585 11.0431 9.57585L10.3919 9.16088Z" fill="var(--Copy)"/>

            <mask id="D_stem" maskUnits="userSpaceOnUse" x="4" y="4" width="5" height="12">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.18927 14.4774C4.70435 13.6341 4.92297 12.8447 5.7539 9.25644C6.61883 5.52336 5.42345 4.65332 6.45117 4.65332C7.35255 4.65332 7.91381 5.04618 8.19564 5.3443C8.4799 5.64241 8.53093 7.11134 8.00127 10.3617C7.46919 13.6122 6.75003 15.4956 6.45848 15.5318C6.16693 15.5683 5.49148 15.3574 5.0906 15.1465C4.69214 14.9356 4.09695 14.629 4.18927 14.4774Z" fill="#ffffff"/>
            </mask>
            <mask id="D_bowl" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3919 9.16088C10.3919 9.16088 7.14361 10.5219 5.2461 10.3084C3.34858 10.0948 2.06332 9.75176 2.06332 8.0474C2.06332 6.34303 3.71051 2.19594 10.0275 2.19594C16.3469 2.19594 17.2993 7.28596 17.2993 8.76316C17.2993 10.2404 16.9907 14.1505 10.9823 16.2847C3.9049 18.7993 2.74839 16.0655 2.49572 15.1826C2.49572 15.1826 1.63082 15.3972 1.75716 16.2847C1.91508 17.3982 2.33538 19.9434 6.79126 19.9434C11.2447 19.9434 20.0229 15.9671 20.0229 9.2549C20.0229 2.54265 14.0558 0.065918 10.2607 0.065918C6.46572 0.065918 0.0224609 2.56549 0.0224609 7.62148C0.0224609 10.4279 2.14828 11.1893 4.33006 11.1893C6.50941 11.1893 11.0431 9.57585 11.0431 9.57585L10.3919 9.16088Z" fill="#ffffff"/>
            </mask>
            <g mask="url(#D_stem)">
                <path 
                    ref={StemRef}
                    d="M7.09417 4.07617C6.75082 10.5998 5.59202 14.8058 4.94824 15.6642" 
                    stroke="#1384E9" 
                    strokeWidth="6"
                    strokeDasharray='12'
                    strokeDashoffset='12'
                    fill="none"
                />
            </g>

            <g mask="url(#D_bowl)">
                <path 
                    ref={BowlRef}
                    d="M10.9566 9.22641C3.66075 12.0157 0.656252 11.1574 1.08544 7.2947C1.51462 3.43204 5.59175 0.427779 10.9566 1.28615C16.3214 2.14452 18.2527 4.29084 18.4673 9.22641C18.6819 14.162 15.3168 16.2533 10.9566 18.0246C4.08964 20.8143 2.3732 17.166 1.72942 14.8055" 
                    stroke="#1384E9" 
                    strokeWidth="6"
                    strokeDasharray='64'
                    strokeDashoffset='64'
                    fill="none"
                />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1158 5.97998L13.0309 7.77212L15.018 8.08773L13.5956 9.5114L13.9097 11.4987L12.1158 10.5863L10.3217 11.4987L10.6359 9.5114L9.21338 8.08773L11.2006 7.77212L12.1158 5.97998Z" fill="var(--Copy)"/>
        </svg>

    )
}