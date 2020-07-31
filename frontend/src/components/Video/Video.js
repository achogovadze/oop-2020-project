import React from 'react'
import classes from './Video.css'

const video = props => {
    return (
        <div className={classes.Container}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={classes.Video}
            >
                <source src={props.source} type="video/mp4" />
            </video>
        </div>
    )
}

export default video