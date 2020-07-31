import React from 'react'
import classes from './LabelImage.css'

const labelImage = props => {
    return (
        <div className={classes.LabelImageArea}>
            <div className={classes.LabelImage}>
                <div className={classes.ImageContainer}>
                    <img src={props.image} className={classes.Image} />
                </div>
                <div className={classes.LabelArea}>
                    <h2 className={props.darkMode ? classes.LabelDark : classes.Label}>{props.label}</h2>
                </div>
                <div className={classes.TextArea}>
                    <p className={props.darkMode ? classes.TextDark : classes.Text}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default labelImage