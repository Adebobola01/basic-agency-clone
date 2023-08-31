import React from "react";


const Underline = ({customStyles}: any)=>{
    const styles = {
        height: ".08rem",
        // width: "100%",
        backgroundColor: "#000",
        margin: "0",
    }

    const stylesT = {...styles, ...customStyles}

    return(
        <figure style={stylesT} >
        </figure>
    )
}

export default Underline;