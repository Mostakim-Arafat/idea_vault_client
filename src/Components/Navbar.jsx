
'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession()
    // console.log(session)

    const handleSignout = async () => {
        console.log('logout successful')
        return await authClient.signOut();
    }

    return (
       
        <div className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-base-200 shadow-xs transition-all">
            <div className="flex-1">
                
                <a className="btn btn-ghost text-xl font-black  uppercase text-neutral">
                    Idea<span className="text-primary">Vault</span>
                </a>
            </div>
            
            <div className="flex items-center gap-1.5 md:gap-2">
                <Link href={'/Home'}>
                   
                    <Button variant="light" size="sm" className="font-bold text-xs uppercase rounded-full px-4 h-9">Home</Button>
                </Link>
                <Link href={'/Ideas'}>
                 
                    <Button variant="light" size="sm" className="font-bold text-xs uppercase rounded-full px-4 h-9">Ideas</Button>
                </Link>
                <Link href={'/AddIdeas'}>
                  
                    <Button variant="light" size="sm" className="font-bold text-xs uppercase rounded-full px-4 h-9">Add_Ideas</Button>
                </Link>
                <Link href={'/My-idea'}>
                   
                    <Button variant="light" size="sm" className="font-bold text-xs uppercase rounded-full px-4 h-9">My_Ideas</Button>
                </Link>
                <Link href={'/My-interaction'}>
                    
                    <Button variant="light" size="sm" className="font-bold text-xs uppercase  rounded-full px-4 h-9">My Interaction</Button>
                </Link>
                {
                    session?.user ?
                        <div>
                            {/* yes loggin */}

                            <div className="dropdown dropdown-end">
                                
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-base-300 hover:ring-primary focus:ring-primary transition-all p-0">
                                    <div className="w-10 rounded-full overflow-hidden">
                                        <Image
                                            alt={session?.user?.name}
                                            src={session?.user?.image}
                                            width={40}
                                            height={40}
                                            className="object-cover" />
                                    </div>
                                </div>
                               
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[100] mt-3 w-56 p-2.5 shadow-xl border border-base-200/60 gap-1">

                                   
                                    <div className="px-3 py-2 border-b border-base-200 mb-1">
                                        <p className="text-xs font-black truncate text-neutral">{session?.user?.name}</p>
                                        <p className="text-[11px] opacity-50 truncate">{session?.user?.email}</p>
                                    </div>

                                    {/* DESIGN UPGRADE: Smoothed item transition interactions */}
                                    <li>
                                        <Link href={'/Profile'} className="font-medium text-sm rounded-xl py-2 hover:bg-base-200 active:bg-primary"> Profile</Link>
                                    </li>

                                    {/* DESIGN UPGRADE: Converted logout into a distinctive destructive action flag matching Hero UI rules */}
                                    <li>
                                        <Button
                                            color="danger"
                                            variant="flat"
                                            size="sm"
                                            className="w-full font-bold text-xs uppercase tracking-wider rounded-xl mt-1 h-9"
                                            onClick={() => handleSignout()}
                                        >
                                            Logout
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div> :
                        <div>
                            {/* no */}
                            <Link href={'/Login'}>
                                {/* DESIGN UPGRADE: Colored full primary call-to-action button parameters */}
                                <Button color="primary" size="sm" className="font-bold text-xs uppercase tracking-wider rounded-full px-5 h-9 shadow-sm">Login</Button>
                            </Link>
                        </div>
                }

            </div>

        </div>
    );
};

export default Navbar;
