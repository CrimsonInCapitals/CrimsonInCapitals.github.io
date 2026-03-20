import { useEffect, useRef, useState } from "react"
import { useThemeContext } from "../context/theme";

export const FocusedContentSection=({children,minHeight=0,style,blur=false})=>{
    const theme = useThemeContext()
    // const [margin, setMargin] = useState([0,0,20]);
    const [radius, setRadius] = useState([0,0,20]);
    const [width, setWidth] = useState([window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]);
    const [fill,setFill]=useState([100,100,60])
    const RGB= theme == 'light'?[239,233,228]:[40,34,34]
    const handleScroll = () => {
        if(SectionRef.current){
            let newWidth = [window.innerWidth,window.innerWidth,window.innerWidth*0.9>1200?1200:window.innerWidth*0.9]
            const rect = SectionRef.current.getBoundingClientRect();
            const VHV = window.innerHeight/100
            const VH=(percent)=>(VHV*percent)
            let persent =  ((rect.bottom-VH(60))/VH(30))
            if(rect.bottom >= VH(90) && rect.top <= VH(10))persent = 0
            else if(rect.bottom <= VH(60) || rect.top >= VH(40))persent = 1
            else if(rect.bottom < VH(90) && rect.bottom > VH(60)){
                persent =  (1-((rect.bottom-VH(60))/VH(30)))
            }
            else if(rect.top > VH(10) && rect.top < VH(40)){
                persent =  (((rect.top-VH(10))/VH(30)))
            }
            setWidth([((newWidth[2]-newWidth[1])*persent)+newWidth[1],newWidth[1],newWidth[2]])
            setRadius([((radius[2]-radius[1])*persent)+radius[1],radius[1],radius[2]])
            if(blur)setFill([((fill[2]-fill[1])*persent)+fill[1],fill[1],fill[2]])
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
        }
    },[])
    return(
        <section ref={SectionRef} style={{borderRadius:radius[0]+'px',width:width[0]+'px',minHeight:minHeight,backdropFilter:'blur(20px)',backgroundColor:'rgb('+RGB[0]+' '+RGB[1]+' '+RGB[2]+' / '+fill[0]+'%)',...style}} className="focus_section layer_two">

            {children}
        </section>
    )
}