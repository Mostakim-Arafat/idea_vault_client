import Image from "next/image";

const IdeaDetailCard= ({info}) => {
    return (
        <div className="w-11/12 mx-auto rounded-md border border-yellow-200">
            <div>
                <Image
                // info.imageUrl ||
                src='https://media.istockphoto.com/id/1414994965/vector/online-courses-symbols-chart-background.jpg?s=1024x1024&w=is&k=20&c=EEhbDqvupIPFMqD6FIK8jP9P8VQp9BsvBKwUHgjxXa0='
                alt = {info.title}
                width={200}
                height={200}
                />
            </div>
            <div className="text-center font-medium">
                <h1>Title : {info.title}</h1>
                <p>Short Description : {info.shortDescription}</p>
                <p>Budget : {info.estimatedBudget}</p>
            </div>
            <div>
                <p>Problem Statement</p>
                <p>{info.problemStatement}</p>
                <p>Proposed Solution</p>
                <p>{info.proposedSolution}</p>
            </div>
        </div>
    );
};

export default IdeaDetailCard;