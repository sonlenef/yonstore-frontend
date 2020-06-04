import React, { Component } from 'react';
import '../../css/menu.css';
import menuIcon from '../../icon/align-center.svg';
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
                    <ul className="social-title">
                        <li><span>Social</span></li>
                        <li><span>Network</span></li>
                    </ul>
                    <ul className="social-icon">
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
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