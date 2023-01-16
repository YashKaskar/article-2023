import { useState, useEffect } from "react";
import BlogList from './../BlogsList/BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem, ipsum ...', author: 'kakashi', id: 1 },
        { title: 'My new article', body: 'Lorem, ipsum ...', author: 'naruto', id: 2 },
        { title: 'My new article 2023', body: 'Lorem, ipsum ...', author: 'obito', id: 3 }
    ])


    const handleDelete = (id) => {  
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    useEffect(() => {
        console.log('useffect');
    }, []);


    return (    
        <div className="home">
            < BlogList blogs={blogs} title='All Articles' handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'obito') } title = 'Obito Blogs' /> Reusing Components */}
        </div>
     );
}
 
export default Home;
