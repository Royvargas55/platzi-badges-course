import React from 'react'

// Components
import logoTwitter from '../images/twitter-logo.png';
import Gravatar from './Gravatar';

// Styles
import './styles/BadgesList.css';

function BadgeListItem(props) {
    const badge = props.badge;
    return (
        <div className="BadgesListItem">
            <div>
                <Gravatar className="BadgesListItem__avatar" email={badge.email} />
            </div>
            <div>
                <h4>{badge.firstName} {badge.lastName}</h4>
                <div className="BadgesListItem__twitter" >
                    <div>
                        <img className="BadgesListItem__twitter--logo" src={logoTwitter} alt="Twitter logo"></img>
                    </div>
                    <div>
                        <p className="BadgesListItem__twitter--user">@{badge.twitter}</p>
                    </div>
                </div>
                <p className="font-weight-light">{badge.jobTitle}</p>
            </div>
        </div>
    )
}

export default BadgeListItem
