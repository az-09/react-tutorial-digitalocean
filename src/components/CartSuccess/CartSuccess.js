import React from 'react';
import Alert from '../Alert/Alert';
import './CartSuccess.css';

export default function CartSucess(){
    return(
        <Alert title="Added to Cart" type="success">
            <div className="cart-success-wrapper">
                <h2>
                    You have added 3 itmes:
                </h2>
                <div className="item">
                    <div>Bananas</div>
                    <div>Qty: 2</div>
                </div>
                <div className="item">
                    <div>Lettuce</div>
                    <div>Qty: 1</div>
                </div>

            </div>
        </Alert>
    )
}