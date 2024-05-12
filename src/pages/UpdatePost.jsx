import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import toast from "react-hot-toast";

const UpdatePost = () => {
    const { user } = useContext(AuthContext);
    const existingPost = useLoaderData();
    const { _id, thumbnail, postTitle, description, category, location, volunteerNumber, deadline } = existingPost || {};
    const [startDate, setStartDate] = useState(new Date(deadline) || new Date());
    const navigate = useNavigate();

    const handleUpdate = async e => {
        e.preventDefault();
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
        const updatePost = { thumbnail, postTitle, description, category, location, volunteerNumber, deadline, organizerName, organizerEmail };
        form.reset();
        console.log(updatePost);

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/addPosts/${_id}`, updatePost)
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your post updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate("/my-volunteer-post")
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    return (
        <div className="bg-gray-200 rounded-2xl mt-8 text-center max-w-6xl mx-auto">
            <h1 className="text-3xl py-5">Please fill-up the following form:</h1>
            <form onSubmit={handleUpdate}>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Name</span>
                        </div>
                        <input type="text" name="organizerName" defaultValue={user?.displayName} className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Email</span>
                        </div>
                        <input type="text" name="organizerEmail" defaultValue={user?.email} className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Title</span>
                        </div>
                        <input type="text" name="title" defaultValue={postTitle} className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Description</span>
                        </div>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Location</span>
                        </div>
                        <input type="text" name="location" defaultValue={location} className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">No. of Volunteers Needed</span>
                        </div>
                        <input type="text" name="volunteerNumber" defaultValue={volunteerNumber} className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2 items-start">
                        <div className="label">
                            <span className="label-text font-bold">Deadline</span>
                        </div>
                        <ReactDatePicker className="border py-3 rounded-xl px-32" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </label>
                </div>
                <label className="form-control w-full gap-2 m-5">
                    <div className="label">
                        <span className="label-text font-bold">Thumbnail</span>
                    </div>
                    <input type="text" name="thumbnail" defaultValue={thumbnail} className="input input-bordered max-w-md lg:max-w-5xl" />
                </label>
                <button className="btn btn-outline w-1/2 my-5">Update Post</button>
            </form>
        </div>
    );
};

export default UpdatePost;