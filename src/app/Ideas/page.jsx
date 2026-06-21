import IdeaCard from "@/Components/ideaCard";

const Ideas = async () => {
    const getman = await fetch('http://localhost:5000/ideas')
    const data = await getman.json()
    console.log('total data', data)
    return (
        <div>
            <div className="flex items-center justify-between my-3 w-11/12 mx-auto">
                <div></div>
                <h1 className="text-2xl text-center font-serif ">All Ideas</h1>
                <div>
                    <details className="dropdown">
                        <summary className="btn text-lg btn-info m-1">Filter</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Tech</a></li>
                            <li><a>Health</a></li>
                            <li><a>AI</a></li>
                            <li><a>Education</a></li>
                            
                        </ul>
                    </details>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-3 w-11/12 mx-auto">
                {
                    data.map(i => <IdeaCard key={i._id} data={i}></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default Ideas;

