import React, { Component } from 'react';
import '../../css/homehead.css'

class HomeHead extends Component {
    render() {
        return (

            <div className="home-head">
                <div className="banner-left"></div>
                <div className="banner-right">
                    <div className="banner-right-l1"></div>
                    <div className="banner-right-r1"></div>
                    <div className="banner-right-l2"></div>
                    <div className="banner-right-r2"></div>
                </div>
            </div>
        )
    }
}

export default HomeHead;