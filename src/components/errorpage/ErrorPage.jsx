import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            OPPPs !!! something went wrong!! server did not response!!
            <div>
                <Link to="/"><button className="btn bg-gradient-to-r from bg-cyan-400 to-purple-500 border-0 text-white font-bold">Go-Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;