import React, { Component } from 'react';
import '../../css/cart.css';
import cartIcon from '../../icon/shopping-bag.svg';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.cartButtonRef = React.createRef();
        this.cartContentRef = React.createRef();
    }
    hanldClick(status) {
        const cartButton = this.cartButtonRef.current;
        cartButton.classList.toggle('cart-show', status)
        cartButton.classList.toggle('cart-anim', !status)

        const cartContent = this.cartContentRef.current;
        cartContent.classList.toggle('cart-content-anim', !status)
    }
    render() {
        return (
            <div className="row">
                <div ref={this.cartButtonRef} className="cart">
                <div className="cart-button" onClick={() => this.hanldClick(true)}>
                    <img className="cart-icon" src={cartIcon} alt="cart"/>
                </div>
                <div ref={this.cartContentRef} className="cart-content" onClick={() => this.hanldClick(false)}>
                    
                </div>
                </div>
            </div>
        )
    }
}

export {Cart};