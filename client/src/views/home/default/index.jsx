import React from "react";

import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Pricing from "../pricing/Pricing";
import Footer from "../footer/Footer";
import Contact from "../Contact";
import Info from "../Info";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Info />
            <br /> <br />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
