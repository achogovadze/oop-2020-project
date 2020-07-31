import React from 'react'
import Card from '@material-ui/core/Card';
import HotelIcon from '@material-ui/icons/Hotel';
import WeekendIcon from '@material-ui/icons/Weekend';
import CardContent from '@material-ui/core/CardContent';
import classes from './Arrangements.css'
const arrangements = () => {
    return (
        <div className={classes.ArrangementsContainer}>
            <span className={classes.Title}>Sleeping arrangements</span>
            <div className={classes.Arrangements}>
                <Card className={classes.LeftBox}>
                    <CardContent className={classes.CardContent}>
                        <HotelIcon />
                        <span className={classes.Content}>Bedroom 1</span>
                        <span>1 queen bed</span>
                    </CardContent>
                </Card>
                <Card className={classes.RightBox}>
                    <CardContent className={classes.CardContent}>
                        <WeekendIcon />
                        <span className={classes.Content}>Common spaces</span>
                        <span>1 sofa bed</span>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default arrangements
