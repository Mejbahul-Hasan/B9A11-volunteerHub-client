import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const MyVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/addPosts-email/${user?.email}`);
            setMyPosts(data)
        }
        getData()
    }, [user])

    console.log(myPosts)

    return (
        <div>
            My post is coming
        </div>
    );
};

export default MyVolunteerPost;