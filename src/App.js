
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './components/pages/Homepage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';




function App() {
  return (
    <Router>
        <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} /> 
        <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
    </Router>
   
  );
}

export default App;
