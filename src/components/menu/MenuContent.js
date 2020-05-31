import React, { Component } from 'react';
import '../../css/menucontent.css'

class MenuContent extends Component {
    render() {
        return (
            
            <div className="menu-list">
                <h1>YonStore</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
            
        )
    }
}

export default MenuContent;