import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Chips = {
  One: {name: 'One',value: 1},
  Two: {name: 'Two',value: 2},
  Three: {name: 'Three',value: 3}
}

export const Test =()=> {
    const {id} = useParams()
    const search = () => {
      let found = false
      if (id == null) return found
      Object.keys(Chips).map((index) => {
        let chip = Chips[index]
        if (chip.name == id) found = chip
      })
      return found
    }

    const intiChipValue = (value)=> !value ? false : value.value
    const [chipValue, setChipValue] = useState(intiChipValue(search()))
    useEffect(()=>{
      setChipValue(intiChipValue(search()))
    },[id])
    return(
      <main>
        {Object.keys(Chips).map(i=>{
          return(<Link key={i}to={'/test/'+Chips[i].name}>{Chips[i].name}</Link>)
        })}
        <h1>Value: {chipValue}</h1>
      </main>
    ) 
}