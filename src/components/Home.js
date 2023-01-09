import { useState } from "react";


const Home = () => {

    const [name, setName] = useState('Kakashi');
    const [age, setAge] = useState(30);
    
    const handleClick = () => {
        setName('Naruto');
        setAge(25);

    }

    return (    
        <div className="home">
            <h1>HomePage</h1>
            <p>{name} is { age } year old</p>
            <button onClick={handleClick}>Click Me !!!!!</button>
        </div>
     );
}
 
export default Home;