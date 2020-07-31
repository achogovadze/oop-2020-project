import React, { useState } from 'react'

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '../../Apartments/Filters/Dialog/Dialog'
import { withRouter } from 'react-router-dom'

const DarkModeSwitch = withStyles({
    switchBase: {
        color: '#69a88d',
        '&$checked': {
            color: '#f3eee6',
        },
        '&$checked + $track': {
            backgroundColor: '#69a88d',
        },
    },
    checked: {},
    track: {},
})(Switch);

const navigationItems = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact >Home</NavigationItem>
            <NavigationItem link="/how-it-works" exact >How it works</NavigationItem>
            <NavigationItem link="/help" exact >Help</NavigationItem>
            {/* {props.isAuthenticated
            ? <NavigationItem link="/orders">Orders</NavigationItem>
            : null} */}
            {!props.isAuthenticated
                ? <NavigationItem link="/auth">Sign In</NavigationItem>
                :
                <React.Fragment>
                    <NavigationItem link="/logout">Logout</NavigationItem>
                    <div onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
                        <ExpandMoreIcon />
                    </div>
                </React.Fragment>}
            <Dialog open={open} handleClose={() => setOpen(false)}>
                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                    <span onClick={() => props.deleteAccountToggler()}>Delete my Account</span>
                    <span onClick={() => { props.history.push('/addApartment'); setOpen(false) }}>Add new Apartment</span>
                </div>
            </Dialog>
            <FormControlLabel style={{ marginLeft: '15px' }}
                control={<DarkModeSwitch checked={props.darkMode} onChange={() => props.darkModeToggler()} name="DarkMode" />}
            />
        </ul >
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        darkModeToggler: () => dispatch(actions.switchDarkMode()),
        deleteAccountToggler: () => dispatch(actions.deleteAccountFromDatabase())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(navigationItems))