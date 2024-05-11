import { useLoaderData } from "react-router-dom";

const DetailsVolunteer = () => {
    const volunteerDetail = useLoaderData();
    const { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail} = volunteerDetail || {}

    return (
        <div>
            <h1>Volunteer Details is coming</h1>
        </div>
    );
};

export default DetailsVolunteer;