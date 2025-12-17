import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';


export default function About() {
    return (
        <>
        <Navbar/>
          

            <div className="about bg-main min-vh-85 pt-120">
                <div className="container me-5 text-white  d-flex flex-column justify-content-center align-items-center py-5 ">
                    
                        <h1 className="fw-bold m-0 text-uppercase text-center">about component</h1>
                        <div className="icon d-flex justify-content-center align-items-center  py-3">
                            <FontAwesomeIcon icon={faStar} className="px-3" />
                        </div>
                    
                    <div className="d-flex">
                        
                            <p className="px-1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        
                             <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                        
                    </div>
                </div>
            </div>

           <Footer/>
        </>
    )
}
