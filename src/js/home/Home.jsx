import React, { Component } from 'react';
import '../../css/home.css';
import Head from './HomeHead';
import Body from './HomeBody';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <section id="secHome">
                    <Head/>
                </section>
                <section id="secHead">
                </section>
                <section id="secStore">
                    <Body/>
                </section>
            </div>
        )
    }
}

export {Home};