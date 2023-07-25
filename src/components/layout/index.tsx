import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";
import Intro from "../intro";

const Layout = ()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Intro/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;