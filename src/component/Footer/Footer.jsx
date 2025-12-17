
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <>
            <div className="footer bg-nav py-5">
                <div className="me-4 container py-5">
                    <div className="row text-white">
                        <div className="col-sm-12 col-md-4">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <h3>AROUND THE WEB</h3>
                            <div className="social mx-5 py-1 d-flex  gap-1 ">
                               <FontAwesomeIcon icon={faFacebook}  className='border-1 rounded-circle border py-2 px-2'/>
                                <FontAwesomeIcon icon={faTwitter}  className='border-1 rounded-circle border py-2 px-2'/>
                                <FontAwesomeIcon icon={faLinkedinIn}  className='border-1 rounded-circle border py-2 px-2'/>
                                <FontAwesomeIcon icon={faGlobe} className='border-1 rounded-circle border py-2 px-2' />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright  ">
                <p className="py-3 text-white text-center m-0 bg-cp">Copyright © Your Website 2021</p>
            </div>
        </>
    )
}
