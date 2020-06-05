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
                    <li>Home</li>
                    <li>About</li>
                    <li>Store</li>
                    <li>Contacts</li>
                </ul>
                <div className="social-icon">
                    <div className="instagram-icon"><a href={"https://www.instagram.com/uih.it"} target="_blank"><img src={instagramIcon}/></a></div>
                    <div className="skype-icon"><a href={"https://join.skype.com/VVQS926LRF1U"} target="_blank"><img src={skypeIcon}/></a></div>
                    <div className="facebook-icon"><a href={"https://www.facebook.com/lesonnnn"} target="_blank"><img src={facebookIcon}/></a></div>
                    <div className="twitter-icon"><a href={"https://www.facebook.com/lesonnnn"} target="_blank"><img src={twitterIcon}/></a></div>
                </div>
            </div>
            
        )
    }
}

export {MenuContent};