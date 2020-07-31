import React, { useState } from 'react'
import Dialog from './Dialog/Dialog'
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import classes from './Filters.css'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Slider from '@material-ui/core/Slider';

const filters = props => {
    const [showDate, setShowDate] = useState(false)
    const [date, setDate] = useState({})

    const dateFilterHandlerStart = (date) => {
        setDate(prevState => setDate({ ...prevState, startDate: date }))
    }

    const dateFilterHandlerEnd = (date) => {
        setDate(prevState => setDate({ ...prevState, endDate: date }))
    }

    const [price, setPrice] = useState([0, 3000])
    const [showPrice, setShowPrice] = useState(false)
    const priceFilterHandler = (event, value) => {
        setPrice([...value])
    }

    const priceFilterHandlerMin = (event, index) => {
        const prevState = [...price]
        const updatedState = [event.target.value, prevState[1]]
        setPrice(updatedState)
    }
    const priceFilterHandlerMax = (event, index) => {
        const prevState = [...price]
        const updatedState = [prevState[0], event.target.value]
        setPrice(updatedState)
    }

    const [showDetailed, setShowDetailed] = useState(false)
    // const [detailed, setDetailed] = useState(null)
    // const detailedFilterHandler = (data) => {
    //     setDetailed(data)
    // }
    return (
        <div className={classes.FilterBar}>
            <Dialog open={showDate} handleClose={() => setShowDate(false)} title='Choose dates'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className={classes.DatePicker}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check in"
                        value={date.startDate}
                        onChange={dateFilterHandlerStart}
                        autoOk
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check out"
                        value={date.endDate}
                        onChange={dateFilterHandlerEnd}
                        autoOk
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Dialog>
            <Dialog open={showPrice} handleClose={() => setShowPrice(false)} title="Select Price Range">
                <Slider
                    className={classes.Slider}
                    value={price}
                    onChange={priceFilterHandler}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={3000}
                />
                <div className={classes.PriceDialogFields}>
                    <TextField className={classes.Field} id="outlined-basic" label="Min" variant="outlined" value={price[0]} onChange={priceFilterHandlerMin} />
                    <TextField className={classes.Field} id="outlined-basic" label="Max" variant="outlined" value={price[1]} onChange={priceFilterHandlerMax} />
                </div>
            </Dialog>
            <Dialog open={showDetailed} handleClose={() => setShowDetailed(false)}>detailed</Dialog>
            <div className={classes.FilterButton} onClick={() => setShowDate(true)}>
                Dates
                <i className={showDate ? classes.ArrowReverse : classes.Arrow}></i>
            </div>
            <div className={classes.SecondFilterButton} onClick={() => setShowPrice(true)}>
                Price
                <i className={showPrice ? classes.ArrowReverse : classes.Arrow}></i>
            </div>
            <div className={classes.FilterButton} onClick={() => setShowDetailed(true)}>
                Detailed
                <i className={showDetailed ? classes.ArrowReverse : classes.Arrow}></i>
            </div>
        </div >
    )
}

export default filters