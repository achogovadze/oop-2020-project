import React, { useState } from 'react'
import classes from './Amenities.css'
import Dialog from '../../../Apartments/Filters/Dialog/Dialog'
import Button from '@material-ui/core/Button'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService'
import HomeIcon from '@material-ui/icons/Home'


const amenities = () => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div className={classes.Amenities}>
            <span className={classes.Title}>Amenities</span>
            <div className={classes.Icons}>
                <div className={classes.OneAmenity}>
                    <LocalLaundryServiceIcon />
                    <span>bla</span>
                </div>
                <div className={classes.OneAmenity}>
                    <HomeIcon />
                    <span>home</span>
                </div>
                <div className={classes.OneAmenity}>
                    <LocalLaundryServiceIcon />
                    <span>bla</span>
                </div>
                <div className={classes.OneAmenity}>
                    <HomeIcon />
                    <span>home</span>
                </div>
                <div className={classes.OneAmenity}>
                    <LocalLaundryServiceIcon />
                    <span>bla</span>
                </div>
                <div className={classes.OneAmenity}>
                    <HomeIcon />
                    <span>home</span>
                </div>
                <div className={classes.OneAmenity}>
                    <LocalLaundryServiceIcon />
                    <span>bla</span>
                </div>
                <div className={classes.OneAmenity}>
                    <HomeIcon />
                    <span>home</span>
                </div>
            </div>
            <Button variant="outlined" size="medium" color="primary" classes={{ root: classes.Button, outlinedPrimary: classes.ButtonColor }} onClick={() => setOpenDialog(true)}>
                Show All Amenities
            </Button>
            <Dialog Amenities open={openDialog} handleClose={() => setOpenDialog(false)} title="" fullWidth title='Amenities'>
                <div className={classes.Basic}>
                    <span className={classes.DialogTitle}>Basic</span>
                    <div className={classes.ListItem}>
                        WiFi
                        <span className={classes.SecondaryInfo}>Continuous access in the listing</span>
                    </div>
                    <div className={classes.ListItem}>
                        Iron
                    </div>
                    <div className={classes.ListItem}>
                        Heating
                        <span className={classes.SecondaryInfo}>Central heating or a heater in the listing</span>
                    </div>
                    <div className={classes.ListItem}>
                        Essentials
                        <span className={classes.SecondaryInfo}>Towels, bed sheets, soap, and toilet paper</span>
                    </div>
                    <div className={classes.ListItem}>
                        TV
                    </div>
                    <div className={classes.ListItem}>
                        Cable TV
                    </div>
                    <div className={classes.ListItem}>
                        Washer
                        <span className={classes.SecondaryInfo}>In the building, free or for a fee</span>
                    </div>
                    <div className={classes.ListItem}>
                        Laptop-friendly workspace
                        <span className={classes.SecondaryInfo}>A table or desk with space for a laptop and a chair that’s comfortable to work in</span>
                    </div>
                    <div className={classes.ListItem}>
                        Air conditioning
                    </div>
                    <div className={classes.ListItem}>
                        Hot water
                    </div>
                </div>
                <div className={classes.Facilities}>
                    <span className={classes.DialogTitle}>Facilities</span>
                    <div className={classes.ListItem}>
                        Elevator
                        <span className={classes.SecondaryInfo}>The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide.</span>
                    </div>
                    <div className={classes.ListItem}>
                        Free parking on premises
                    </div>
                </div>
                <div className={classes.Facilities}>
                    <span className={classes.DialogTitle}>Dining</span>
                    <div className={classes.ListItem}>
                        Kitchen
                        <span className={classes.SecondaryInfo}>Space where guests can cook their own meals</span>
                    </div>
                    <div className={classes.ListItem}>
                        Refrigerator
                    </div>
                    <div className={classes.ListItem}>
                        Dishes and silverware
                    </div>
                    <div className={classes.ListItem}>
                        Stove
                    </div>
                    <div className={classes.ListItem}>
                        Microwave
                    </div>
                    <div className={classes.ListItem}>
                        Baking sheet
                    </div>
                    <div className={classes.ListItem}>
                        Cooking basics
                        <span className={classes.SecondaryInfo}>Pots and pans, oil, salt and pepper</span>
                    </div>
                </div>
            </Dialog>
        </div>

    )
}

export default amenities
