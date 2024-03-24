import { useLoaderData } from "react-router-dom";

const SingleFeaturedRoute = () => {
    const { userID } = useLoaderData();
    console.log(userID)
    return (
        <div>
            <h3>{userID}</h3>
        </div>
    );
};

export default SingleFeaturedRoute;