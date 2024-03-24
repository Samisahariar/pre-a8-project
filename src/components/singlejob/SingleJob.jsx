import { Link } from "react-router-dom";
const SingleJob = ({ single }) => {

    return (
        <div className=" border-2 border-black p-4">
            <img alt="" src={single.logo} className="" />
            <h3 className="text-start text-xl font-semibold mt-4">{single.job_title}</h3>
            <p className="text-start text-sm mt-2">{single.company_name}</p>
            <div className="flex gap-2">
                <div className="bg-white border-2 border-gray-400 inline-block p-2 rounded-full text-gray-400">
                    {single.remote_or_onsite}
                </div>
                <div className="text-gray-400 inline-block p-2 border-2 border-gray-400 rounded-full">
                    {single.job_type}
                </div>
            </div>
            <Link to={`/featuredJobs/${single.id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
    );
};

export default SingleJob;