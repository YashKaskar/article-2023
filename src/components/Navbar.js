import { Link } from "react-router-dom";

const Navbar = () => {
    return (    
        <nav className="navbar">   
        <h1>Articles 2023</h1>
        <div className="anchor">
        <Link to ="/" id="anchor">Home</Link>
          <Link to ="/create" id="anchor">New Article</Link>
        </div>  
        </nav>
     );
}
 
export default Navbar;

