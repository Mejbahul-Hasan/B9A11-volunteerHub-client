import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/addPosts-email/${user?.email}`, {withCredentials: true});
            setMyPosts(data)
        }
        getData()
    }, [user, control]);

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/addPosts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            setControl(!control)
                        }
                    })
            }
        });
    }

    // try{
    //     const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/addPosts/${id}`)
    //     console.log(data)
    //     alert('Deleted successfully')
    // refresh ui
    //     getData()
    // } catch (err) {
    //     console.log(err.message)
    // }

    return (
        <>
            <div className="text-center font-bold text-xl my-5">
                <Bounce>
                    <h1>My Posted Volunteer Services Available: {myPosts.length}</h1>
                </Bounce>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Post Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Volunteers Needed (No.)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myPosts.map(post => <tr key={post._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={post?.thumbnail} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{post?.postTitle}</td>
                                <td>{post?.category}</td>
                                <td>{new Date(post?.deadline).toLocaleDateString()}</td>
                                <td>{post?.volunteerNumber}</td>
                                <th>
                                    <Link to={`/update/${post._id}`}><button className="btn btn-xs btn-outline btn-info">Update</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(post._id)} className="btn btn-xs btn-outline btn-warning">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyVolunteerPost;