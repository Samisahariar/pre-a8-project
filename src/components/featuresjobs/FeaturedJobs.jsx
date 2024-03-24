import { useContext } from "react";
import { FeaturedContext } from "../root/Root";
import SingleJob from "../singlejob/SingleJob";



const FeaturedJobs = () => {
    const gift = useContext(FeaturedContext)

    return (

        <div className="text-center mt-20 w-[90vw] mx-auto">
            <h3 className="text-4xl font-semibold">Featured Jobs available : {gift.length}</h3>
            <div className="grid-cols-2 grid">
                {
                    gift.map(single => <SingleJob single={single}></SingleJob>)
                }
            </div>
        </div>


    );
};

export default FeaturedJobs;