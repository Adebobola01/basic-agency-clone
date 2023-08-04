import React from "react";
import styles from "./layout.module.scss";
import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";
import Intro from "../intro";
import Overview from "../overview";
import ShowCase from "../showcase";
import Featured from "../featured";

const Layout = ()=>{

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Intro/>
                <Overview/>
                <ShowCase/>
                <Featured/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;