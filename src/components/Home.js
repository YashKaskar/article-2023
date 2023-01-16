import { useState, useEffect } from "react";
import BlogList from './../BlogsList/BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8080/blogs')
        .then(res => { return res.json() })  //to get res from db.json file
            .then(data => {
                setBlogs(data);
                setIsPending(false)
            })   //having data from db.json file
    }, []);


    return (    
        <div className="home">
            {isPending && <div> Loading..............</div>}
            { blogs && < BlogList blogs={blogs} title='All Articles'  />}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'obito') } title = 'Obito Blogs' /> Reusing Components */}
        </div>
     );
}
 
export default Home;
