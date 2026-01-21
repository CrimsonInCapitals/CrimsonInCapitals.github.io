import { useEffect, useRef, useState } from "react"

export const FocusedContentSection=({children,minHeight=0,style})=>{

    const [margin, setMargin] = useState([0,0,20]);
    const [radius, setRadius] = useState([0,0,20]);
    const [width, setWidth] = useState([window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]);
    const handleScroll = () => {
        if(SectionRef.current){
            let newWidth = [window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]
            // setWidth(newWidth)
            const rect = SectionRef.current.getBoundingClientRect();
            const VHV = window.innerHeight/100
            const VH=(percent)=>(VHV*percent)
            let persent =  ((rect.bottom-VH(60))/VH(30))
            if(rect.bottom >= VH(90) && rect.top <= VH(10))persent = 0
            else if(rect.bottom <= VH(60) || rect.top >= VH(40))persent = 1
            else if(rect.bottom < VH(90) && rect.bottom > VH(60)){
                // console.log('bottom: '+rect.bottom)
                // console.log('VH60 '+VH(60))
                // console.log('VH60 - bottom: '+(rect.bottom-VH(60)))

                // console.log('VH30 '+VH(30))

                persent =  (1-((rect.bottom-VH(60))/VH(30)))
            }
            else if(rect.top > VH(10) && rect.top < VH(40)){
            
                persent =  (((rect.top-VH(10))/VH(30)))
            }
            // console.log('percent: '+persent)
            setWidth([((newWidth[2]-newWidth[1])*persent)+newWidth[1],newWidth[1],newWidth[2]])
            setRadius([((radius[2]-radius[1])*persent)+radius[1],radius[1],radius[2]])

        }

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll()
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(()=>{
            handleScroll()
    },[window])

    const SectionRef = useRef(null)
    window.addEventListener('resize', ()=>setWidth([window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]));

    useEffect(()=>{
        if(SectionRef.current){
            const rect = SectionRef.current.getBoundingClientRect();
            // console.log("Element Position:", rect);
            // console.log("Top:", rect.top, "Left:", rect.left);
        }
    },[])
    return(
        <section ref={SectionRef} style={{...style,margin:margin[0]+'px',borderRadius:radius[0]+'px',width:width[0]+'px',minHeight:minHeight}} className="focus_section layer_two">

            {children}
        </section>
    )
}