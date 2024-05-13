import { Link, useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { useTypewriter, Cursor } from 'react-simple-typewriter'



const DetailsVolunteer = () => {
    const volunteerDetail = useLoaderData();
    const { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail, _id } = volunteerDetail || {}

    const [text] = useTypewriter({
        words: ['If you are interested in this post', 'Pls press the Button below'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <>
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5 my-7">
                <span className="text-2xl font-bold">{text}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className="hero rounded-2xl bg-base-200 mt-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{postTitle}</h1>
                        <h1 className="text-md font-bold">Category: {category}</h1>
                        <div className="lg:flex lg:gap-5">
                            <h2 className="card-title">
                                <IoLocationSharp />
                                <div className="badge badge-secondary">{location}</div>
                            </h2>
                            <h2 className="card-title my-2">
                                <div className="badge badge-secondary">Deadline:{new Date(deadline).toLocaleDateString()}</div>
                            </h2>
                        </div>
                        <p className="py-6 text-xl">{description}</p>
                        <div>
                            <h2 className="card-title">
                                Organizer Name:
                                <div className="badge badge-outline">{organizerName}</div>
                            </h2>
                            <h2 className="card-title">
                                Organizer Email:
                                <div className="badge badge-outline">{organizerEmail}</div>
                            </h2>
                            <h2 className="card-title">
                                No. of Volunteers Needed:
                                <div className="badge badge-outline">{volunteerNumber}</div>
                            </h2>
                            <div className="card-actions justify-end">
                                <Link to={`/be-volunteer/${_id}`}>
                                    <button className="btn btn-outline btn-wide">Be a Volunteer</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsVolunteer;