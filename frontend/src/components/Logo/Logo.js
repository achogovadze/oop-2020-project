import React from 'react'

import Logo from '../../assets/images/Slide1.PNG'
import LogoDark from '../../assets/images/Slide3.PNG'
import classes from './Logo.css'
import { connect } from 'react-redux'

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={props.darkMode ? LogoDark : Logo} alt="*rentpointer"></img>
    </div>
)

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(logo)