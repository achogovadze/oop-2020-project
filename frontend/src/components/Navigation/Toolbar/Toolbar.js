import React from 'react'
import * as actions from '../../../../../../../Desktop/safe/src/store/actions'
import classes from './Toolbar.css'
import Logo from '../../../../../../../Desktop/safe/src/components/Logo/Logo'
import Icon from '../../../../../../../Desktop/safe/src/components/Logo/Icon'
import NavigationItems from '../../../../../../../Desktop/safe/src/components/Navigation/NavigationItems/NavigationItems'
import DrawerToggle from '../../../../../../../Desktop/safe/src/components/Navigation/SideDrawer/DrawerToggle/DrawerToggle'
import { connect } from 'react-redux'
import { FormControlLabel, withStyles, Switch } from '@material-ui/core'

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

const toolbar = (props) => (
    <header className={props.darkMode ? classes.ToolbarDark : classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            {/* <div className={classes.test}>
                *rentpointer
            </div> */}
            <Logo />
        </div>
        <div className={classes.Icon}>
            <Icon />
        </div>
        <div className={classes.DarkModeSwitch}>
            <FormControlLabel style={{ marginLeft: '100px' }}
                control={<DarkModeSwitch checked={props.darkMode} onChange={() => props.darkModeToggler()} name="DarkMode" />}
            />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
)

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        darkModeToggler: () => dispatch(actions.switchDarkMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar)