
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import HomeLogo from "../../assets/images/Home.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <>
    <Navbar/>

      <div className="home bg-main min-vh-85 pt-5">
        <div className="container">
          <div className="content d-flex flex-column justify-content-center align-items-center text-white">
            <img src={HomeLogo} alt="Home logo" className="w-25 py-3" />
            <h1 className="text-uppercase fw-bold">start Framework</h1>
            <div className="icon d-flex justify-content-center align-items-center  py-3">
             <FontAwesomeIcon icon={faStar} className="px-3" />       
               </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>



     <Footer/>

    </>
  )
}

