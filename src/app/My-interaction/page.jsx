import { getUserData } from "@/lib/crud";
import { Button } from "@heroui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyInteraction = async () => {
    const { id } = await getUserData()
    // console.log(id)
    const {token} = await auth.api.getToken({
            headers : await headers()
        })
    const commentData = await fetch(`http://localhost:5000/comment`,{
        headers : {
            'authorization' : `bearer ${token}`
        }})
    const allComment = await commentData.json()
    const yourComment = []
    for (const i of allComment) {
        console.log(i)
        if (i.UserId === id) {
            yourComment.push(i)
        }
    }
    console.log(yourComment)



    return (
        <div>
            <h1 className="font-serif font-bold text-2xl text-center my-2.5 ">My Interactions</h1>
            <div className="w-11/12 mx-auto mb-3 ">
                {
                    yourComment.map(comment => <Card key={comment._id} comment={comment}></Card>)
                }
            </div>

        </div>
    );
};

export default MyInteraction;

const Card = ({ comment }) => {
    return (
        <div className="border rounded-2xl p-2">
            <span>Comments: <p>{comment.Data}</p></span>
            <Link href={`/Ideas/${comment.IdeaPageid}`}>
                <Button> Post: <FaRegArrowAltCircleRight /></Button>
            </Link>

        </div>
    )
}