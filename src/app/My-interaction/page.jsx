import { getUserData } from "@/lib/crud";
import { Button } from "@heroui/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const MyInteraction = async() => {
    const {id} = await getUserData()
    // console.log(id)
    const commentData = await fetch(`http://localhost:5000/comment`)
    const allComment = await commentData.json()
    const yourComment = []
    for( const i of allComment){
        console.log(i)
        if(i.UserId === id){
            yourComment.push(i)
        }
    }
    console.log(yourComment)

   
    
    return (
        <div>
            my interaction
            {
                yourComment.map( comment => <Card key={comment._id} comment={comment}></Card>)
            }
        </div>
    );
};

export default MyInteraction;

const Card = ({comment}) => {
    return(
        <div className="border rounded-2xl p-2">
            <li>{comment.Data}</li>
            <Link href={`/Ideas/${comment.IdeaPageid}`}>
             <Button> Post: <FaRegArrowAltCircleRight/></Button>
            </Link>
            
        </div>
    )
}