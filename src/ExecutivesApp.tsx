import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import ExecPage from './Components/ExecPage';
import ExecLanding from './Components/ExecLanding';
import Footer from './Components/Footer';

function ExecutivesApp(){
    return(
        <>
        <NavBar/>
        <ExecLanding />
        <ExecPage /> 
        <Footer/>
        </>
    )
}

export default ExecutivesApp;