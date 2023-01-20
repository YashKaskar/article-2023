const Create = () => {
    return (    
        <div className="create">
            <h2>Create your articles</h2>
            
            <form>
                <label>Article title</label>
                <input type="text" required />

                <label>Content for article </label>
                <textarea required></textarea>

                <label>Written by the author </label>
                <textarea required></textarea>

                <button>Add article</button>
                
            </form>
        </div>
     );
}
 
export default Create;