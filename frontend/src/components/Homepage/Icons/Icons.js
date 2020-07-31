import React from 'react'
import classes from './Icons.css'
import HomeIcon from '@material-ui/icons/HomeRounded';
import homeBackground from '../../../assets/images/homeBackground.png'
import TranslateIcon from '@material-ui/icons/TranslateRounded';
import AssignmentIcon from '@material-ui/icons/AssignmentRounded';
import AttachMoneyIcon from '@material-ui/icons/AttachMoneyRounded';
import { connect } from 'react-redux';

const icons = props => {
    return (
        <React.Fragment>
            <h1 className={props.darkMode ? classes.LabelDark : classes.Label}>Why rentpointer?</h1>
            <div className={classes.IconsList}>
                <div className={props.darkMode ? classes.IconDark : classes.Icon}>
                    <HomeIcon style={{ fill: '#69a88d', width: '80px', height: '80px', marginTop: '15px' }} />
                    <h4 className={props.darkMode ? classes.TextDark : classes.Text}>European fully furnished properties</h4>
                </div>
                <div className={props.darkMode ? classes.IconDark : classes.Icon}>
                    <AssignmentIcon style={{ fill: '#69a88d', width: '80px', height: '80px', marginTop: '15px' }} />
                    <h4 className={props.darkMode ? classes.TextDark : classes.Text}>Full transparency and documentation</h4>
                </div>
                <div className={props.darkMode ? classes.IconDark : classes.Icon}>
                    <TranslateIcon style={{ fill: '#69a88d', width: '80px', height: '80px', marginTop: '15px' }} />
                    <h4 className={props.darkMode ? classes.TextDark : classes.Text}>Multilingual staff accessible 24/7</h4>
                </div>
                <div className={props.darkMode ? classes.IconDark : classes.Icon}>
                    <AttachMoneyIcon style={{ fill: '#69a88d', width: '80px', height: '80px', marginTop: '15px' }} />
                    <h4 className={props.darkMode ? classes.TextDark : classes.Text}>Best prices for long-term rentals</h4>
                </div>
                <div className={props.darkMode ? classes.IntroTextAreaDark : classes.IntroTextArea}>
                    <h3 className={props.darkMode ? classes.IntroTextDark : classes.IntroText}>
                        We offer the best apartments and houses on the market with our seal of quality for long-term rental
                    </h3>
                </div>
                <div className={classes.ImageContainer}>
                    <img src={homeBackground} className={classes.Image} />
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(icons)