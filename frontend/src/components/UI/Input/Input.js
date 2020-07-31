import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classes from './Input.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './countries'
import { FormControl, Select, MenuItem, InputLabel, RadioGroup, FormControlLabel, Radio, InputAdornment, } from '@material-ui/core';
import { connect } from 'react-redux';

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles(theme => ({
    root: {
        // color: "",
        // width: 140,
        // backgroundColor: "#f3eee6",
        // opacity: 0.6,
        // borderRadius: "5px",
        // "&:hover": {
        //     backgroundColor: "#1E1E24",
        //     borderRadius: "5px",
        //     opacity: 1
        // },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #69a88d"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #69a88d"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid  #69a88d",
            borderRadius: "5px",
        },
        "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "1px solid  #69a88d"
        }
    },
    selectRoot: {
        color: "#69a88d"
    },
    icon: {
        color: "#69a88d"
    },
    selectPaper: {
        backgroundColor: "#f3eee6",
        border: "1px solid #69a88d",
        borderRadius: "5px",
        color: "#69a88d",
        fontFamily: 'inherit',
        // "& li:hover": {
        //     backgroundColor: "#"
        // }
    },
    labelClass: {
        color: '#69a88d',
        fontFamily: 'inherit',
        fontSize: '15px',
        '&.Mui-focused': {
            color: '#69a88d',
            // backgroundColor: '#212121'
        }
    },
    value: {
        fontFamily: 'inherit'
    },
    options: {
        backgroundColor: '#f3eee6',
        fontColor: '#69a88d',
        '& > li': {
            fontSize: '40px',
            fontFamily: 'inherit'
        }
    },
    Start: {
        // "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
        //   color: theme.palette.text.primary
        // },
        "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
            backgroundColor: 'red'
        },
        "&.MuiTypography-colorTextSecondary": {
            backgroundColor: 'red',
        }
    }
}));

const input = (props) => {

    const innerClass = useStyles();
    let inputElement = null

    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }



    switch (props.elementType) {
        case ('input'):
            // inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            inputElement =
                <TextField
                    fullWidth
                    inputProps={{
                        style: {
                            // fontFamily: 'comfortaa',
                            color: '#69a88d'
                        }
                    }}
                    id={props.key}
                    required={props.required}
                    type={props.type}
                    label={props.label}
                    value={props.value}
                    onChange={props.changed}
                    variant="outlined"
                    error={props.touched ? props.invalid : null}
                    className={innerClass.Start}
                    pattern={props.label === 'Phone Number' ? '\d*' : null}
                    InputProps={{
                        startAdornment: props.label === 'Phone Number' ? <InputAdornment position="start" >{props.elementConfig.placeholder}</InputAdornment> : null,
                        classes: {
                            // adornedStarts: innerClass.test,
                            notchedOutline: !props.touched || (props.touched && !props.invalid) ? classes.NotchedOutline : null
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.Label,
                            focused: !props.touched || (props.touched && !props.invalid) ? classes.Focused : null,
                        },
                    }}
                />
            break
        case ('date'):
            inputElement = (
                <TextField
                    fullWidth
                    required={props.required}
                    id="date"
                    variant="outlined"
                    inputProps={{
                        style: {
                            // fontFamily: 'comfortaa',
                            color: '#69a88d',
                        }
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.NotchedOutline,
                        }
                    }}
                    InputLabelProps={{
                        shrink: true,
                        classes: {
                            root: classes.Label,
                            focused: classes.Focused
                        },
                    }}
                    label={props.label}
                    type="date"
                    defaultValue={props.value}
                    className={classes.textField}
                    onChange={props.changed}
                />
            )
            break
        case ('country'):
            inputElement = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                (<FormControl variant="outlined" required={props.required} classes={{
                    root: innerClass.root
                }}>
                    <InputLabel className={innerClass.labelClass} id="demo-simple-select-outlined-label">{props.label}</InputLabel>
                    <Select
                        native
                        fullWidth
                        classes={{
                            root: innerClass.selectRoot,
                            icon: innerClass.icon
                        }}
                        // MenuProps={{ classes: { paper: innerClass.selectPaper } }}
                        // inputProps={{
                        //     name: "gpuChildQuantity",
                        //     id: "gpuChildQuantity"
                        // }}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label='Country *'
                        variant='outlined'
                        value={props.value}
                        onChange={props.changed}
                    >
                        <option aria-label="None" value="" />
                        {countries.map(option => {
                            return (
                                <option>{option.label} (+{option.phone})</option>
                            )
                        })}
                    </Select>
                </FormControl>)
                :
                (<Autocomplete
                    id="country-select-demo"
                    onSelect={props.changed}
                    fullWidth
                    // style={{ width: 300 }}
                    options={countries}
                    classes={{
                        // old
                        option: innerClass.options,
                        paper: innerClass.selectPaper
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.label + ' (+' + option.phone + ')'}
                    renderOption={(option) => (
                        <React.Fragment>
                            {/* <span>{countryToFlag(option.code)}</span> */}
                            {option.label} (+{option.phone})
                        </React.Fragment>
                    )}
                    renderInput={(params) => (
                        < TextField
                            {...params}
                            label={props.label}
                            required={props.required}
                            variant="outlined"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                                style: {
                                    color: '#69a88d',
                                    fontFamily: 'inherit'
                                }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.Label,
                                    focused: classes.Focused,
                                },
                            }}
                            InputProps={{
                                ...params.InputProps,
                                classes: {
                                    root: props.darkMode ? classes.OptionsDark : classes.Options,
                                    notchedOutline: classes.NotchedOutline,
                                }
                            }}
                        />)
                    }
                />)
            break
        case ('radioGroup'):
            inputElement = (
                <RadioGroup value={props.value} onChange={props.changed}>
                    <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
                    <FormControlLabel value="Landlord" control={<Radio />} label="Landlord" />
                </RadioGroup>
            )
            break
        case ('select'):
            inputElement = (
                <FormControl variant="outlined" classes={{
                    root: innerClass.root
                }}>
                    <InputLabel className={innerClass.labelClass} id="demo-simple-select-outlined-label">{props.label}</InputLabel>
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
                        value={props.value}
                        variant='outlined'
                        onChange={() => console.log('asd')}
                        label="Age"
                    >
                        {props.selectArray.map(item => {
                            return (
                                <MenuItem className={innerClass.value} value={item}>{item}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            )
            break
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break
        // case ('select'):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')}
        //             value={props.value}
        //             onChange={props.changed}
        //         >
        //             {props.elementConfig.options.map(option => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))}
        //         </select>
        //     )
        //     break
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} />

    }

    return (
        <div className={classes.Input}>

            {inputElement}
            {/* <label className={classes.Label}>{props.label}</label> */}
            {/* // id="outlined-error-helper-text" */}
            {/* // defaultValue="Hello World" */}
            {/* // helperText="Incorrect entry." */}
            {/* // style={{ primary: 'red' }} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(input)