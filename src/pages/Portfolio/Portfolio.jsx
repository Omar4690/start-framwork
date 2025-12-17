import { useState } from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/images1.png";
import img2 from "../../assets/images/images2.png";
import img3 from "../../assets/images/images3.png";

export default function Portfolio() {

    const [selectedImg, setSelectedImg] = useState(null);

    const images = [img1, img2, img3, img1, img2, img3];

    return (
        <>
            <Navbar />
            <div className="portfolio min-vh-100 py-5">
                <div className="container text-center">
                    <h1 className="text-uppercase fw-bold m-0 t-port">portfolio component</h1>
                    <div className="icon2 d-flex justify-content-center align-items-center py-3" >
                        <FontAwesomeIcon icon={faStar} className="px-3 " />
                    </div>

                    <div className="row g-5">
                        {images.map((img, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="rounded-3 overflow-hidden position-relative group"
                                    onClick={() => setSelectedImg(img)}>
                                    <img src={img} className="w-100" alt="portfolio" />
                                    <div className="overlay position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faPlus} className="text-white fa-6x" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

           
            {selectedImg && (
                <div
                    className="model-container position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    onClick={() => setSelectedImg(null)} 
                >
                    <div className="position-relative seleted" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImg} alt="selected" className="rounded-3" />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}