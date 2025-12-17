import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact min-vh-100">
        <div className="container py-5 t-port">
          <h1 className="text-uppercase pt-2 text-center fw-bold m-0">Contact section</h1>
          <div className="icon2 d-flex justify-content-center align-items-center py-3" >
            <FontAwesomeIcon icon={faStar} className="px-3  " />
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 col-lg-6">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom py-3 shadow-none"
                    placeholder="userName"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom py-3 shadow-none"
                    placeholder="userAge"
                    min="0"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom py-3 shadow-none"
                    placeholder="userEmail"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom py-3 shadow-none"
                    placeholder="userPassword"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-info text-white px-3 py-2 mt-3 button-form"
                >
                  send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>




      <Footer />
    </>
  )
}
