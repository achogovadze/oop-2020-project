import React from 'react'
import classes from './BottomSearch.css'
import Button from '../../../../../../../Desktop/safe/src/components/UI/Button/Button'
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        // color: "red",
        width: '90%',
        height: '36px',
        borderRadius: '5px',
        backgroundColor: "#f3eee6",
        border: '2px solid #69a88d',
        // boxShadow: '0 0 30px #333',

        // boxShadow: '1px 1px 3px 4px #9999',
        // opacity: 0.6,
        // borderRadius: "5px",
        // "&:hover": {
        //     backgroundColor: "#1E1E24",
        //     borderRadius: "5px",
        //     opacity: 1
        // },
        "& .MuiOutlinedInput-notchedOutline": {
            fontColor: '#69a88d',
            border: "1px solid #f3eee6"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #f3eee6"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #f3eee6",
            // backgroundColor: "#f3eee6",

        },
        "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #f3eee6"
        },
        "& .MuiInputBase-root": {
            fontSize: '2.8rem',
            height: '100%',
        },
        ['@media (min-width: 500px)']: {
            width: '25%',
            height: '36px',
            borderRadius: '5px',
            backgroundColor: "#f3eee6",
            marginRight: '8px',
            // boxShadow: '0 0 30px #333',
            "& .MuiOutlinedInput-notchedOutline": {
                fontColor: '#69a88d',
                border: "1px solid #f3eee6"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #f3eee6"
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #f3eee6",
                // backgroundColor: "#f3eee6",
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #f3eee6"
            },
            "& .MuiInputBase-root": {
                height: '100%',
                fontSize: '2.8rem',
            },
            "& .MuiSelect-select:focus": {
                backgroundColor: '#f3eee6',
            }
        },
        // ['@media (min-width: 1024px)']: {
        //     width: '35%'
        // },
    },
    button: {
        width: '90%',
        height: '40px',
        // boxShadow: '0 0 30px #333',
        backgroundColor: '#69a88d',
        color: '#f3eee6',
        marginTop: '10px',
        fontFamily: 'inherit',
        fontSize: '18px',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#76b99c'
        },
        ['@media (min-width: 500px)']: {
            width: '25%',
            height: '40px',
            marginLeft: '8px',
            marginTop: '0',
            // boxShadow: '0 0 30px #333',
            backgroundColor: '#69a88d',
            color: '#f3eee6',
            fontFamily: 'inherit',
            fontSize: '18px',
            textTransform: 'capitalize',
            "&:hover": {
                backgroundColor: '#76b99c'
            },
        },
        // ['@media (min-width: 1024px)']: {
        //     width: '40%'
        // },
    },
    selectRoot: {
        color: "#69a88d",
        paddingBottom: '15px',
        fontSize: '18px',
        height: '100%',
        padding: 0,
    },
    nativeSelectRoot: {
        color: "#69a88d",
        fontSize: '18px',
        height: '100%',
        padding: 0,
        // padding: 'auto',
        paddingLeft: '42%'
    },
    icon: {
        color: "#212121"
    },
    selectPaper: {
        backgroundColor: "#f3eee6",
        border: "1px solid #69a88d",
        borderRadius: "5px",
        color: "#69a88d",
        fontFamily: 'inherit',
        fontSize: '18px',
        // "& li:hover": {
        //     backgroundColor: "#"
        // }
    },
    labelClass: {
        fontColor: '#69a88d',
        fontFamily: 'inherit',
        fontSize: '15px',
        '&.Mui-focused': {
            color: '#69a88d',
        }
    },
    value: {
        fontColor: '#69a88d',
        fontSize: '15px',
        fontFamily: 'inherit',
    },
}));

const useStylesDark = makeStyles(theme => ({
    root: {
        // color: "red",
        width: '90%',
        height: '36px',
        borderRadius: '5px',
        backgroundColor: "#212121",
        border: '2px solid #69a88d',
        // boxShadow: '0 0 30px #333',

        // boxShadow: '1px 1px 3px 4px #9999',
        // opacity: 0.6,
        // borderRadius: "5px",
        // "&:hover": {
        //     backgroundColor: "#1E1E24",
        //     borderRadius: "5px",
        //     opacity: 1
        // },
        "& .MuiOutlinedInput-notchedOutline": {
            fontColor: '#69a88d',
            border: "1px solid #212121"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #212121"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #212121",
            // backgroundColor: "#f3eee6",

        },
        "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #212121"
        },
        "& .MuiInputBase-root": {
            fontSize: '2.8rem',
            height: '100%',
        },
        ['@media (min-width: 500px)']: {
            width: '25%',
            height: '36px',
            borderRadius: '5px',
            backgroundColor: "#212121",
            marginRight: '8px',
            // boxShadow: '0 0 30px #333',
            "& .MuiOutlinedInput-notchedOutline": {
                fontColor: '#69a88d',
                border: "1px solid #212121"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #212121"
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #212121",
                // backgroundColor: "#f3eee6",
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                border: "1px solid  #212121"
            },
            "& .MuiInputBase-root": {
                height: '100%',
                fontSize: '2.8rem',
            },
            "& .MuiSelect-select:focus": {
                backgroundColor: '#212121',
            }
        },
        // ['@media (min-width: 1024px)']: {
        //     width: '35%'
        // },
    },
    button: {
        width: '90%',
        height: '40px',
        // boxShadow: '0 0 30px #333',
        backgroundColor: '#69a88d',
        color: '#f3eee6',
        marginTop: '10px',
        fontFamily: 'inherit',
        fontSize: '18px',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#76b99c'
        },
        ['@media (min-width: 500px)']: {
            width: '25%',
            height: '40px',
            marginLeft: '8px',
            marginTop: '0',
            // boxShadow: '0 0 30px #333',
            backgroundColor: '#69a88d',
            color: '#f3eee6',
            fontFamily: 'inherit',
            fontSize: '18px',
            textTransform: 'capitalize',
            "&:hover": {
                backgroundColor: '#76b99c'
            },
        },
        // ['@media (min-width: 1024px)']: {
        //     width: '40%'
        // },
    },
    selectRoot: {
        color: "#69a88d",
        paddingBottom: '15px',
        fontSize: '18px',
        height: '100%',
        padding: 0,
    },
    nativeSelectRoot: {
        color: "#69a88d",
        fontSize: '18px',
        height: '100%',
        padding: 0,
        // padding: 'auto',
        paddingLeft: '42%'

    },
    icon: {
        color: "#212121"
    },
    selectPaper: {
        backgroundColor: "#212121",
        border: "1px solid #69a88d",
        borderRadius: "5px",
        color: "#69a88d",
        fontFamily: 'inherit',
        fontSize: '18px',
        // "& li:hover": {
        //     backgroundColor: "#"
        // }
    },
    labelClass: {
        fontColor: '#69a88d',
        fontFamily: 'inherit',
        fontSize: '15px',
        '&.Mui-focused': {
            color: '#69a88d',
        }
    },
    value: {
        fontColor: '#69a88d',
        fontSize: '15px',
        fontFamily: 'inherit',
    },
}));


const bottomSearch = props => {
    const innerClass = props.darkMode ? useStylesDark() : useStyles()
    const [city, setCity] = useState('Tbilisi')
    const cities = ['Tbilisi', 'London', 'Madrid', 'Warsaw']
    const history = useHistory()
    const searchHandler = props => {
        history.push('/apartments/' + city)
    }
    return (
        <div className={props.darkMode ? classes.SearchBarDark : classes.SearchBar}>
            <h1>Begin your journey here</h1>
            <div className={classes.SearchBarArea}>

                {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                    <FormControl variant="outlined" classes={{
                        root: innerClass.root
                    }}>
                        {/* <InputLabel className={innerClass.labelClass} id="demo-simple-select-outlined-label">{props.label}</InputLabel> */}
                        <Select
                            native
                            classes={{
                                root: innerClass.nativeSelectRoot,
                                icon: innerClass.icon
                            }}
                            // MenuProps={{ classes: { paper: innerClass.selectPaper } }}
                            // inputProps={{
                            //     name: "gpuChildQuantity",
                            //     id: "gpuChildQuantity"
                            // }}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Search"
                            variant='outlined'
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        >
                            <option aria-label="None" value="" />
                            {cities.map(item => {
                                return (
                                    <option value={item} key={item}>{item}</option>
                                )
                            })}
                        </Select>
                    </FormControl>
                    :
                    <FormControl variant="outlined" classes={{
                        root: innerClass.root
                    }}>
                        {/* <InputLabel className={innerClass.labelClass} id="demo-simple-select-outlined-label">{props.label}</InputLabel> */}
                        <Select
                            classes={{
                                root: innerClass.selectRoot,
                                icon: innerClass.icon
                            }}
                            MenuProps={{ classes: { paper: innerClass.selectPaper } }}
                            // inputProps={{
                            //     name: "gpuChildQuantity",
                            //     id: "gpuChildQuantity"
                            // }}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={city}
                            variant='outlined'
                            onChange={(event) => setCity(event.target.value)}
                            label="Search"
                        >
                            {cities.map(item => (<MenuItem className={innerClass.value} value={item} key={item}>{item}</MenuItem>))}
                        </Select>
                    </FormControl>
                }
                <Button variant='contained' classNameStyle={innerClass.button} clicked={searchHandler}>Search</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(bottomSearch)