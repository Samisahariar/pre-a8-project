import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <NavLink>Statistics</NavLink>
        <NavLink>Applied Job</NavLink>
        <NavLink>Blog</NavLink>


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">CareerHUB</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    {/* <Link>Statistics</Link>
                    <Link>Applied Jobs</Link>
                    <Link>Blog</Link> */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear bg-gradient-to-r from-cyan-300 to-fuchsia-400 text-white font-semibold">Start Applying</a>
            </div>
        </div>
    );
};

export default Navbar;