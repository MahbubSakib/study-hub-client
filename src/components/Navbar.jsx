import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import logo from '../assets/logo.png'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className='bg-[#4A90E2]'>
            <div className='navbar shadow-sm text-[#F8F8F8] w-10/12 mx-auto'>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        <span className='font-bold text-xl'>StudyHub</span>
                    </Link>
                </div>
                <div className='flex'>
                    <ul className='menu menu-horizontal px-1 space-x-2'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/assignments'>Assignments</NavLink>
                        </li>
                    </ul>
                    <div className='ml-10'>
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
                        <div className='dropdown dropdown-end z-50'>
                            <div className='flex items-center gap-2'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div title={user?.displayName} className='w-10 rounded-full'>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={logout}
                                        className='bg-[#4A4A4A] px-3 py-[6px] rounded-md block text-center'
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content text-[#4A4A4A] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56'
                            >
                                <li>
                                    <Link to='/create-assignments' className='justify-between'>
                                        Create Assignments
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-attempted-assignments'>
                                        My Attempted Assignments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Navbar