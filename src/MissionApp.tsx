import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MissionPage from './Components/MissionPage';
import ImageGallery from './Components/ImageGallery';

function MissionApp(){
    return(
        <>
                <NavBar/>
                <MissionPage/>
                <ImageGallery/>
                <Footer />
                </>
    )
}

export default MissionApp;