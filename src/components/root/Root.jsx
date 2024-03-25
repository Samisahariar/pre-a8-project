import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { getitemfromlocal } from "../localStorage/localstorage"


export const FeaturedContext = createContext();
export const AppliedJobsContext = createContext();
export const HandleTheAppliedjob = createContext();

const Root = () => {

    const [appliedjobs, setAppliedJobs] = useState([])

    const [featuredJobs, setFeatured] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    useEffect(() => {
        const data = getitemfromlocal();
        setAppliedJobs(data)
    }, [])

    return (
        <div>
            <AppliedJobsContext.Provider value={[appliedjobs, setAppliedJobs]}>
                <FeaturedContext.Provider value={featuredJobs}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </FeaturedContext.Provider>
            </AppliedJobsContext.Provider>

        </div>
    );
};

export default Root;