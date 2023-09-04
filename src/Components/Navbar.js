import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`} style={{ boxShadow : " 2px 2px 10px rgba(0, 0, 0, 0.15)" }} >
                    <div className="container-fluid">
                     {/* All <a> is replaced by <Link> and 'href' with 'to' while using Bootstrap in react router */}
                        <Link className="navbar-brand" to="#" style={{ margin: "10px" }}>Mukhya Samachar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link " to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/technology">Technology</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/entertainment">Entertainment</Link></li>
                            </ul>
                            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-2`}> 
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar

