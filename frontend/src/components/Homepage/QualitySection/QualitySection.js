import React from 'react'
import classes from './QualitySection.css'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

const qualitySection = props => {
    return (
        <div className={classes.Section}>
            <div className={classes.Background}>
            </div>
            <div className={classes.Container}>
                <div className={classes.LowerText}>
                    <h1>*rentpointer guarantee</h1>
                    <div className={classes.LowerContainer}>
                        {/* <VerifiedUserRoundedIcon /> */}
                        <h2>Our seal of quality</h2>
                        <p>Our Rentpointers personally conduct a detailed quality check of every apartment. Furthermore, we document every listing ourselves and provide a detailed view of it. We make sure that, on your arrival, the apartment is identical to the pictures we present on our website.</p>
                    </div>
                    <div className={classes.LowerContainer}>
                        <h2>Always at your service</h2>
                        <p>We manage every apartment listed on our website. If you encounter any problem related to your apartment, you can contact us anytime and we will find a solution as fast as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default qualitySection