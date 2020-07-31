import React from 'react'
import classes from './LabelImages.css'
import LabelImage from './LabelImage/LabelImage'
import icon1 from '../../../assets/images/icon1_light.png'
import icon2 from '../../../assets/images/icon2_light.png'
import icon3 from '../../../assets/images/icon3_light.png'
import icon4 from '../../../assets/images/icon4_light.png'
import { connect } from 'react-redux'

const labelImages = props => {
    return (
        <div className={classes.LabelImages}>
            <hr className={classes.Hr} />
            <h2 className={props.darkMode ? classes.HeaderLabelDark : classes.HeaderLabel}>Why rentpointer?</h2>
            <div className={classes.LabelImagesList}>
                <LabelImage
                    image={icon1}
                    label='Best prices for long-term rentals'
                    text='Our goal is to provide our tenants the best prices for long-term rentals and offer additional services that makes us very special'
                    darkMode={props.darkMode}
                />
                <LabelImage
                    image={icon2}
                    label='24/7 multilingual support'
                    text='Our staff is available anytime you need assistance on your reservation or just need additional information regarding your trip'
                    darkMode={props.darkMode}
                />
                <LabelImage
                    image={icon3}
                    label='Cleaning service'
                    text='Our cleaning staff is always available for you to make sure that your apartment is clean, and your bed sheets are fresh'
                    darkMode={props.darkMode}
                />
                <LabelImage
                    image={icon4}
                    label='Fully equipped apartments'
                    text='We select every apartment with highest attention to detail in order to provide our tenants the best possible experience during their stay. This includes a fully equipped kitchen and additional amenities such as laundry and high-speed Wi-Fi to make you feel truly at home'
                    darkMode={props.darkMode}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(labelImages)