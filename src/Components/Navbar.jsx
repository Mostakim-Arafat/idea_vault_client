import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
    const login = false
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>
            <div>
                <Link href={'/Home'}>
                    <Button>Home</Button>
                </Link>
                <Link href={'/Ideas'}>
                    <Button>Ideas</Button>
                </Link>
                {
                    login ?
                        <div>
                            {/* yes loggin */}
                            <Link href={'/AddIdeas'}>
                                <Button>Add_Ideas</Button>
                            </Link>
                            <Link href={'/My-idea'}>
                                <Button>My_Ideas</Button>
                            </Link>
                            <Link href={'/My-interaction'}>
                                <Button>My Interaction</Button>
                            </Link>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                            width={40}
                                            height={40} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link href={'/Profile'}> Profile</Link>  
                                    </li>
                                    
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div> :
                        <div>
                            {/* no */}
                            <Link href={'/Login'}>
                                <Button>Login</Button>
                            </Link>
                            <Link href={'/Register'}>
                                <Button>Register</Button>
                            </Link>
                        </div>
                }



            </div>

        </div>
    );
};

export default Navbar;

//Logo / Website Name
// Home
// Ideas
// Add Idea (Private)
// My Ideas (Private)
// My Interactions (Private)
// Login/Register (if logged out)
// User Profile Dropdown (if logged in)
// Profile Management (User can update their profile)
