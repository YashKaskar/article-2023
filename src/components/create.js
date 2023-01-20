import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {


    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const history = useHistory()

    const handleSubmit = (e) => {   
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8080/blogs/',{
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => { 
            console.log('new blog added');
            history.push('/')
        })
        
    }
    
    
    return (    
        <div className="create">
            <h2>Create your articles</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Article title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>Content for article </label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <label>Written by the author </label>
            <input type="text" required
            value={author}
            onChange={(e) => setAuthor(e.target.value)} />
            
                <button>Add article</button>
                
            </form>
        </div>
     );
}
 
export default Create;




