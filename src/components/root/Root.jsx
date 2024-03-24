import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { createContext } from "react";
import { useState, useEffect } from "react";


export const FeaturedContext = createContext();

const Root = () => {

    const [featuredJobs, setFeatured] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    return (
        <div>
            <FeaturedContext.Provider value={featuredJobs}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </FeaturedContext.Provider>
        </div>
    );
};

export default Root;