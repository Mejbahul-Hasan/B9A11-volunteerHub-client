
const AddVolunteerPost = () => {
    return (
        <div className="bg-gray-200 rounded-2xl mt-8 text-center max-w-6xl mx-auto">
            <h1 className="text-3xl py-5">Please fill-up the following form:</h1>
            <form>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Name</span>
                        </div>
                        <input type="text" placeholder="Thumbnail/image URL of your volunteer service" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Organizer Email</span>
                        </div>
                        <input type="text" placeholder="Title of volunteer service" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Title</span>
                        </div>
                        <input type="text" placeholder="Title of volunteer service" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Post Description</span>
                        </div>
                        <input type="text" placeholder="Description of your service" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Location</span>
                        </div>
                        <input type="text" placeholder="Address of the service place" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Category</span>
                        </div>
                        <input type="text" placeholder="Healthcare/Education/Social Service/Animal Welfare" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <div className="lg:flex gap-5">
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">No. of Volunteers Needed</span>
                        </div>
                        <input type="text" placeholder="Number of Volunteers Needed to Accomplish the service" className="input input-bordered max-w-md" />
                    </label>
                    <label className="form-control w-full gap-2 m-5 md:w-1/2">
                        <div className="label">
                            <span className="label-text font-bold">Deadline</span>
                        </div>
                        <input type="text" placeholder="Healthcare/Education/Social Service/Animal Welfare" className="input input-bordered max-w-md" />
                    </label>
                </div>
                <label className="form-control w-full gap-2 m-5">
                        <div className="label">
                            <span className="label-text font-bold">Thumbnail</span>
                        </div>
                        <input type="text" placeholder="Thumbnail/image URL" className="input input-bordered max-w-md lg:max-w-5xl" />
                    </label>
                <button className="btn w-1/2 my-5">Add Post</button>
            </form>
        </div>
    );
};

export default AddVolunteerPost;