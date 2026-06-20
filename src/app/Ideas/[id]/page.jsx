
import Comment from "@/Components/Comment";
import IdeaDetailCard from "@/Components/IdeaDetailCard";
import { getUserData } from "@/lib/crud";
import CommentBox from "@/Components/CommentBox";

const IdeaDetail = async ({ params }) => {
    const UserInfo = await getUserData()
    //console.log(UserInfo)

    const { id } = await params
    // console.log(id)
    const getDetail = await fetch(`http://localhost:5000/ideas/${id}`)
    const data1 = await getDetail.json()
    //console.log(data1)
   

    return (
        <div>
            idea Details
            <IdeaDetailCard info={data1} ></IdeaDetailCard> 
            <CommentBox id = {id}></CommentBox>
            <Comment id={id} user={UserInfo}></Comment>
        </div>
    );
};

export default IdeaDetail;