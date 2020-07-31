import React from 'react'
import classes from './ApartmentList.css'
import Slider from '../Slider/Slider'
import Filters from '../Filters/Filters'

const apartmentList = props => {

    return (
        <React.Fragment>
            <Filters />
            <div className={classes.List}>
                {props.apartments.map(apartment => <Slider apartment={apartment} />)}
            </div>
        </ React.Fragment>
    )
}

export default apartmentList