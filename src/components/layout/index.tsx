import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar";
import Hero from "../hero";


const Layout = ()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
            </main>
        </>
    )
}

export default Layout;