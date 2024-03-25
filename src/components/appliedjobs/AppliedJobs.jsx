import { useContext } from "react";
import { AppliedJobsContext } from "../root/Root";

const AppliedJobs = () => {
    const appliedJobs = useContext(AppliedJobsContext)
    const [ applied ] = appliedJobs
    return (
        <div>
            <h3>Applied jobs are avilable here ...plz tap here to send some advices to us!!</h3>
            <p>Jobs available here is {applied.length}</p>            
        </div>
    );
};

export default AppliedJobs;