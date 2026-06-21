import IdeaCard from "./ideaCard";

const Trending = async () => {
    const allIdeas = await fetch(`http://localhost:5000/trends`)
    const Limited = await allIdeas.json()
    console.log(Limited)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-muted">Treanding Ideas</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-11/12 mx-auto">
                {
                    Limited.map(data => <IdeaCard key={data._id} data={data}></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default Trending;