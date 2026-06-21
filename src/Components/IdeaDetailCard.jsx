import Image from "next/image";

const IdeaDetailCard= ({info}) => {
    return (
       
        <div className="w-11/12 max-w-3xl mx-auto rounded-2xl border border-base-200 bg-base-100 shadow-xl overflow-hidden my-6 transition-all duration-300">
           
            <div className="bg-base-200/40 p-6 flex justify-center items-center border-b border-base-200">
                <Image
               
                src={info.imageUrl}
                alt = {info.title}
                width={200}
                height={200}
               
                className="rounded-xl shadow-md object-cover"
                />
            </div>
            
            <div className="text-center font-medium p-6 space-y-2 border-b border-base-200 bg-base-50/50">
                <h1 className="text-xl md:text-2xl font-black text-neutral tracking-tight">Title : {info.title}</h1>
                <p className="text-sm md:text-base opacity-75 max-w-xl mx-auto">Short Description : {info.shortDescription}</p>
                <p className="text-sm font-mono inline-block bg-success/10 text-success px-3 py-1 rounded-full font-bold mt-1">Budget : {info.estimatedBudget}</p>
            </div>
           
            <div className="p-6 md:p-8 space-y-4 text-left">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-error mb-1">Problem Statement</p>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed bg-base-200/40 p-4 rounded-xl border border-base-200/50 font-medium">{info.problemStatement}</p>
                </div>
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">Proposed Solution</p>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10 font-medium">{info.proposedSolution}</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaDetailCard;