import React from 'react';

// Components
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

// Styles
import './styles/BadgeEdit.css';

function BadgeEdit(props) {
    return (
        <>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={props.form.firstName || "FIRST_NAME"}
                                lastName={props.form.lastName || "LAST_NAME"}
                                jobTitle={props.form.jobTitle || "JOB_TITLE"}
                                email={props.form.email || "EMAIL"}
                                twitter={props.form.twitter || "TWITTER"}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                attendant="Edit Attendant"
                                onChange={props.handleChange}
                                onSubmit={props.handleSubmit}
                                formValues={props.form}
                                error={props.error} />
                        </div>
                    </div>
                </div>
            </>
    )
}

export default BadgeEdit;