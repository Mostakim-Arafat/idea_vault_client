'use client'
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
const MyideaFunction = ({ data }) => {


    const handleEdit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const datas = Object.fromEntries(formData.entries());
        console.log(data)
        const { data: tokenData, error } = await authClient.token()

        const editIdea = await fetch(`${process.env.SERVER}/ideas/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${tokenData?.token}`
            },
            body: JSON.stringify(datas)
        })
        const editReturn = await editIdea.json()
        console.log(editReturn)
    }
    const handleDelete = async () => {
        const { data: tokenData, error } = await authClient.token()
        const deleteIdea = await fetch(`${process.env.SERVER}/ideas/${data._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${tokenData?.token}`
            }
    })
        const deleteReturn = await deleteIdea.json()
        console.log(deleteReturn)
        const deleteComment = await fetch(`${process.env.SERVER}/comment/${data._id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${tokenData?.token}`
            }
        })
        const deleteReturn2 = await deleteComment.json()
        console.log(deleteReturn2)
    }
    return (
        <div>
            <div>
                <Modal>
                    <Button variant="danger">Delete this</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                            <Modal.Dialog className="md:max-w-[450px]">
                                <Modal.CloseTrigger />
                                <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                        <Rocket className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading>{data.title}</Modal.Heading>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        {data.shortDescription}
                                        idea and along with <span className="font-bold">Comment</span> will be deleted
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className="w-full" slot="close" onClick={handleDelete}>
                                        sure?
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
            <div>
                <Modal>
                    <Button variant="secondary">Edit this</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                            <Modal.Dialog className="sm:max-w-[360px]">
                                <Modal.CloseTrigger />

                                <Modal.Body>
                                    <div className="max-w-3xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-md my-10">

                                        <h2 className="text-xl font-bold mb-6 text-blue-400">Edit Your Idea</h2>
                                        <form onSubmit={handleEdit} className="space-y-4">

                                            <input type="text" name="title" defaultValue={data.title} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                                            <input type="text" name="shortDescription" defaultValue={data.shortDescription} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <select name="category" defaultValue={data.category} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white">
                                                    <option value="" disabled>Select Category *</option>
                                                    <option value="Tech">Tech</option>
                                                    <option value="Health">Health</option>
                                                    <option value="AI">AI</option>
                                                    <option value="Education">Education</option>
                                                </select>
                                                <input type="number" name="estimatedBudget" defaultValue={data.estimatedBudget} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input type="text" name="tags" defaultValue={data.tags} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                                                <input type="url" name="imageUrl" defaultValue={data.imageUrl} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                                            </div>

                                            <input type="text" name="targetAudience" defaultValue={data.targetAudience} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />

                                            <textarea name="problemStatement" rows="2" defaultValue={data.problemStatement} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />
                                            <textarea name="proposedSolution" rows="2" defaultValue={data.proposedSolution} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />
                                            <textarea name="detailedDescription" rows="4" defaultValue={data.detailedDescription} className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />

                                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded transition-colors mt-2">
                                                Edit Idea
                                            </button>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
    );
};

export default MyideaFunction;