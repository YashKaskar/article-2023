import { useState } from "react";


const Home = () => {

    const [name, setName] = useState('Kakashi')
    
    const handleClick = () => {
        setName('Naruto');
    }

    return (    
        <div className="home">
            <h1>HomePage</h1>
            <p>{ name }</p>
            <button onClick={handleClick}>Click Me !!!!!</button>
        </div>
     );
}
 
export default Home;