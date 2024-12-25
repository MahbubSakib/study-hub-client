import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div className="bg-[#4A90E2]">
            <div className="navbar shadow-sm text-[#F8F8F8] w-10/12 mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex-1">
                    <Link to="/" className="flex gap-2 items-center">
                        <img className="w-auto h-7" src={logo} alt="" />
                        <span className="font-bold text-xl">StudyHub</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/assignments">Assignments</NavLink>
                        </li>
                    </ul>
                    <div className="ml-10">
                        {!user && (
                            <Link
                                to="/login"
                                className="bg-[#2B3440] px-3 py-2 rounded-md text-center text-white hover:bg-[#394455] transition duration-300"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    {user && (
                        <div className="dropdown dropdown-end z-50">
                            <div className="flex items-center gap-2">
                                <div>
                                    <button
                                        onClick={logout}
                                        className="bg-white px-3 py-[6px] text-black rounded-md block text-center"
                                    >
                                        Logout
                                    </button>
                                </div>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div title={user?.displayName} className="w-10 rounded-full">
                                        <img
                                            referrerPolicy="no-referrer"
                                            alt="User Profile Photo"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content text-[#4A4A4A] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
                            >
                                <li>
                                    <Link to="/create-assignments" className="justify-between">
                                        Create Assignments
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-attempted-assignments">
                                        My Attempted Assignments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="ml-3">
                        <Link
                            to="/pending-assignments"
                            className="bg-white text-black px-3 py-[6px] rounded-md block text-center"
                        >
                            Pending Assignments
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden bg-[#2B3440] p-2 rounded-md text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-[#4A90E2] z-40 p-4 shadow-md lg:hidden">
                        <ul className="space-y-3">
                            <li>
                                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/assignments" onClick={() => setIsMenuOpen(false)}>
                                    Assignments
                                </NavLink>
                            </li>
                            {user && (
                                <>
                                    <li>
                                        <Link
                                            to="/create-assignments"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Create Assignments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/my-attempted-assignments"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            My Attempted Assignments
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="bg-[#2B3440] px-3 py-2 rounded-md text-white w-full text-left"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                            {!user && (
                                <li>
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-[#2B3440] px-3 py-2 rounded-md text-white w-full text-left"
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                            {user && (
                                <li>
                                    <Link
                                        to="/pending-assignments"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-white text-black px-3 py-2 rounded-md block"
                                    >
                                        Pending Assignments
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;
