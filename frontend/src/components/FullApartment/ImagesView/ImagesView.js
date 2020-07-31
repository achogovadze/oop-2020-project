import React, { useState } from 'react'
import classes from './ImagesView.css'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Dialog from '../../Apartments/Filters/Dialog/Dialog'
import Slider from '../../Apartments/Slider/Slider'

const imagesView = props => {
    const [showFullImages, setShowFullImages] = useState(false)

    return (
        <React.Fragment>
            <div className={classes.BigImageContainer} onClick={() => setShowFullImages(true)}>
                <div className={classes.BigImage}>
                    <img src={props.images[0]} />
                </div>
            </div>
            <div className={classes.ImagesList}>
                <div className={classes.SmallImageContainer} onClick={() => setShowFullImages(true)}>
                    <div className={classes.SmallImage}>
                        <img src={props.images[1]} />
                    </div>
                </div>
                <div className={classes.SmallImageContainer} onClick={() => setShowFullImages(true)}>
                    <div className={classes.SmallImage}>
                        <img src={props.images[2]} />
                    </div>
                </div>
                <div className={classes.SmallImageContainer} onClick={() => setShowFullImages(true)}>
                    <div className={classes.SmallImage}>
                        <img src={props.images[3]} />
                    </div>
                </div>
                <div className={classes.SmallImageContainer} onClick={() => setShowFullImages(true)}>
                    <div className={classes.Icon}>
                        <PhotoLibraryIcon />
                        <span>{props.images.length}</span>
                    </div>
                    <div className={classes.SmallImageLast}>
                        <img src={props.images[4]} />
                    </div>
                </div>
            </div>
            <Dialog open={showFullImages} handleClose={() => setShowFullImages(false)} title="" fullScreen>
                <Slider apartment={{ images: props.images }} justImages />
            </Dialog>
        </React.Fragment>
    )
}

export default imagesView