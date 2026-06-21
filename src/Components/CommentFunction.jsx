'use client'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from 'react-toastify';

const CommentFunction = ({ i }) => {

    const { data: session } = authClient.useSession()
    const userSession = session?.user?.id




    const handleEdit = async (e) => {

        e.preventDefault()
        const dataObj = new FormData(e.currentTarget)
        const { Edit_Comment } = Object.fromEntries(dataObj.entries())

            const EditObj = {
            Commentid      : i._id,
            Data    : Edit_Comment,
            Time    : new Date().toLocaleDateString()
           }
        //    console.log(EditObj)

            const editman = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comment`, {
                method : 'PATCH',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(EditObj)
            })
            const editReturn = await editman.json()
            if(editReturn.modifiedCount>0){
                toast('Edit success')
            }
    }
    const deletes = async() => {

        const commentID = { commentID : i._id}
        const  deleteman = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comment`,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(commentID)
        })
        const deleteReturn = await deleteman.json()
        if(deleteReturn.deletedCount>0)
        {
            toast('delete success')
        }
    }
    return (
        <div className = "my-3 border-2 border-success p-2 rounded-md">
            <div>
                <h2><span className="text-muted">User_ </span>{i.userName}</h2>
                <p className="font-bold">{i.Data}</p>
                <p className="text-sm text-muted">{i.Time}</p>
            </div>
            <div>
                {
                    i.UserId === userSession ? <div>
                        <Modal>
                            <Button variant="secondary">Edit</Button>
                            <Modal.Backdrop>
                                <Modal.Container placement="auto">
                                    <Modal.Dialog className="sm:max-w-md">
                                        <Modal.CloseTrigger />
                                        <Modal.Header>
                                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                                <Envelope className="size-5" />
                                            </Modal.Icon>

                                        </Modal.Header>
                                        <Modal.Body className="p-6">
                                            <Surface variant="default">
                                                <form className="flex flex-col gap-4" onSubmit={handleEdit}>
                                                    <TextField className="w-full" name="Edit_Comment" type="text" variant="secondary" defaultValue={i.Data}>
                                                        <Label>Comment</Label>
                                                        <Input type="text" />
                                                    </TextField>

                                                    <Modal.Footer>
                                                        <Button type="submit">Edit</Button>
                                                    </Modal.Footer>

                                                </form>
                                            </Surface>
                                        </Modal.Body>

                                    </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
        
                        <Button onClick={deletes}>Delete</Button>
                    </div>
                    :
                    ''
                }

            </div>
            <ToastContainer/>
        </div>
    );
};


export default CommentFunction;