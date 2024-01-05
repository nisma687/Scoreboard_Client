import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import News from "../../components/News/News";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import HighlightNews from "./HighlightNews";


const Home = () => {
    return (
         // grid 
        // grid-cols-1
        // md:grid-cols-2
        // lg:grid-cols-2 gap-2
        <div className="mt-2">
            <h3 className="text-2xl
            text-center
             font-semibold mt-2">
                Welcome to Cricket Live Score Website
             </h3>
             <div className="my-3">
                <HighlightNews/>
             </div>
            <div className="
            flex flex-col md:flex-row gap-4
            ">
                <div className="md:w-2/4 w-full">
                    <News/>
                </div>
                <div className="md:w-3/4 w-full">
                <ScoreBoard/>
                </div>
                <div className="md:w-1/2 w-full">
                    <h3 className="mt-2
                    text-center
                     text-violet-900 text-xl font-bold">Featured Videos</h3>
                    <FeaturedVideo  />
                </div>
            </div>
        </div>
    );
};

export default Home;