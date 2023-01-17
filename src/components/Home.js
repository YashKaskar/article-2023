import BlogList from './../BlogsList/BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { data : blogs, isPending, error } = useFetch('http://localhost:8080/blogs')


    return (    
        <div className="home">
            {error && <div>{ error } </div>}
            {isPending && <div> Loading..............</div>}
            { blogs && < BlogList blogs={blogs} title='All Articles'  />}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'obito') } title = 'Obito Blogs' /> Reusing Components */}
        </div>
     );
}
 
export default Home;
