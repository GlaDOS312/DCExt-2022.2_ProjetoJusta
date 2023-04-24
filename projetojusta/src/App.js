import './App.css';
import Navbar from '.Componentes/Navbar';
import { BrowserRouter as Router, stch, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                 <Navbar />
                 <Switch>
                    <Route path='/' />
                 </Switch>
            </Router>
           
        </div>
    )
}