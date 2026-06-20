'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar =  () => {
    const { data: session } = authClient.useSession()
   // console.log(session)

    const handleSignout = async() => {
        console.log('logout successful')
       return await authClient.signOut();
    }
    
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
                    session?.user ?
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
                                            alt={session?.user?.name}
                                            src={session?.user?.image}
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

                                    <li><Button onClick={() => handleSignout()}>Logout</Button></li>
                                </ul>
                            </div>
                        </div> :
                        <div>
                            {/* no */}
                            <Link href={'/Login'}>
                                <Button>Login</Button>
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
