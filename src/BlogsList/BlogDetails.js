import { useHistory, useParams } from "react-router-dom";
import useFetch from './../components/useFetch';



const BlogDetails = () => {
  const { id } = useParams();
  const { data : blog, isPending, error } = useFetch('http://localhost:8080/blogs/'+ id)
  
  const history = useHistory()


  const handleClick = () => {
    fetch('http://localhost:8080/blogs/' + blog.id, {
      method: 'Delete'
    }).then(() => { 
      history.push('/')
    })
  }

  return (
      <div>  
      {isPending && <div> Loading..... </div>}
      {error && <div> {error} </div>}
      {blog && (  
        <article> 
          <h2 className="title">{blog.title}</h2>
          <p className="pauthor">Written by the author : <span>{blog.author}</span></p>
          <div> {blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
     </div>
  );
}
 
export default BlogDetails;