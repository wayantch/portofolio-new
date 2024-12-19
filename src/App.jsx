import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Keahlian from "./components/Keahlian";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            {/* <Keahlian /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default App;
