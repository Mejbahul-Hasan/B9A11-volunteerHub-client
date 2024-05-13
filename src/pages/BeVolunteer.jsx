import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const BeVolunteer = () => {
    const { user } = useContext(AuthContext);
    const volunteerInfo = useLoaderData();
    const { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail } = volunteerInfo || {}

    const [text] = useTypewriter({
        words: ['Interested to Become Volunteer', 'Pls fill-up the form'],
        loop: 10,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    const handleRequest = async e => {
        // if(user?.email === organizerEmail) 
        //     alert('Action not permitted!');

        e.preventDefault()
        const form = e.target;
        const thumbnail = volunteerInfo.thumbnail;
        const postTitle = volunteerInfo.postTitle;
        const description = volunteerInfo.description;
        const category = volunteerInfo.category;
        const location = volunteerInfo.location;
        const volunteerNumber = volunteerInfo.volunteerNumber;
        const deadline = volunteerInfo.deadline;
        const organizerName = volunteerInfo.organizerName;
        const organizerEmail = volunteerInfo.organizerEmail;
        const volunteerName = user?.displayName;
        const volunteerEmail = user?.email;
        const suggestion = form.suggestion.value;
        const status = form.status.value;

        const beVolunteer = { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail, volunteerName, volunteerEmail, suggestion, status }
        form.reset();
        console.log(beVolunteer);

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/beVolunteer`, beVolunteer)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your volunteer request posted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (err) {
            console.log(err)
            console.log("Hi, i am error", err.message)
        }
    }

    return (
        <>
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5 my-7">
                <span className="text-2xl font-bold">{text}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card w-[600px] bg-base-100 shadow-xl">
                        <figure><img src={thumbnail} alt="volunteer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {category}
                            </h2>
                            <div className="badge badge-secondary">Deadline:{new Date(deadline).toLocaleDateString()}</div>
                            <div className="card-actions">
                                <div className="badge badge-outline"><IoLocationSharp />{location}</div> <br />
                            </div>
                            <p className="font-bold">{postTitle}</p>
                            <p>{description}</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">No. of Volunteers Needed:{volunteerNumber}</div>
                            </div>
                            <div className="card-actions">
                                <div className="badge badge-outline">Organizer Name:{organizerName}</div>
                            </div>
                            <div className="card-actions">
                                <div className="badge badge-outline">Organizer email:{organizerEmail}</div>
                            </div>

                        </div>
                    </div>


                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRequest} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Volunteer Name</span>
                                </label>
                                <input type="text" name="volunteerName" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Volunteer Email</span>
                                </label>
                                <input type="email" name="volunteerEmail" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Suggestion</span>
                                </label>
                                <input type="text" name="suggestion" placeholder="Editable" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input type="text" name="status" defaultValue={'Requested'} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeVolunteer;