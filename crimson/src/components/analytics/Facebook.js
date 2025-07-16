import { Doughnut } from "react-chartjs-2"
import { useFacebookContext } from "../../context/facebook"
import { Card, Section } from "./Card"
import { Posts } from "./Posts"
import { useReducer, useState } from "react"
import { PageForm } from "./Form"
import { Login } from "./Login"
import { CH1 } from "../StyledComponents"

export class variablesObject{
    constructor(){

    }
}
export const Facebook = ()=>{
    const facebook = useFacebookContext()
    const [page,setPage]=useState()
    const handleFormData=(variables,formData)=>{

        console.log(variables)
        setPage(formData.page)
        return formData
    }
    const [variables,dispatchVariables]=useReducer(handleFormData,'no')

    return(
        <>
         {facebook.pages && <PageForm F={FormData=>{dispatchVariables(FormData)}}/>}

{/* <DateRange/> */}
{facebook.status !== 'connected' && <Login/>}
{facebook.status === 'connected' &&
<>{!facebook.pages? <Card><CH1>No pages, linked to this account</CH1></Card>
:  <></>}</>}
{page &&
<>
    <Card key={page.id} heading={page.name}>
        <Posts page={page} variables={variables}/>
    </Card>

    </>
}
        </>
    )
}