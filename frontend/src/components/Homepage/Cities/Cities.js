import React from 'react'
import classes from './Cities.css'
import GudauriView from '../../../assets/images/gudauriView1.png'
import TbilisiView from '../../../assets/images/tbilisiView1.png'
import GomisMtaView from '../../../assets/images/gomisMtaView1.png'
import BatumiView from '../../../assets/images/batumiView1.png'
import KutaisiView from '../../../assets/images/kutaisiView1.png'
import { connect } from 'react-redux'

const cities = props => {
    return (
        <div>
            <div className={classes.GridTextArea}>
                <h2 className={props.darkMode ? classes.LabelDark : classes.Label}>Featured Rental Cities</h2>
                <h5 className={classes.Text}>Discover hundreds of beautiful homes in the Caucasian area.</h5>
            </div>
            <div className={classes.gridContainer}>
                <div className={classes.gomisMta}>
                    <h4 className={classes.CityLabel}>Gomis Mta</h4>
                    <img src={GomisMtaView} className={classes.CityImage} />
                </div>
                <div className={classes.kutaisi}>
                    <h4 className={classes.CityLabel}>Kutaisi</h4>
                    <img src={KutaisiView} className={classes.CityImage} />
                </div>
                <div className={classes.tbilisi}>
                    <h4 className={classes.CityLabel}>Tbilisi</h4>
                    <img src={TbilisiView} className={classes.CityImage} />
                </div>
                <div className={classes.gudauri}>
                    <h4 className={classes.CityLabel}>Gudauri</h4>
                    <img src={GudauriView} className={classes.CityImage} />
                </div>
                <div className={classes.batumi}>
                    <h4 className={classes.CityLabel}>Batumi</h4>
                    <img src={BatumiView} className={classes.CityImage} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(cities)