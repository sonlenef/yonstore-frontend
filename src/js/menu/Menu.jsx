import React, { Component } from 'react';
import '../../css/menu.css';
import menuIcon from '../../icon/align-center.svg';
import twitterIcon from '../../icon/twitter.svg';
import instagramIcon from '../../icon/instagram.svg';
import facebookIcon from '../../icon/facebook.svg';
import skypeIcon from '../../icon/skype.svg';
import {MenuContent} from './menucontent/index';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.menuButtonRef = React.createRef();
        this.menuContentRef = React.createRef();
    }
    hanldClick(status) {
        const menuButton = this.menuButtonRef.current;
        menuButton.classList.toggle('menu-show', status)
        menuButton.classList.toggle('menu-anim', !status)

        const menuContent = this.menuContentRef.current;
        menuContent.classList.toggle('menu-content-anim', !status)
    }
    render() {
        return (
            <div ref={this.menuButtonRef} className="menu">
                <div className="menu-button" onClick={() => this.hanldClick(true)}>
                    <ul className="yon">
                        <li><span>Y</span></li>
                        <li><span>o</span></li>
                        <li><span>n</span></li>
                    </ul>
                    <ul className="store">
                        <li><span>S</span></li>
                        <li><span>t</span></li>
                        <li><span>o</span></li>
                        <li><span>r</span></li>
                        <li><span>e</span></li>
                    </ul>
                    <img className="menu-icon" src={menuIcon} alt="menu"/>
                    <div className="social-title">
                        <span>Social Network</span>
                    </div>
                    <ul className="social-icon">
                        <li><img src={twitterIcon} alt="icon"/></li>
                        <li><img src={facebookIcon} alt="icon"/></li>
                        <li><img src={skypeIcon} alt="icon"/></li>
                        <li><img src={instagramIcon} alt="icon"/></li>
                    </ul>
                </div>
                <div ref={this.menuContentRef} className="menu-content" id="menu-content" onClick={() => this.hanldClick(false)}>
                    <div className="menu-img-background"></div>
                    <MenuContent/>
                </div>
            </div>
        )
    }
}

export {Menu};