import './App.css';
import Navbar from '.Componentes/Navbar';
import { BrowserRouter as Router, switch, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                 <Navbar />
                 <switch>
                    <Route path='/' />
                 </switch>
            </Router>
           
        </div>
    )
}