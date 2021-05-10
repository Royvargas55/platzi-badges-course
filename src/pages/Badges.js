import React from 'react';
import { Link } from 'react-router-dom';

// Componentes
import BadgesList from '../components/BadgesList'
import MiniLoader from '../components/MiniLoader';

// Styles and images
import confLogo from '../images/platziconf-logo.svg'
import './styles/Badges.css';

function Badges(props) {
    return (
        <>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="logo" />
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link className="btn btn-primary" to="/badges/new">New Badge</Link>
                </div>
            </div>

            <div className="Badges__list">
                <div className="Badges__container">
                    <BadgesList badges={props.data} />
                    {props.loading && (<MiniLoader />)}
                </div>
            </div>
        </>
    )
}

export default Badges;