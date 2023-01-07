import './App.css';
import Navbar from './components/Navbar';

function App() {
const name = 'Yash Kaskar'
  return (
    <div className="App">

      <Navbar />




      <div className="container">
        <h1>Hello React</h1>
        <p>Building the Articles</p>
        <h2>{ name }</h2>
      </div>
    </div>
  );
}

export default App;
