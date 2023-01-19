import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/create';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (

    
    <Router>
          <div className="App">

            < Navbar />

          <div className="container">

            <Switch>

            <Route exact path= '/'>
            < Home />
            </Route>

            <Route path= '/create'> 
              < Create />
            </Route>

            </Switch>

          </div>
        
          </div>
    </Router>
    
    
  );
}

export default App;
