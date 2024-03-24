import user from "../../assets/images/user.png"


const Herosection = () => {
    return (
        <div className="hero min-h-[80vh] w-[90vw] mx-auto">
            <div className="bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-start flex-grow">
                    <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div>
                    <img src={user} alt="img here" className="w-[40vw] h-full"/>
                </div>
            </div>
        </div>
    );
};

export default Herosection;