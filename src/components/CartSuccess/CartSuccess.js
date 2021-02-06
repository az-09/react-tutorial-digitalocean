import React from 'react';
import Alert from '../Alert/Alert';
// import './CartSuccess.css';

export default function CartSucess(){
    const styles={
        header:{
            width: '100%'
        },
        item:{
            margin: 20
        },
        wrapper:{
            borderTop: 'black solid 1px',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }
    return(
        <Alert title="Added to Cart" type="success">
            <div style={styles.wrapper}>
                <h2 style={styles.header}>
                    You have added 3 itmes:
                </h2>
                <div style={styles.item}>
                    <div>Bananas</div>
                    <div>Qty: 2</div>
                </div>
                <div style={styles.item}>
                    <div>Lettuce</div>
                    <div>Qty: 1</div>
                </div>

            </div>
        </Alert>
    )
}