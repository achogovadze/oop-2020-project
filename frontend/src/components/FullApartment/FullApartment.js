import React, { useEffect, useState } from 'react'
import classes from './FullApartment.css'
// import TextField from "@material-ui/core/TextField";
// import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"
// import { DateRangePicker, DateRange, DateRangeDelimiter, LocalizationProvider } from "@material-ui/pickers"
import ContactArea from '../Homepage/ContactArea/ContactArea'
import i11 from '../../../../../../Desktop/safe/src/assets/images/apartments/1/1.jpg'
import i12 from '../../../../../../Desktop/safe/src/assets/images/apartments/1/2.jpg'
import i13 from '../../../../../../Desktop/safe/src/assets/images/apartments/1/3.jpg'
import i14 from '../../../../../../Desktop/safe/src/assets/images/apartments/2/1.jpg'
import i15 from '../../../../../../Desktop/safe/src/assets/images/apartments/2/2.jpg'
import ImagesView from '../../../../../../Desktop/safe/src/components/FullApartment/ImagesView/ImagesView'
import ApartmentInfo from '../../../../../../Desktop/safe/src/components/FullApartment/ApartmentInfo/ApartmentInfo.js'
import StarIcon from '@material-ui/icons/Star';
import Slider from '../../../../../../Desktop/safe/src/components/Apartments/Slider/Slider'
import axios from 'axios'
import Spinner from '../../../../../../Desktop/safe/src/components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format'




const fullApartment = props => {
    const [apartmentId, setApartmentId] = useState(window.location.pathname.split("/").pop())
    const [apartment, setApartment] = useState()
    const [value, setValue] = useState([null, null])

    const [date, setDate] = useState({})

    const dateFilterHandlerStart = (date) => {
        setDate(prevState => setDate({ ...prevState, startDate: date }))
    }

    const dateFilterHandlerEnd = (date) => {
        setDate(prevState => setDate({ ...prevState, endDate: date }))
    }

    useEffect(() => {
        axios.get('http://localhost:8081/oop_final4_war/getApartmentInfo', {
            params: {
                apartmentId: window.location.pathname.split("/").pop()
            }
        }).then(res => setApartment(res.data))
            .catch(error => console.log(error))
    }, [])

    const apartmentDeleteHandler = () => {
        axios.get('http://localhost:8081/oop_final4_war/deleteApartmentServlet', {
            params: {
                apartmentId: window.location.pathname.split("/").pop()
            }
        }).then(res => window.close())
            .catch(error => console.log(error))
    }

    const bookApartment = () => {
        const st = format(date.startDate, "yyyy-MM-dd")
        const ed = format(date.endDate, "yyyy-MM-dd")
        console.log(st, ed)
        axios.get('http://localhost:8081/oop_final4_war/addBookingServlet', {
            params: {
                check_in_date: st,
                check_out_date: ed,
                total_price: apartment.price,
                apartment_id: window.location.pathname.split("/").pop(),
                user_id: localStorage.getItem('token'),
                payment_currency: 'USD',
            }
        }).then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (apartment ? (
        <React.Fragment>
            <div className={classes.FullApartmentContainer}>
                <div className={classes.SliderForMobile}>
                    <Slider apartment={apartment} mobileJustImages />
                </div>
                <div className={classes.IntroContentContainer}>
                    <div className={classes.IntroContainer}>
                        <div className={classes.TitleContainer}>
                            <div className={classes.Title}>
                                <h3>{apartment.propertyType}</h3>
                                <div className={classes.TitleRating}>
                                    <StarIcon />
                                    <p>9/10</p>
                                </div>
                            </div>
                            {props.email === 'admin@admin.com' &&
                                <div className={classes.Delete} onClick={apartmentDeleteHandler}>
                                    Delete this account
                            </div>}
                        </div>
                        <div className={classes.IntroImages}>
                            <div className={classes.ImagesView}>
                                <ImagesView images={apartment.images} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Info}>
                    <ApartmentInfo />
                </div>
                <div className={classes.SideBooking}>
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
                    <div className={classes.Book} onClick={() => bookApartment()}>Book</div>
                </div>
            </div>
            <ContactArea />
        </React.Fragment>
    ) : <Spinner />
    )
}

const mapStateToProps = state => {
    return {
        email: state.auth.userId,
    }
}

export default connect(mapStateToProps)(fullApartment)