import { useState } from "react";
import BlogList from './../BlogsList/BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem, ipsum ...', author: 'kakashi', id: 1 },
        { title: 'My new article', body: 'Lorem, ipsum ...', author: 'naruto', id: 2 },
        { title: 'My new article 2023', body: 'Lorem, ipsum ...', author: 'obito', id: 3 }
    ])


    return (    
        <div className="home">
            < BlogList />
        </div>
     );
}
 
export default Home;
