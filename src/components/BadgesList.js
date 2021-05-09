import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logoTwitter from '../images/twitter-logo.png';
import './styles/BadgesList.css';
export class BadgesList extends Component {
    render() {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            )
        }
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
