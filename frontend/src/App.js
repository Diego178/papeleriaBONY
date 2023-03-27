import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Inicio from './pages/Inicio';
import Ofertas from './pages/Ofertas';
import Mayoreo from './pages/Mayoreo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path='/Inicio' exact component={Inicio} />
            <Route path='/Ofertas' component={Ofertas} />
            <Route path='/Mayoreo' omponent={Mayoreo} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
