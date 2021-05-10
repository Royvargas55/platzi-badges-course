import React from "react";
import { Link } from "react-router-dom";

// Styles
import './styles/BadgeDetails.css';
import logoConf from '../images/platziconf-logo.svg';

// Components
import Badge from '../components/Badge';
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
    return (
        <>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={logoConf} alt="logo" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge {...props.badge} />
                    </div>
                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <Link
                                className="btn btn-primary mb-4"
                                to={`/badges/${props.badge.id}/edit`}>Edit Badge</Link>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} type="button" className="btn btn-danger">Delete Badge</button>
                            <DeleteBadgeModal
                            onDeleteBadge={props.onDeleteBadge} 
                            isOpen={props.modalIsOpen}
                            onClose={props.onCloseModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeDetails;