import Trending from "@/Components/Trending";
import Banner from "@/Components/Banner";
import HomeSec1 from "@/Components/HomeSec1";
import HomeSec2 from "@/Components/HomeSec2";

const Home = () => {
    return (
        <div className="space-y-2">
         
            <Banner></Banner>
            <Trending></Trending>
            <HomeSec1></HomeSec1>
            <HomeSec2></HomeSec2>
        </div>
    );
};

export default Home;