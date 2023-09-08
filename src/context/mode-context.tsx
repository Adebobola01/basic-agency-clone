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
    const [isDark, setIsDark] = useState(false);

    const changeMode = (val: boolean)=>{
        console.log(val)
        setIsDark(val);
    }

    if(isDark){document.querySelector("body")?.classList.add("dark");}else{
        document.querySelector("body")?.classList.remove("dark");
    }

    return(
        <ModeContext.Provider value={{mode: isDark ? "dark" : "light", changeMode: changeMode}} >
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeContextProvider;