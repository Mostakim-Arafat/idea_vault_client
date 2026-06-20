import IdeaCard from "@/Components/ideaCard";

const Ideas = async () => {
    const getman = await fetch('http://localhost:5000/ideas')
    const data = await getman.json()
    console.log('total data', data)
    return (
        <div>
            ideas
            {
                data.map( i => <IdeaCard key={i._id} data={i}></IdeaCard>)
            }
        </div>
    );
};

export default Ideas;

