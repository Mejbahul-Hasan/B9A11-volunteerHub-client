import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Bounce } from "react-awesome-reveal";
import Swal from 'sweetalert2'

const MyVolunteerRequest = () => {
    const { user } = useContext(AuthContext);
    const [myRequests, setMyRequests] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/beVolunteer-email/${user?.email}`, {withCredentials: true});
            setMyRequests(data)
        }
        getData()
    }, [user, control]);

    // if (myRequests.length == 0) Swal.fire("You have not posted any request!");


    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/beVolunteer/${id}`, {
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

    return (
        <>
            <div className="text-center font-bold text-xl my-5">
                <Bounce>
                    <h1>My Requested Volunteer Services Available: {myRequests.length}</h1>
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
                            <th>Location</th>
                            <th>Volunteers Needed (No.)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myRequests.map(request => <tr key={request._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={request?.thumbnail} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{request?.postTitle}</td>
                                <td>{request?.category}</td>
                                <td>{request?.location}</td>
                                <td>{request?.volunteerNumber}</td>
                                <th>
                                    <button onClick={() => handleDelete(request._id)} className="btn btn-xs btn-outline btn-warning">Cancel</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyVolunteerRequest;