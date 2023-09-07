import React, {createContext, useState} from "react";

type modeType = {
    mode: "dark" | "light"
}


export const modeContext = createContext<modeType>({
    mode: "light"
})

const ModeContextProvider = (props: any)=>{
    const [mode, setMode] = useState(false);

    const changeMode = ()=>{
        setMode(!mode);
    }

    return(
        <modeContext.Provider>
            {props.children}
        </modeContext.Provider>
    )
}