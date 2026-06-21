import IdeaCard from "./ideaCard";

const Trending = async() => {
    const allIdeas = await fetch(`http://localhost:5000/trends`)
    const Limited = await allIdeas.json()
    console.log(Limited)
    return (
        <div>
            <h1>Treanding Ideas</h1>
            {
                Limited.map( data => <IdeaCard key={data._id} data={data}></IdeaCard>)
            }
        </div>
    );
};

export default Trending;