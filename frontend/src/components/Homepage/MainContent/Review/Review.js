import React from 'react'
import classes from './Review.css'

const review = props => {
    return (
        <div className={props.darkMode ? classes.ReviewDark : classes.Review}>
            <img src={props.image} className={classes.Image} />
            <h6 className={classes.Text}>{props.text}</h6>
            <h6 className={classes.Signature}>{props.signature}</h6>
        </div>
    )
}

export default review