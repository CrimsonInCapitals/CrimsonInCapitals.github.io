import { LayerProvider, ModeProvider } from "../context/brandLayers"
import { CookieProvider } from "../context/Cookies"

export const DPC = ({children})=>{
    return(
                    <CookieProvider>
                            <ModeProvider>
                                <LayerProvider>
                                    {children}
                                </LayerProvider>
                            </ModeProvider>
                        </CookieProvider>
    )
}