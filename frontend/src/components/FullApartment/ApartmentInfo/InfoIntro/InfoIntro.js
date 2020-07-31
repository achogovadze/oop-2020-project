import React from 'react'
import classes from './InfoIntro.css'
import HomeIcon from '@material-ui/icons/Home'

const infoIntro = () => {
    return (
        <div className={classes.InfoIntro}>
            <div className={classes.InfoBox}>
                <HomeIcon medium />
                <div className={classes.InfoText}>
                    <h3>Entire home</h3>
                    <p>You’ll have the apartment to yourself.</p>
                </div>
            </div>
            <div className={classes.InfoBox}>
                <HomeIcon medium />
                <div className={classes.InfoText}>
                    <h3>Clean and tidy</h3>
                    <p>19 recent guests said this place was sparkling clean.</p>
                </div>
            </div>
            <div className={classes.InfoBox}>
                <HomeIcon medium />
                <div className={classes.InfoText}>
                    <h3>Great check-in experience</h3>
                    <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
            </div>
            <div className={classes.InfoBox}>
                <HomeIcon medium />
                <div className={classes.InfoText}>
                    <h3>Entire home</h3>
                    <p>You’ll have the apartment to yourself.</p>
                </div>
            </div>
        </div>
    )
}

export default infoIntro
