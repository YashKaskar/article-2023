import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
const name = 'Yash Kaskar'
  return (

    <div className="App">

      < Navbar />

      <div className="container">
        
      < Home />
        
      </div>
      
    </div>
  );
}

export default App;
