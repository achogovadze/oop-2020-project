import React from 'react'
import classes from './MainContent.css'
import employeeImage from '../../../assets/images/employee1.png'
import reviewImage1 from '../../../assets/images/review1.png'
import reviewImage2 from '../../../assets/images/review2.png'
import reviewImage3 from '../../../assets/images/review3.png'
import reviewImage4 from '../../../assets/images/review4.png'
import Review from './Review/Review'
import { connect } from 'react-redux'


const mainContent = props => {
    return (
        <div>
            {/* <div className={props.darkMode ? classes.EmployeeDark : classes.Employee}>
                <img src={employeeImage} className={classes.EmployeeImage} />
                <div className={classes.Textarea}>
                    <h3 className={props.darkMode ? classes.EmployeeTextDark : classes.EmployeeText}>It is our duty to check every apartment as we were planning to rent it ourselves, meaning that every little detail matters! We try to document the apartment from every perspective possible to enable our tenants booking the apartment without even visiting it.</h3>
                    <h4 className={props.darkMode ? classes.EmployeeSignatureDark : classes.EmployeeSignature}>Zura, Our rentpointer from Tbilisi</h4>
                </div>
            </div> */}
            <h2>Our visitors about us</h2>
            <div className={classes.Review}>
                <Review
                    image={reviewImage1}
                    text="Rentpointer saved me an enormous amount of time and helped me with every formality linked to renting an apartment in Georgia"
                    signature='-Katarina'
                    darkMode={props.darkMode}
                />
                <Review
                    image={reviewImage2}
                    text="Given that I don't speak georgian, it would have been a struggle to negotiate the best terms with the local landlords if it wasn't for rentpointer providing a easy to use platform"
                    signature='-Orlando'
                    darkMode={props.darkMode}
                />
                <Review
                    image={reviewImage3}
                    text="Simple, straightforward and safe. Those three words come to my mind when im thinking about my experience with rentpointer!"
                    signature='-Leon'
                    darkMode={props.darkMode}
                />
                <Review
                    image={reviewImage4}
                    text="It has always been a problem to remotely rent an apartment in Tbilisi, especially for my medium-term business trips. Rentpointer solved that problem for me forever!"
                    signature='-Maria'
                    darkMode={props.darkMode}
                />
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        darkMode: state.darkMode.darkMode,
    }
}

export default connect(mapStateToProps)(mainContent)