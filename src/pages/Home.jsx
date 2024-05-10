import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import VolunteerNeeds from "../components/VolunteerNeeds";

const Home = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div>
           <Carousel/> 
           <VolunteerNeeds services={services} />
        </div>
    );
};

export default Home;