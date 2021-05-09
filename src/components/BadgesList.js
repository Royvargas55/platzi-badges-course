import React, { Component } from 'react'
import logoTwitter from '../images/twitter-logo.png';
import './styles/BadgesList.css';
export class BadgesList extends Component {
    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <div className="BadgesListItem"> 
                                    <div>
                                        <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Profile"></img>
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
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgesList
