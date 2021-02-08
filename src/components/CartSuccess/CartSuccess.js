import React from "react";
import { createUseStyles } from "react-jss";
import Alert from "../Alert/Alert";
// import './CartSuccess.css';

const useStyles = createUseStyles({
  item: {
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    flexWrap: "wrap",
    '& h2': {
      width: "100%",
    },
    '& $item':{
        marginRight: 20
    }
  },
});

export default function CartSucess() {
  const classes = useStyles();
  // const styles={
  //     header:{
  //         width: '100%'
  //     },
  //     item:{
  //         margin: 20
  //     },
  //     wrapper:{
  //         borderTop: 'black solid 1px',
  //         display: 'flex',
  //         flexWrap: 'wrap'
  //     }
  // }

  return (
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper}>
        <h2>You have added 3 itmes:</h2>
        <div className={classes.item}>
          <div>Bananas</div>
          <div>Qty: 2</div>
        </div>
        <div className={classes.item}>
          <div>Lettuce</div>
          <div>Qty: 1</div>
        </div>
      </div>
      {/*
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

            </div> */}
    </Alert>
  );
}
