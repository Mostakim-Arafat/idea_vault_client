'use client'
import { ToastContainer, toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
const AddIdea = () => {
     const { data: session } = authClient.useSession()
     const UserId = session?.user?.id 
    //  console.log(UserId)
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        data.userID = UserId
        console.log(data);
       
        const postman =  await fetch('http://localhost:5000/ideas',
            {
                method : 'POST',
                headers : {'content-type' : 'application/json'},
                body : JSON.stringify(data)
            }
        )
        const res = await postman.json() 
        if(res.insertedId){
            toast.success('Idea Add success')
        }
        console.log(res)
    }
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-md my-10">
                <h1>add ideas</h1>
                <h2 className="text-xl font-bold mb-6 text-blue-400">Submit Your Idea</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <input type="text" name="title" required placeholder="Idea Title *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                    <input type="text" name="shortDescription" required placeholder="Short Description *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="category" required defaultValue="" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white">
                            <option value="" disabled>Select Category *</option>
                            <option value="Tech">Tech</option>
                            <option value="Health">Health</option>
                            <option value="AI">AI</option>
                            <option value="Education">Education</option>
                        </select>
                        <input type="number" name="estimatedBudget" placeholder="Estimated Budget" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="tags" placeholder="Tags (comma separated)" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                        <input type="url" name="imageUrl" required placeholder="Image URL *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />
                    </div>

                    <input type="text" name="targetAudience" required placeholder="Target Audience *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white" />

                    <textarea name="problemStatement" required rows="2" placeholder="Problem Statement *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />
                    <textarea name="proposedSolution" required rows="2" placeholder="Proposed Solution *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />
                    <textarea name="detailedDescription" required rows="4" placeholder="Detailed Description *" className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white resize-none" />

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded transition-colors mt-2">
                        Save Idea
                    </button>
                </form>
                <ToastContainer/>
            </div>
        </div>

    );
};

export default AddIdea;

// Idea Title
// Short Description
// Detailed Description
// Category (Dropdown: Tech, Health, AI, Education, etc.)
// Tags (optional)
// ImageURL
// Estimated Budget (optional)
// Target Audience
// Problem Statement
// Proposed Solution
