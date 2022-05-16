import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:800/blogs')
        .then((resposne) => resposne.json())
        .then((data) => {setBlogs(data); setIsLoading(false);})
    }, [])

    const template = (
        <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
        </div>
    )
    return ( 
        
        <div className="home">
            {/* first "blogs" is the prop name, {blogs} is the data we pass in */}
            {isLoading && template}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
     );
}
 
export default Home;