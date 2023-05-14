import { useThemeContext } from "../context/theme"

export const P =({children,className='',Style=''})=>{
    const theme = useThemeContext()
    return(
        <p className={"default "+className} style={{...Style,...theme.TextStyle.Paragraph}}>{children}</p>
    )
}
export const CP =({children,className,Style})=>{
    const theme = useThemeContext()
    return(
        <p className={"default "+className} style={{...Style,...theme.TextStyle.CardParagraph}}>{children}</p>
    )
}
export const H1 =({children,className,Style})=>{
    const theme = useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.TextStyle.Heading1}}>{children}</h1>
    )
}
export const H2 =({children,className,Style})=>{
    const theme = useThemeContext()
    return(
        <h2 className={"default "+className} style={{...Style,...theme.TextStyle.Heading2}}>{children}</h2>
    )
}
export const CH1 =({children,className,Style})=>{
    const theme = useThemeContext()
    return(
        <h1 className={"default "+className} style={{...Style,...theme.TextStyle.CardHeading}}>{children}</h1>
    )
}
export const Ap =({children,className,Style})=>{
    const theme = useThemeContext()
    return(
        <p className={"default "+className} style={{...Style,...theme.TextStyle.Aside}}>{children}</p>
    )
}