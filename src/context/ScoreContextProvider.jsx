import { useState } from "react"
import ScoreContext from "./ScoreContext"


const ScoreContextProvider = ({children}) => {
    const [score, setScore] = useState(0)

    return(
        <ScoreContext.Provider value={{score,setScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider