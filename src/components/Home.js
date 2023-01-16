import { useState, useEffect } from "react";
import BlogList from './../BlogsList/BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null)


    const handleDelete = (id) => {  
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    useEffect(() => {
        fetch('http://localhost:8080/blogs')
        .then(res => { return res.json() })
        .then(data => {setBlogs(data)})
    }, []);


    return (    
        <div className="home">
            { blogs && < BlogList blogs={blogs} title='All Articles' handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'obito') } title = 'Obito Blogs' /> Reusing Components */}
        </div>
     );
}
 
export default Home;
