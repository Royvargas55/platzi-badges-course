import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import './styles/NotFound.css';

//Images
import Astronauts from "../images/astronauts.svg";
import logoConf from "../images/platziconf-logo.svg";

function NotFound (){
        return (
            <React.Fragment>
                <div className="not-found">
                    <div className="row">
                        <div className="not-found__logo col-6" >
                            <img
                            src={logoConf} 
                            alt="Logo"/>
                            <h1>PRINT YOUR BADGES</h1>
                            <p>The easiest way to manage your <br/>conference</p>
                            <Link className="btn btn-primary" to="/badges">Start now</Link>
                        </div>
                        <div className="col-6">
                            <img
                            src={Astronauts} 
                            alt="Logo"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default NotFound
