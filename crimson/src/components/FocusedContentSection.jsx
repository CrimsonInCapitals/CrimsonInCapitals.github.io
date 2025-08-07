import { useEffect, useRef, useState } from "react"

export const FocusedContentSection=({children,minHeight=0})=>{

    const [scrollPosition, setScrollPosition] = useState(0);
    const [margin, setMargin] = useState([0,0,20]);
    const [radius, setRadius] = useState([0,0,20]);
    const [width, setWidth] = useState([window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]);
    const handleScroll = () => {
        if(SectionRef.current){
            setWidth([window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9])
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
            setWidth([((width[2]-width[1])*persent)+width[1],width[1],width[2]])
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


    const SectionRef = useRef(null)
    
    useEffect(()=>{
        if(SectionRef.current){
            const rect = SectionRef.current.getBoundingClientRect();
            // console.log("Element Position:", rect);
            // console.log("Top:", rect.top, "Left:", rect.left);
        }
    },[])
    return(
        <section ref={SectionRef} style={{margin:margin[0]+'px',borderRadius:radius[0]+'px',width:width[0]+'px',minHeight:minHeight}} className="focus_section layer_two">

            {children}
        </section>
    )
}