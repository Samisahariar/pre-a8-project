import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AppliedJobsContext, FeaturedContext } from "../root/Root";
import { Link } from "react-router-dom";
import { getitemfromlocal, setTheItem} from "../localStorage/localstorage"

const SingleFeaturedRoute = () => {
    const { userID } = useLoaderData();

    const data = useContext(FeaturedContext)
    const allappliedjobs = useContext(AppliedJobsContext)

    const [appliedjobs, setAppliedjob] = allappliedjobs
    
    
    const mainData = data.filter( single => single.id == userID )
    
    const maindata = mainData[0]

    const handletheappliedjobs = ( appliedjob ) =>{
        const newjob = [ ...appliedjobs, appliedjob]
        setAppliedjob(newjob)
        setTheItem(newjob)
    }

    return (
        <div>
            <h3 className="text-4xl font-semibold">{maindata.job_title}</h3>
            <h3 className="text-xl font-semibold">{maindata.salary}</h3>
            <Link to="/appliedjobs"><button className="btn btn-primary bg- bg-cyan-300 border-0 text-black font-semibold" onClick={() => handletheappliedjobs(maindata)}>Appply</button></Link>
        </div>
    );
};

export default SingleFeaturedRoute;