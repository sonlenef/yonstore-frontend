import React, { Component } from 'react';
import '../../css/home.css';
import Head from './HomeHead';

class Home extends Component {
    render() {
        return (

            <div className="home">
                <section>
                    <Head/>
                </section>
            </div>
        )
    }
}

export {Home};