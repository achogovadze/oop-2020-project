import React from 'react'

import Icon from '../../assets/images/Slide2.PNG'
import IconDark from '../../assets/images/Slide4.PNG'
import classes from './Icon.css'
import { connect } from 'react-redux'

const icon = (props) => (
    <div className={classes.Icon} style={{ height: props.height }}>
        <img src={props.darkMode ? IconDark : Icon} alt="*rentpointer" className={classes.IconImage}></img>
    </div>
)

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(icon)