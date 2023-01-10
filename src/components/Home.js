import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem, ipsum ...', author: 'kakashi', id: 1 },
        { title: 'My new article', body: 'Lorem, ipsum ...', author: 'naruto', id: 2 },
        { title: 'My new article 2023', body: 'Lorem, ipsum ...', author: 'obito', id: 3 }
    ])


    return (    
        <div className="home">
            {blogs.map((blog) => (  
                <div className="blog-details" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p>Written by the author : {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;

