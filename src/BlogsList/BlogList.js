const BlogList = () => {
    return (    
        <div className="blog-list">
        {blogs.map((blog) => (  
                <div className="blog-details" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p>Written by the author : {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;