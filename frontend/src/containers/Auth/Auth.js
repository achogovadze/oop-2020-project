import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import lockGif from '../../assets/videos/rentpointer.gif'

const useStyles = makeStyles(theme => ({
    button: {
        width: '250px',
        height: '36px',
        boxShadow: '0 0 30px #333',
        backgroundColor: '#69a88d',
        color: '#f3eee6',
        fontFamily: 'inherit',
        fontSize: '18px',
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: '#76b99c'
        },
    }
}))

class Auth extends Component {

    state = {
        controls: {
            // role: {
            //     elementType: 'radioGroup',
            //     elementConfig: {
            //         label: '',
            //         type: '',
            //         placeholder: '',
            //     },
            //     value: 'Tenant',
            //     validation: {
            //         required: true,
            //     },
            //     valid: false,
            //     touched: false,
            // },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    label: 'First Name',
                    type: 'text',
                    placeholder: 'Enter Your First Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    label: 'Last Name',
                    type: 'text',
                    placeholder: 'Enter Your Last Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            date: {
                elementType: 'date',
                elementConfig: {
                    label: 'Birthdate',
                    type: '',
                    placeholder: '',
                    selectArray: [],
                },
                value: '2020-01-01',
                validation: {
                    required: true,
                },
                valid: true,
                touched: false,
            },
            country: {
                elementType: 'country',
                elementConfig: {
                    label: 'Country',
                    type: '',
                    placeholder: '',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: false,
                },
                valid: false,
                touched: false,
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    label: 'Phone Number',
                    type: 'number',
                    placeholder: '',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: false,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter Your Email',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter Your Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
            // day: {
            //     elementType: 'select',
            //     elementConfig: {
            //         label: 'Day *',
            //         type: '',
            //         placeholder: '',
            //         selectArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            //             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            //     },
            //     value: '',
            //     validation: {
            //         required: true,
            //         minLength: 0,
            //     },
            //     valid: false,
            //     touched: false,
            // },
            // month: {
            //     elementType: 'select',
            //     elementConfig: {
            //         label: 'Month *',
            //         type: '',
            //         placeholder: '',
            //         selectArray: ['January', 'February', 'March', 'April',
            //             'May', 'June', 'July', 'August',
            //             'September', 'October', 'November', 'December',],
            //     },
            //     value: '',
            //     validation: {
            //         required: true,
            //         minLength: 0,
            //     },
            //     valid: false,
            //     touched: false,
            // },
            // year: {
            //     elementType: 'select',
            //     elementConfig: {
            //         label: 'Year *',
            //         type: '',
            //         placeholder: '',
            //         selectArray: [],
            //     },
            //     value: '',
            //     validation: {
            //         required: true,
            //         minLength: 0,
            //     },
            //     valid: false,
            //     touched: false,
            // },

        },
        isSignup: false,
    }

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath()
        }
    }
    componentDidUpdate() {
        console.log(this.state.controls.country)
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    parseCode = str => {
        let startIndex = str.indexOf('(')
        let endIndex = str.indexOf(')')
        let res = str.slice(startIndex + 1, endIndex)
        return res
    }

    inputChangedHandler = (event, controlName) => {
        let updatedControls = null
        if (controlName === 'country') {
            updatedControls = {
                ...this.state.controls,
                [controlName]: {
                    ...this.state.controls[controlName],
                    value: event.target.value,
                    valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                    touched: true,
                },
                ['phone']: {
                    ...this.state.controls['phone'],
                    ['elementConfig']: {
                        ...this.state.controls['phone'].elementConfig,
                        placeholder: this.parseCode(event.target.value)
                    }
                }
            }
        } else {
            updatedControls = {
                ...this.state.controls,
                [controlName]: {
                    ...this.state.controls[controlName],
                    value: event.target.value,
                    valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                    touched: true,
                },
            }
        }
        this.setState({ controls: updatedControls })
    }

    // dateChangedHandler = (d) => {
    //     const updatedControls = {
    //         ...this.state.controls,
    //         ['date']: {
    //             ...this.state.controls['date'],
    //             value: d,
    //             valid: true,
    //             touched: true,
    //         }
    //     }
    //     this.setState({ controls: updatedControls })
    // }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup,
            this.state.controls.date.value, this.state.controls.country.value, this.state.controls.phone.value, this.state.controls.firstName.value, this.state.controls.lastName.value)
    }

    switchAuthFormHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        })
    }

    render() {
        let formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        const loginKeys = ['email', 'password']
        if (!this.state.isSignup) {
            formElementsArray = formElementsArray.filter(item => loginKeys.includes(item.id))
        }

        let form = formElementsArray.map(formElement => (
            <div key={formElement.id}>
                <Input
                    required={formElement.config.validation.required}
                    type={formElement.config.elementConfig.type}
                    label={formElement.config.elementConfig.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    selectArray={formElement.config.elementConfig.selectArray}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    dateChanged={(date) => this.dateChangedHandler(date)}
                />
            </div>
        ))

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        let authRedirect = null
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        const { innerClass } = this.props

        return (
            <div className={classes.OuterContainer}>
                <div className={classes.Auth}>
                    {authRedirect}
                    {errorMessage}
                    <form onSubmit={this.submitHandler} className={classes.Form}>
                        {!this.state.isSignup ? <h3 className={classes.TopText}>SIGN IN</h3> : <h3 className={classes.TopText}>Create New Account</h3>}
                        {form}
                        <br></br>
                        <Button classNameStyle={classes.SubmitButton} type="submit">{!this.state.isSignup ? 'SIGN IN' : 'SIGN UP'}</Button>
                        <h5 className={this.props.darkMode ? classes.TextDark : classes.Text}>{this.state.isSignup ? 'Already a User?' : "Don't have an account?"}<a onClick={this.switchAuthFormHandler} className={classes.Link}>{this.state.isSignup ? 'Sign In' : 'Sign Up'}</a></h5>
                    </form>
                </div>
                <div className={classes.GifContainer}>
                    <img src={lockGif} className={classes.Gif} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath,
        darkMode: state.darkMode.darkMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, birthDate, country, phone, firstName, lastName) => dispatch(actions.auth(email, password, isSignup, birthDate, country, phone, firstName, lastName)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)