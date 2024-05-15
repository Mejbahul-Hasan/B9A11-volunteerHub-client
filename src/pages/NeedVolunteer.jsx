import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteer = () => {

    const allPosts = useLoaderData();
    const [posts, setAllPost] = useState(allPosts);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/search?search=${search}`)
            .then(res => res.json())
            .then(data => setAllPost(data));
    }, [search]);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
    }
    console.log(search);

    return (
        <>
            <div className="bg-purple-100 h-20 rounded-xl text-center py-5 mt-7">
                <h2 className="text-2xl font-bold">Volunteers Required</h2>
            </div>

            <form onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2 w-96 my-5 mx-auto ">
                    <input type="text" name="search" className="grow" placeholder="Search by 'Post Title'" />
                    <input type="submit" value="Search" className="btn btn-sm btn-outline" />
                </label>
            </form>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    posts.map(post => (
                        <div key={post._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={post.thumbnail} alt="volunteer" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {post.category}
                                    <div className="badge badge-secondary">Deadline:{new Date(post.deadline).toLocaleDateString()}</div>
                                </h2>
                                <p className="font-semibold">Post Title:{post.postTitle}</p>
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