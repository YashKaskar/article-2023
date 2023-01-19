import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (

    <Router>  
      <div className="App">

< Navbar />

<div className="container">
  
< Home />
  
</div>

</div>
    </Router>
    
  );
}

export default App;
