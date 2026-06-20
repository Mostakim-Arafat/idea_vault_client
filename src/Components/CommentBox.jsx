
import CommentFunction from "./CommentFunction";

const CommentBox = async({id}) => {

    const getComment = await fetch(`http://localhost:5000/ideas/${id}/comment`)
    const data = await getComment.json()
   
    return (
        <div>
           {
            data.map(i => <CommentFunction key={i._id} i={i}>     
            </CommentFunction>)
           }
        </div>
    );
};

export default CommentBox;
