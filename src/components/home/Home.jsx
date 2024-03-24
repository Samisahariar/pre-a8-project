import CategoryLIst from "../categorylist/CategoryLIst";
import FeaturedJobs from "../featuresjobs/FeaturedJobs";
import Herosection from "../herosection/Hero-section";

const Home = () => {
    return (
        <div>
            <Herosection></Herosection>
            <CategoryLIst></CategoryLIst>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;