import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteer = () => {

    const allPosts = useLoaderData();

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    allPosts.map(post => (
                        <div key={post._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={post.thumbnail} alt="volunteer" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {post.category}
                                    <div className="badge badge-secondary">Deadline:{new Date(post.deadline).toLocaleDateString()}</div>
                                </h2>
                                <p>{post.postTitle}</p>
                                <Link to={`/details-volunteer/${post._id}`}>
                                    <button className="btn btn-outline w-full btn-sm">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default NeedVolunteer;