import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import VolunteerNeeds from "../components/VolunteerNeeds";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import TwoExtraSection from "../components/TwoExtraSection";


const Home = () => {
    const services = useLoaderData();
    console.log(services);

    const [text_1] = useTypewriter({
        words: ['Volunteer Needs Now', 'Section!'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const [text_2] = useTypewriter({
        words: ['Two Extra', 'Sections!'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <div>
            <Carousel />
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5 mt-7">
                <span className="text-2xl font-bold">{text_1}</span>
                <Cursor cursorColor='red' />
            </div>
            <VolunteerNeeds services={services} />
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5">
                <span className="text-2xl font-bold">{text_2}</span>
                <Cursor cursorColor='red' />
            </div>
            <TwoExtraSection />
        </div>
    );
};

export default Home;