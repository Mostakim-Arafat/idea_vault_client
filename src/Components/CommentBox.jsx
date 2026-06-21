
import CommentFunction from "./CommentFunction";

const CommentBox = async({id}) => {

    const getComment = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas/${id}/comment`)
    const data = await getComment.json()
   
    return (
        <div>
           {
            data.map(i => <CommentFunction key={i._id} i={i} >     
            </CommentFunction>)
           }
        </div>
    );
};

export default CommentBox;
