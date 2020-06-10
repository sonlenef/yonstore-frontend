import React, { Component } from 'react';
import '../../css/homebody.css'
import SlideBox from './slide-box/SlideBox'
import SlideBox1 from './slide-box/SlideBox1'

class HomeBody extends Component {
    render() {
        return (

            <div className="home-body">
                <div className="home-body-1"><SlideBox/></div>
                <div className="home-body-2"><SlideBox1/></div>
            </div>
        )
    }
}

export default HomeBody;