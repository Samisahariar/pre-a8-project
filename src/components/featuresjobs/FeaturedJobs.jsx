import { useEffect, useState } from "react";

const FeaturedJobs = () => {

    const [featuredJobs, setFeatured] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setFeatured(data))
    }, [])

    return (
        <div className="text-center mt-20">
            <h3>Featured Jobs available is : {featuredJobs.length}</h3>
        </div>
    );
};

export default FeaturedJobs;