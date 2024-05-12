import { Link } from "react-router-dom";

const VolunteerNeeds = ({ services }) => {

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    services.map(service => (
                        <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={service.Thumbnail} alt="volunteer" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {service.Category}
                                    <div className="badge badge-secondary">Deadline:{service.Deadline}</div>
                                </h2>
                                <p>{service.PostTitle}</p>
                                <div className="">
                                    <Link to={'/need-volunteer'}>
                                        <button className="btn btn-outline w-full btn-sm">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center my-8">
                <Link to={'/need-volunteer'}>
                    <button className="btn btn-wide btn-outline">See All</button>
                </Link>
            </div>
        </>
    );
};

export default VolunteerNeeds;