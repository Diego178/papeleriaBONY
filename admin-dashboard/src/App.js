import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if(window.localStorage.getItem('token')){
        setLogin(false);
        // window.location.reload();
    }
  })
  return (
    <div className="App">
      <Router>
        {/* {login ? <Navbar /> : <Login />} */}
        <Navbar />
          <Routes>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
