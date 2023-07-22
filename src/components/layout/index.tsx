import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";


const Layout = ()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;