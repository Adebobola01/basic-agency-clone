import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";
import Intro from "../intro";
import Overview from "../overview";

const Layout = ()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Intro/>
                <Overview/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;