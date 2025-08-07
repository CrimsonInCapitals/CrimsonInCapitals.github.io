import { useEffect, useRef } from "react"

export const LinkedIn =({width='2em', className='vector_button'})=>{
    const IconRef = useRef(null)
    const RectRef = useRef(null)
    const IStemRef = useRef(null)
    const NStemRef = useRef(null)
    const NBridgeRef = useRef(null)
    const IdotRef = useRef(null)
    // const BowlRef = useRef(null)
    // const StemRef = useRef(null)

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
        var RW = RectRef.current.getAttribute('r') 
        var IL = IStemRef.current.getAttribute('stroke-dashoffset')
        var N1L = NStemRef.current.getAttribute('stroke-dashoffset')
        var N2L = NBridgeRef.current.getAttribute('stroke-dashoffset')
        var CR = IdotRef.current.getAttribute('r')
        console.log(CR)
        RW < 15?    RectRef.current.setAttribute("r",parseInt(RW)+2):
        IL > 0?     IStemRef.current.setAttribute("stroke-dashoffset",parseInt(IL)-2):
        N1L > 0?    NStemRef.current.setAttribute("stroke-dashoffset",parseInt(N1L)-2):
        N2L > 0?    NBridgeRef.current.setAttribute("stroke-dashoffset",parseInt(N2L)-2):
        CR < 1.75?  IdotRef.current.setAttribute("r",parseInt(CR)+1.75):
        clearInterval(Animation)
    }
    const Shrink = ()=>{
        var RW = RectRef.current.getAttribute('r') 
        var IL = IStemRef.current.getAttribute('stroke-dashoffset')
        var N1L = NStemRef.current.getAttribute('stroke-dashoffset')
        var N2L = NBridgeRef.current.getAttribute('stroke-dashoffset')
        var CR = IdotRef.current.getAttribute('r')
        CR > 0?     IdotRef.current.setAttribute("r",(parseInt(CR)-(0.35))):
        N2L < 20?   NBridgeRef.current.setAttribute("stroke-dashoffset",parseInt(N2L)+2):
        N1L < 10?   NStemRef.current.setAttribute("stroke-dashoffset",parseInt(N1L)+2):
        IL < 10?    IStemRef.current.setAttribute("stroke-dashoffset",parseInt(IL)+2):
        RW > 0?     RectRef.current.setAttribute("r",parseInt(RW)-2):
        clearInterval(Animation)
    }
    return(
    
        <svg width={width}   viewBox="0 0 20 20" ref={IconRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=>{window.open('https://www.linkedin.com/in/harrison-cole-crimson-in-capitals/')}} className={className}>
            <path d="M18.5 0H1.49999C0.677275 0 0 0.677275 0 1.49999V18.5C0 19.3227 0.677275 20 1.49999 20H18.5C19.3227 20 20 19.3227 20 18.5V1.49999C20 0.677275 19.3227 0 18.5 0ZM5.99995 17H2.99998V8.0001H5.99995V17ZM4.49996 6.25003C3.55917 6.22315 2.80006 5.44196 2.80006 4.50068C2.80006 3.54069 3.59013 2.75086 4.55012 2.75086C5.50988 2.75086 6.29971 3.54021 6.29995 4.49996C6.28363 5.47268 5.47292 6.26107 4.49996 6.25003ZM17 17H14V12.2601C14 10.84 13.4001 10.33 12.6201 10.33C11.7109 10.3905 10.9955 11.1551 10.9955 12.0661C10.9955 12.1074 10.997 12.1487 11.0001 12.19C10.995 12.2365 10.995 12.2833 11.0001 12.3299V17H8.0001V8.0001H10.9V9.29993C11.4942 8.39609 12.5188 7.86474 13.6 7.90002C15.1499 7.90002 16.9599 8.75993 16.9599 11.56L17 17Z" fill="var(--Copy)"/>
            <mask id="rect_mask">
                <rect width="20" height="20" rx="1.5" fill="#ffffff"/>
            </mask>
            <circle ref={RectRef} cx='10' cy='10' r='0' fill="#0A66C2" mask="url(#rect_mask)"/>
            <circle ref={IdotRef} cx='4.58' cy='4.5' r='0' fill="#ffffff" />
            {/* <path d="M4.5002 6.25015C3.55941 6.22327 2.80029 5.44208 2.80029 4.5008C2.80029 3.54081 3.59037 2.75098 4.55036 2.75098C5.51011 2.75098 6.29994 3.54033 6.30018 4.50008C6.28387 5.47279 5.47315 6.26119 4.5002 6.25015Z" fill="white"/> */}
            <mask id="N_bridge_mask" maskUnits="userSpaceOnUse" x="9" y="7" width="9" height="10">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0005 17.0001H17.0004L16.9603 11.5601C16.9603 8.76 15.1503 7.90009 13.6004 7.90009C12.5192 7.86481 11.4946 8.39617 10.9004 9.3L9.50049 17.0001H11.0005V12.33C10.9954 12.2834 10.9954 12.2366 11.0005 12.1901C10.9974 12.1488 10.9959 12.1075 10.9959 12.0662C10.9959 11.1552 11.7113 10.3906 12.6205 10.3301C13.4005 10.3301 14.0005 10.8401 14.0005 12.2601V17.0001Z" fill="#ffffff"/>
            </mask>
            <g 
                mask="url(#N_bridge_mask)"
            >
                <path 
                    ref={NBridgeRef} 
                    d="M9.49988 17C9.49996 14.5 9.00007 9 13.5 9C15.5 9 15.4999 11 15.4999 17.5" 
                    stroke="white" 
                    stroke-width="4"
                    strokeDasharray='20'
                    strokeDashoffset='20'
                    fill="none"
                />
            </g>
            <mask id="N_stem_mask" maskUnits="userSpaceOnUse" x="8" y="8" width="3" height="9">
                <path d="M10.9042 12.1899C10.901 12.1486 10.9042 11 10.9042 9.29983V8H8.00049V16.9999H10.9079V12.3298C10.9029 12.2832 10.8991 12.2364 10.9042 12.1899Z" fill="#ffffff"/>
            </mask>
            <g 
                mask="url(#N_stem_mask)"
            >
                <path 
                    ref={NStemRef} 
                    d="M9.5 7.5V17.5" 
                    stroke="white" 
                    stroke-width="4"
                    strokeDasharray='10'
                    strokeDashoffset='10'
                    fill="none"
            />
            </g>
            <mask id="I_stem_mask" maskUnits="userSpaceOnUse" x="3" y="8" width="3" height="9">
                <path d="M5.99998 16.9999H3V8H5.99998V16.9999Z" fill="#ffffff"/>
            </mask>
            <g 
                mask="url(#I_stem_mask)"
            >
                <path 
                    ref={IStemRef} 
                    d="M4.5 7.5V17.5" 
                    stroke="white" 
                    stroke-width="4"
                    strokeDasharray='10'
                    strokeDashoffset='10'
                    fill="none"
            />
            </g>
    </svg>

    )
}