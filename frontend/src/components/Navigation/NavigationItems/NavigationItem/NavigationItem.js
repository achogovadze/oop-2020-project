import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import classes from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={props.darkMode ? classes.NavigationItemDark : classes.NavigationItem}>
        <NavLink exact={props.exact} to={props.link} style={{ textDecoration: 'none' }}>
            <Button style={{ borderColor: '#69a88d' }} classes={{ label: classes.Label }} variant={props.location.pathname == props.link ? 'outlined' : null}>
                {props.children}
            </Button>
        </NavLink>
    </li>
)

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(withRouter(navigationItem))