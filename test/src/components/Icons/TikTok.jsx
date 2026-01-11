import { useEffect, useRef, useState } from "react"

export const TikTok =({width='2em', className='vector_button'})=>{
    const IconRef = useRef(null)
    const LeftRef = useRef(null)
    const RightRef = useRef(null)
    const CenterRef = useRef(null)
    const x=0.5
    const y =0.35
    const o = 0
    const stops = 50
    const [position,setPosition]=useState(o)
    const [LeftStyle,setLeftStyle]=useState({translate:x+'px '+y+'px'})
    const [RightStyle,setRightStyle]=useState({translate:'-'+x+'px -'+y+'px'})

    var Animation = null
    const handleEnter =()=>{
        clearInterval(Animation)
        Animation = setInterval(Grow,10)
    }
    const handleLeave =()=>{
        clearInterval(Animation)
        Animation = setInterval(Shrink,10)
    }
    const Grow = ()=>{
        setPosition(prevPosition => {
            let newPosition = prevPosition+(1/stops) 
            if(newPosition>=1){
                clearInterval(Animation)
                newPosition=1
            }
            let change = 1-newPosition
            let newX = x*change
            let newY = y*change
            setLeftStyle({translate:newX+'px '+newY+'px'})
            setRightStyle({translate:'-'+newX+'px -'+newY+'px'})
            return(newPosition)
        })
    }
    const Shrink = ()=>{
        setPosition(prevPosition => {
            let newPosition = prevPosition-(1/stops) 
            if(newPosition<=0){
                clearInterval(Animation)
                newPosition=0
            }
            let change = 1-newPosition
            let newX = x*change
            let newY = y*change
            setLeftStyle({translate:newX+'px '+newY+'px'})
            setRightStyle({translate:'-'+newX+'px -'+newY+'px'})
            return(newPosition)
        })
    }
    // useEffect(()=>{
    //     console.log('position '+position)
    // },[position])
    return(

    <svg width={width} height={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={IconRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=>{window.open('https://www.tiktok.com/@harrisoncole23')}} className={className}>
            <mask id="left"  maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <path ref={LeftRef}style={LeftStyle} d="M12.4332 0.811686L12.4348 0.810668H12.4351C12.3506 0.319185 12.3885 0 12.3885 0H9.00943V12.8576C9.00946 13.3021 9.00949 13.7326 8.85731 14.1603C8.61107 14.8545 8.08432 15.4811 7.38409 15.759C6.45843 16.1258 5.71128 16.1341 4.8765 15.695C4.87555 15.6937 4.87458 15.6924 4.87362 15.6912C4.76058 15.6317 4.64574 15.5638 4.52847 15.4873C3.524 14.7909 3.3409 13.7472 3.34571 13.0094C3.46296 12.0069 3.86193 11.4457 4.61357 10.8706C5.68871 10.0931 7.03203 10.5322 7.03203 10.5322V8.81247L7.03412 8.81244V7.17174C6.40366 7.08188 5.76266 7.09148 5.1349 7.19963C4.71848 7.27369 4.31111 7.39176 3.92025 7.55197C3.29369 7.7909 2.71162 8.13145 2.19841 8.55942C1.61633 9.05617 1.12627 9.64929 0.749854 10.3121C0.607644 10.5548 0.069173 11.5229 0.0036303 13.1002C-0.0345529 13.9955 0.23814 14.9189 0.367722 15.3029V15.3106C0.451003 15.5369 0.769998 16.3042 1.28712 16.9539C1.70443 17.4748 2.1975 17.9317 2.7504 18.3094C2.74562 18.3047 2.74191 18.2999 2.73924 18.295L2.74981 18.3057L2.75792 18.312C4.39259 19.4064 6.20824 19.3323 6.20824 19.3323C6.23455 19.3312 6.26603 19.3302 6.30231 19.3291C6.69956 19.3165 7.67331 19.2857 8.76951 18.7755C10.0966 18.1583 10.8494 17.2415 10.8494 17.2415C10.8587 17.2303 10.8714 17.2153 10.8871 17.1969C11.063 16.9899 11.6149 16.3406 11.9829 15.3915C12.2902 14.6022 12.3909 13.6549 12.3909 13.2759V6.46612C12.4351 6.49122 12.9796 6.84356 12.9796 6.84356C12.9796 6.84356 13.7688 7.33814 14.9961 7.66043C15.8752 7.89067 17.0625 7.9387 17.0625 7.9387V5.35548L17.0622 5.35542V4.6415C16.6448 4.68458 15.7986 4.55814 14.9392 4.13421C14.8057 4.06822 14.6762 3.99446 14.5511 3.91358C14.5526 3.91516 14.5538 3.917 14.5548 3.91909C14.5528 3.91703 14.551 3.9151 14.5493 3.91326C14.1849 3.67681 13.8506 3.39793 13.5538 3.08245C12.8143 2.24748 12.5343 1.40414 12.4332 0.811686Z" fill="white"/>
            </mask>
            <mask id="right"  maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <path ref={RightRef}style={RightStyle} d="M13.4083 1.46208L13.4099 1.46106H13.4102C13.3257 0.969576 13.3636 0.650391 13.3636 0.650391H9.98453V13.5079C9.98456 13.9525 9.98459 14.3829 9.83241 14.8107C9.58617 15.5049 9.05942 16.1315 8.35919 16.4094C7.43353 16.7762 6.68638 16.7844 5.8516 16.3454C5.85064 16.3441 5.84968 16.3428 5.84872 16.3416C5.73568 16.2821 5.62084 16.2142 5.50357 16.1377C4.4991 15.4413 4.316 14.3976 4.32081 13.6598C4.43806 12.6573 4.83703 12.0961 5.58867 11.521C6.66381 10.7434 8.00713 11.1826 8.00713 11.1826V9.46286L8.00922 9.46283V7.82213C7.37876 7.73227 6.73776 7.74187 6.11 7.85002C5.69358 7.92409 5.2862 8.04215 4.89535 8.20236C4.26879 8.44129 3.68672 8.78184 3.1735 9.20981C2.59143 9.70656 2.10137 10.2997 1.72495 10.9625C1.58274 11.2052 1.04427 12.1733 0.978728 13.7506C0.940545 14.6459 1.21324 15.5693 1.34282 15.9533V15.961C1.4261 16.1872 1.7451 16.9546 2.26222 17.6043C2.67953 18.1252 3.1726 18.5821 3.7255 18.9598C3.72072 18.9551 3.71701 18.9503 3.71434 18.9454L3.72491 18.9561L3.73302 18.9624C5.36769 20.0568 7.18334 19.9827 7.18334 19.9827C7.20964 19.9815 7.24113 19.9806 7.27741 19.9794C7.67465 19.9669 8.64841 19.9361 9.7446 19.4259C11.0717 18.8086 11.8245 17.8919 11.8245 17.8919C11.8338 17.8806 11.8465 17.8657 11.8622 17.8473C12.0381 17.6403 12.59 16.991 12.958 16.0419C13.2653 15.2526 13.366 14.3053 13.366 13.9263V7.11651C13.4102 7.14161 13.9547 7.49395 13.9547 7.49395C13.9547 7.49395 14.7439 7.98853 15.9712 8.31082C16.8503 8.54106 18.0376 8.58909 18.0376 8.58909V6.00587L18.0373 6.00581V5.29189C17.6199 5.33497 16.7737 5.20853 15.9143 4.7846C15.7808 4.71861 15.6513 4.64485 15.5262 4.56397C15.5277 4.56555 15.5289 4.56739 15.5299 4.56948C15.5279 4.56742 15.5261 4.56549 15.5244 4.56365C15.16 4.3272 14.8257 4.04832 14.5289 3.73284C13.7894 2.89787 13.5094 2.05453 13.4083 1.46208Z" fill="white"/>
            </mask>
            <rect x='0'y='0'width='20'height='20'mask="url(#left)" opacity={position} fill="#69C9D0"/>
            <rect x='0'y='0'width='20'height='20'mask="url(#right)" opacity={position} fill="#EE1D52"/>
            <g mask="url(#left)">
                <g mask="url(#right)">
                    <rect x='0'y='0'width='20'height='20'fill="var(--Copy)"/>
                    <rect ref={CenterRef} x='0'y='0'width='20'height='20' opacity={position}fill="var(--background01)"/>
                </g>
            </g>
    </svg>

    )
}