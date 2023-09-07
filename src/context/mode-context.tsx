import {createContext, useState} from "react";

type modeType = {
    mode: "dark" | "light" | "" ,
    changeMode: null | CallableFunction
}


export const ModeContext = createContext<modeType>({
    mode: "",
    changeMode: null
})

const ModeContextProvider = (props: any)=>{
    const [mode, setMode] = useState(false);

    const changeMode = (val: boolean)=>{
        console.log(val)
        setMode(val);
    }

    return(
        <ModeContext.Provider value={{mode: mode ? "dark" : "light", changeMode: changeMode}} >
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeContextProvider;