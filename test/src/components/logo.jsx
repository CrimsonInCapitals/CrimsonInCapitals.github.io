export const Logo =()=>{
    const style={fill:'blue'}
    return(
        <svg height="50px" viewBox="0 0 70 100" version="1.1" overflow='visible'>
            <path fillRule="evenodd" clipRule="evenodd" d="M70 50H0V40H10V0H60V40H70V50ZM20 10V40H50V10H20Z" style={{fill:'var(--Crimson)'}}/>
            <rect x="10" y="60" width="10" height="30" fill="var(--Copy)">
                <animate attributeName="height" begin='0s' dur='1s' from='0' to='30'repeatCount='1' calcMode='paced'/>
                <animate attributeName="y" begin='0.5s' dur='0.5s' from='50' to='60'repeatCount='1'calcMode='paced'/>
                <animate attributeName="y" begin='0s' dur='0.5s' from='50' to='50'repeatCount='1'/>
            </rect>
            <rect x="30" y="60" width="10" height="40" fill="var(--Copy)">
                <animate attributeName="height" begin='0s' dur='1s' from='0' to='40'repeatCount='1'calcMode='paced'/>
                <animate attributeName="y" begin='0.5s' dur='0.5s' from='50' to='60'repeatCount='1'calcMode='paced'/>
                <animate attributeName="y" begin='0s' dur='0.5s' from='50' to='50'repeatCount='1'/>

            </rect>
            <rect x="50" y="60" width="10" height="30" fill="var(--Copy)">
                <animate attributeName="height" begin='0s' dur='1s' from='0' to='30'repeatCount='1'calcMode='paced'/>
                <animate attributeName="y" begin='0.5s' dur='0.5s' from='50' to='60'calcMode='paced'/>
                <animate attributeName="y" begin='0s' dur='0.5s' from='50' to='50'repeatCount='1'/>
            </rect>   
                 
        </svg>
    )
}


export const MaskedLogo=()=>{
    const style = {fill:'var(--Copy)'}
    return(
        <svg height="50px" viewBox="0 0 70 100" version="1.1" id="logo-mono">
            <g mask="url(#logo-mask)">
                <path fillRule="evenodd" clipRule="evenodd" d="M70 50H0V40H10V0H60V40H70V50ZM20 10V40H50V10H20Z" style={style}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20 60V90H10V60H20ZM40 60V99.999H30V60H40ZM60 60V90H50V60H60Z" style={style}/>
            </g>
          
        </svg>
    )
}
export const LogoInvisalbe =()=>{
    return(
        <svg height="50px" viewBox="0 0 70 100" version="1.1" >
            <path fillRule="evenodd" clipRule="evenodd" d="M70 50H0V40H10V0H60V40H70V50ZM20 10V40H50V10H20Z"style={{fill:'none'}} />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 60V90H10V60H20ZM40 60V99.999H30V60H40ZM60 60V90H50V60H60Z" style={{fill:'none'}} />

        </svg>
    )
}