import React from 'react'
import InfoIntro from '../../../../../../../Desktop/safe/src/components/FullApartment/ApartmentInfo/InfoIntro/InfoIntro.js'
import Arrangements from '../../../../../../../Desktop/safe/src/components/FullApartment/ApartmentInfo/Arrangements/Arrangements.js'
import Amenities from '../../../../../../../Desktop/safe/src/components/FullApartment/ApartmentInfo/Amenities/Amenities.js'
import classes from './ApartmentInfo.css'

const apartmentInfo = () => {
    return (
        <div className={classes.ApartmentInfo}>
            <InfoIntro />
            <div className={classes.Divider}>
                <span className={classes.Text}>
                    Sunny and cozy apartment in historic part of Tbilisi - Avlabar.
                    House was built in 2015, apartment has beautiful view from balcony
                    and is in walking distance from a lot of tourist sites and Georgian restaurants.</span>
            </div>
            <div className={classes.Divider}>
                <Arrangements />
            </div>
            <div className={classes.Divider}>
                <Amenities />
            </div>
        </div>
    )
}

export default apartmentInfo


