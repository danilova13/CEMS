import './App.css';
import Appbar from './components/Appbar';
// import User from './components/User';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route path="/" element={ <Homepage/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/admin" element={ <Admin/>} />

      </Routes>
    </div>
  );
}

export default App;
 