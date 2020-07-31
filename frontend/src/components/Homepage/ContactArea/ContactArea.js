import React from 'react'
import classes from './ContactArea.css'
import paymentLogos from '../../../assets/images/paymentLogos.png'
import firebaseLogo from '../../../assets/images/firebase.png'
import trustpilotLogo from '../../../assets/images/trustpilot.png'

const contactArea = props => {
    return (
        <div className={classes.ContactArea}>
            <div className={classes.TopArea}>
                <div className={classes.Container}>
                    <ul>
                        <li><a href='https://www.google.com'>About us</a></li>
                        <li><a href='https://www.google.com'>Careers</a></li>
                        <li><a href='https://www.google.com'>You are a landlord</a></li>
                        <li><a href='https://www.google.com'>Become a partner</a></li>
                        <li><a href='https://www.google.com'>Privacy policy</a></li>
                        <li><a href='https://www.google.com'>Cookies policy</a></li>
                    </ul>
                </div>
                <div className={classes.Container}>
                    <ul>
                        <li><a href='https://www.google.com'>How it works</a></li>
                        <li><a href='https://www.google.com'>Additional services</a></li>
                        <li><a href='https://www.google.com'>FAQ</a></li>
                    </ul>
                </div>
                <div className={classes.Container}>
                    <ul>
                        <li><a href='https://www.google.com'>+995 591 17 87 97</a></li>
                        {/* <li>+995 557 77 41 41</li> */}
                        <li><a href='https://www.google.com'>info@rentpointer.com</a></li>
                        <li><a href='https://www.google.com'>Contact us</a></li>
                    </ul>
                </div>
                <div className={classes.Container}>
                    <ul>
                        <li><a href='https://www.facebook.com/Alexandre.Chogovadze'>Facebook</a></li>
                        <li><a href='https://www.instagram.com/chogovadze_/'>Instagram</a></li>
                        <li><a href='https://www.youtube.com/'>YouTube</a></li>
                        <li><a href='https://www.linkedin.com/in/aleksandre-chogovadze-684593178/'>LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className={classes.MiddleArea}>
                <div className={classes.MiddleContainer}>
                    <h4>Payment methods</h4>
                    <div className={classes.ImageContainer}>
                        <img src={paymentLogos} className={classes.Image} />
                    </div>
                </div>
                <div className={classes.MiddleContainer}>
                    <h4>Hosting partner</h4>
                    <div className={classes.ImageContainer}>
                        <img src={firebaseLogo} className={classes.Image} />
                    </div>
                </div>
                <div className={classes.MiddleContainer}>
                    {/* <h4>Rating</h4> */}
                    <div className={classes.ImageContainerLarge}>
                        <img src={trustpilotLogo} className={classes.Image} />
                    </div>
                </div>
            </div>
            <div className={classes.BottomArea}>
                <p>©2020 rentpointer — All rights reserved</p>
            </div>
        </div>
    )
}

export default contactArea