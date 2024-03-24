import { useContext } from "react";
import { FeaturedContext } from "../root/Root";

const AppliedJobs = () => {
    const data = useContext(FeaturedContext)
    return (
        <div>
            <h3>Applied jobs are avilable here ...plz tap here to send some advices to us!!</h3>
            <p>Jobs available here is {data.length}</p>            
        </div>
    );
};

export default AppliedJobs;