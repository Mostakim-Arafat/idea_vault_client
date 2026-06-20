'use client'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const CommentFunction = ({ i }) => {

    const { data: session } = authClient.useSession()
    const userSession = session?.user?.id




    const handleEdit = async (e) => {

        e.preventDefault()
        const dataObj = new FormData(e.currentTarget)
        const { Edit_Comment } = Object.fromEntries(dataObj.entries())

        //     const EditObj = {
        //     id : id,
        //     userName : name,
        //     Data    : data.comment,
        //     Time    : new Date().toLocaleDateString()
        //    }

        //     const editman = await fetch(`http://localhost:5000/${}/comment`, {
        //         method : 'PATCH',
        //         headers : 'content-type : application/json',
        //         body : JSON.stringify()
        //     })
    }
    const deletes = () => {

    }
    return (
        <div>
            <div>
                <h2>{i.userName}</h2>
                <p className="font-bold">{i.Data}</p>
                <p>{i.Time}</p>
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
        </div>
    );
};


export default CommentFunction;