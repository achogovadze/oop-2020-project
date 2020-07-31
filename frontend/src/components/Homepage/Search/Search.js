import React from 'react'
import classes from './Search.css'
import SearchBar from '../SearchBar/SearchBar'
import { connect } from 'react-redux'

const search = props => {
    const cities = ['Tbilisi', 'London', 'Madrid', 'Warsaw']
    return (
        <div className={classes.Search}>
            <div className={classes.SearchArea}>
                <div className={classes.TitleArea}>
                    <h1 className={props.darkMode ? classes.TitleDark : classes.Title}>A better way to stay</h1>
                </div>
                <div className={classes.TextArea}>
                    <p className={props.darkMode ? classes.TextDark : classes.Text}>Make your trip hassle-free with rentpointer! Browse our additional services we offer during your trip</p>
                </div>
                <SearchBar selectArray={cities} width='100%' height='54px' />
                <hr className={classes.Hr} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(search)