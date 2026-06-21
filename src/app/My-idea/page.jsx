export const dynamic = 'force-dynamic';
import { getUserData } from "@/lib/crud";
import IdeaCard from "@/Components/ideaCard";
import MyideaFunction from "@/Components/MyideaFunction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NoEntry from "@/Components/NoEntry";

const MyIdea = async () => {
    const functionData = await getUserData()
    const userID = functionData?.id
    //console.log(userID)
    const {token} = await auth.api.getToken({
            headers : await headers()
        })
    const data1 = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas`,{
        headers : {
            'authorization' : `bearer ${token}`
        }})
    const data = await data1.json()
    const selected_data = []

    for (const i of data) {
        if (i.userID === userID) {
            selected_data.push(i)
        }
    }
    console.log(selected_data)

    return (
        <div>
            <h1 className="font-serif font-bold text-2xl text-center my-2.5 ">My Idea</h1>
            <div className="w-11/12 mx-auto mb-3">
                <div className="flex flex-col justify-center items-center">
                    {
                       selected_data.length>0 ? selected_data.map(data => <div key={data._id} className="flex">
                            <IdeaCard data={data}></IdeaCard>
                            <MyideaFunction data={data}></MyideaFunction>
                        </div>) : <NoEntry></NoEntry>
                    }
                </div>
            </div>

        </div>
    );
};

export default MyIdea;