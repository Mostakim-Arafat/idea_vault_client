'use client'

import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const { data: session, isPending } = authClient.useSession()
    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <p className="text-sm font-medium animate-pulse">Loading profile data...</p>
            </div>
        );
    }
    const userInfo = session?.user
    console.log(userInfo)

    const editProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        //console.log(data)
        const { data:tokenData, error } = await authClient.token()

            const edits = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/user/${userInfo.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                     'authorization' : `bearer ${tokenData?.token}`
                },
                body: JSON.stringify(data)
            })
            const editReturn = await edits.json()
            if(editReturn.modifiedCount>0){
                toast('Profile Update success')
            }
            console.log(editReturn)
    }

    return (
        <div className="min-w-2xs mx-auto space-y-2 mb-2">
           <h1 className="text-2xl text-center font-serif ">Edit profile</h1>
            <form onSubmit={editProfile}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" defaultValue={userInfo.name} name="name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" defaultValue={userInfo.email} name="email" />
                    <label className="label">Image</label>
                    <input type="url" className="input" defaultValue={userInfo.image} name="image" />

                    <button className="btn btn-neutral mt-4" type="submit">Edit</button>
                </fieldset>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Profile;