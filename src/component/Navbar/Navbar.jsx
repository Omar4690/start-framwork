import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar sticky-top start-0 end-0 bg-nav navbar-expand-lg transition-all ${isScrolling ? 'py-1' : 'py-4'}`}>
        <div className="container">
          <Link className="navbar-brand text-white fs-1 fw-bold " to="/">
            Start Framwork
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold text-uppercase p-2" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold text-uppercase p-2" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold text-uppercase p-2" to="/contact">
                  Contact
                </NavLink>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
