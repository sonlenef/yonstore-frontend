import React, { Component } from 'react';
import '../../../css/menucontent.css';
import twitterIcon from '../../../icon/twitter.svg';
import instagramIcon from '../../../icon/instagram.svg';
import facebookIcon from '../../../icon/facebook.svg';
import skypeIcon from '../../../icon/skype.svg';

class MenuContent extends Component {
    render() {
        return (
            
            <div className="menu-list">
                <h1>YonStore</h1>
                <ul className="menu-main">
                    <li><a href="#secHead">Home</a></li>
                    <li><a>About</a></li>
                    <li><a href="#secStore">Store</a></li>
                    <li><a>Contacts</a></li>
                </ul>
                <div className="social-icon">
                    <div className="instagram-icon"><a href={"https://www.instagram.com/uih.it"} target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="icon"/></a></div>
                    <div className="skype-icon"><a href={"https://join.skype.com/VVQS926LRF1U"} target="_blank" rel="noopener noreferrer"><img src={skypeIcon} alt="icon"/></a></div>
                    <div className="facebook-icon"><a href={"https://www.facebook.com/lesonnnn"} target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="icon"/></a></div>
                    <div className="twitter-icon"><a href={"https://www.facebook.com/lesonnnn"} target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="icon"/></a></div>
                </div>
            </div>
            
        )
    }
}

export {MenuContent};