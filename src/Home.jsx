import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Blog 1",
            body: "This is blog 1",
            author: "Khaled" 
        },
        {
            id: 2,
            title: "Blog 2",
            body: "This is blog 2",
            author: "Yoshi"
        },
        {
            id: 3,
            title: "Blog 3",
            body: "This is blog 3",
            author: "Mario"
        },
        {
            id: 4,
            title: "Blog 4",
            body: "This is blog 4",
            author: "Mario"
        },
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!"/>
            <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title="Mario's Blogs!"/>
        </div>
     );
}
 
export default Home;