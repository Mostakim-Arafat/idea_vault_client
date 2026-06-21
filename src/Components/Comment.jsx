'use client'
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from 'react-toastify';
const Comment = ({id,user}) => {
    const handleComment = async(e) => {
        e.preventDefault()
       const commentHolder = new FormData(e.currentTarget)
       const data = Object.fromEntries(commentHolder.entries())
       console.log(data)
       
       const commentObj = {
        IdeaPageid : id,
        UserId : user.id,
        userName : user.name,
        Data    : data.comment,
        Time    : new Date().toLocaleDateString()
       }

       console.log(commentObj)

       const { data:tokenData, error } = await authClient.token()

        const postComment =  await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comment`,{
        method : 'POST',
        headers : {
             'content-type' : 'application/json',
             'authorization' : `bearer ${tokenData?.token}`
            },
        body : JSON.stringify(commentObj)
    })
        const postedData = await postComment.json()
       if(postedData.insertedId){
        toast('comment success')
       }
    }

   



    return (
        <div>
         <form onSubmit={handleComment}>
            <h2>Comment below</h2>
                <textarea placeholder="Info" className="textarea textarea-info" name='comment' ></textarea>
                <button className="btn" >save</button>
         </form>
         <ToastContainer/>
        </div>
    );
};

export default Comment;