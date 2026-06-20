
import { getUserData } from "@/lib/crud";
import IdeaCard from "@/Components/ideaCard";
import MyideaFunction from "@/Components/MyideaFunction";


const MyIdea = async() => {
    const functionData = await getUserData()
    const userID = functionData.id
    console.log(userID)
    const data1 = await fetch('http://localhost:5000/ideas')
    const data = await data1.json()
    const selected_data = []
    
    for( const i of data){
        if( i.userID === userID){
            selected_data.push(i)
        }
    }
    console.log(selected_data)

    return (
        <div>
            my idea
            {
                selected_data.map( data => <div key={data._id} className="flex"> 
                <IdeaCard data={data}></IdeaCard>
                <MyideaFunction data={data}></MyideaFunction>
                </div>)
            }
        </div>
    );
};

export default MyIdea;