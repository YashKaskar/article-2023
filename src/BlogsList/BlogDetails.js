import { useParams } from "react-router-dom";
import useFetch from './../components/useFetch';



const BlogDetails = () => {
  const { id } = useParams();
  const { data : blog, isPending, error } = useFetch('http://localhost:8080/blogs/'+ id)
   
  

  return (
      <div>  
      {isPending && <div> Loading..... </div>}
      {error && <div> {error} </div>}
      {blog && (  
        <article> 
          <h2 className="title">{blog.title}</h2>
          <p className="pauthor">Written by the author : <span>{blog.author}</span></p>
          <div> { blog.body }</div>
        </article>
      )}
     </div>
  );
}
 
export default BlogDetails;