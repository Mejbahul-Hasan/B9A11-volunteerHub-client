import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AddVolunteerPost = () => {

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleFormSubmission = async e => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNumber = form.volunteerNumber.value;
        const deadline = startDate;
        const organizerName = user?.displayName;
        const organizerEmail = user?.email;
        const addVolunteer = { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail}
        form.reset();
        console.log(addVolunteer);

        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/addPosts`, addVolunteer)
            console.log(data)
        } catch (err) {
            console.log(err)
            console.log("Hi, i am error", err.message)
        }
    }

    

    return (
        <div className="bg-gray-200 rounded-2xl mt-8 text-center max-w-6xl mx-auto">
            <h1 className="text-3xl py-5">Please fill-up the following form:</h1>
            <form onSubmit={handleFormSubmission}>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Name</span>
                        </div>
                        <input type="text" name="organizerName" defaultValue={user?.displayName} placeholder="" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Email</span>
                        </div>
                        <input type="text" name="organizerEmail" defaultValue={user?.email} placeholder="" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Title</span>
                        </div>
                        <input type="text" name="title" placeholder="Title of volunteer service" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Description</span>
                        </div>
                        <input type="text" name="description" placeholder="Description of your service" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Location</span>
                        </div>
                        <input type="text" name="location" placeholder="Address of the service place" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="Healthcare/Education/Social Service/Animal Welfare" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">No. of Volunteers Needed</span>
                        </div>
                        <input type="text" name="volunteerNumber" placeholder="Number of Volunteers Needed to Accomplish the service" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2 items-start">
                        <div className="label">
                            <span className="label-text font-bold">Deadline</span>
                        </div>
                        <DatePicker className="border py-3 rounded-xl px-32" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                </div>
                <label className="form-control w-full gap-2 m-5">
                    <div className="label">
                        <span className="label-text font-bold">Thumbnail</span>
                    </div>
                    <input type="text" name="thumbnail" placeholder="Thumbnail/image URL" className="input input-bordered max-w-md lg:max-w-5xl" />
                </label>
                <button className="btn w-1/2 my-5">Add Post</button>
            </form>
        </div>
    );
};

export default AddVolunteerPost;