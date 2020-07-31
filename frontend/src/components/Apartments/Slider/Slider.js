import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import img1 from '../../../assets/images/review1.png'
import './Slider.css'
import { NavLink, withRouter } from 'react-router-dom';
// import '../../../../node_modules/react-owl-carousel2/lib/styles.css'

class ApartmentList extends Component {

    componentDidMount() {
        const xmlns = "http://www.w3.org/2000/svg"

        const leftContainer = document.createElement('div')
        const rightContainer = document.createElement('div')
        leftContainer.setAttribute('class', 'container-left')
        rightContainer.setAttribute('class', 'container-right')

        const left = document.createElementNS(xmlns, "svg")
        const right = document.createElementNS(xmlns, "svg")
        left.setAttribute('class', 'more-arrows')
        right.setAttribute('class', 'more-arrows')

        const l1 = document.createElementNS(xmlns, 'polygon')
        const l2 = document.createElementNS(xmlns, 'polygon')
        const l3 = document.createElementNS(xmlns, 'polygon')
        const r1 = document.createElementNS(xmlns, 'polygon')
        const r2 = document.createElementNS(xmlns, 'polygon')
        const r3 = document.createElementNS(xmlns, 'polygon')

        l1.setAttribute('class', 'arrow-top')
        l1.setAttribute('points', '37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 ')

        l2.setAttribute('class', 'arrow-middle')
        l2.setAttribute('points', '37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7')

        l3.setAttribute('class', 'arrow-bottom')
        l3.setAttribute('points', '37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 ')

        r1.setAttribute('class', 'arrow-top')
        r1.setAttribute('points', '37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 ')

        r2.setAttribute('class', 'arrow-middle')
        r2.setAttribute('points', '37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7')

        r3.setAttribute('class', 'arrow-bottom')
        r3.setAttribute('points', '37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 ')

        leftContainer.appendChild(left)
        rightContainer.appendChild(right)
        left.appendChild(l1)
        left.appendChild(l2)
        left.appendChild(l3)
        right.appendChild(r1)
        right.appendChild(r2)
        right.appendChild(r3)
        // const left = document.createElement("div")
        // const right = document.createElement("div")
        // left.setAttribute('class', 'left-arrow')
        // right.setAttribute('class', 'right-arrow')

        const parentObjectLeft = document.getElementsByClassName('owl-prev');

        [...parentObjectLeft].forEach((parent, i) => {
            const curLeft = leftContainer.cloneNode(true)
            parent.innerText = ''
            parent.appendChild(curLeft)
        });

        const parentObjectRight = document.getElementsByClassName('owl-next');

        [...parentObjectRight].forEach((parent, i) => {
            const curRight = rightContainer.cloneNode(true)
            parent.innerText = ''
            parent.appendChild(curRight)
        });

        // document.getElementsByClassName("owl-prev")[0].innerText = ''
        // document.getElementsByClassName("owl-next")[0].innerText = ''

        // document.getElementsByClassName("owl-prev")[0].appendChild(leftContainer)
        // document.getElementsByClassName("owl-next")[0].appendChild(rightContainer)
    }

    componentDidUpdate() {
        const xmlns = "http://www.w3.org/2000/svg"

        const leftContainer = document.createElement('div')
        const rightContainer = document.createElement('div')
        leftContainer.setAttribute('class', 'container-left')
        rightContainer.setAttribute('class', 'container-right')

        const left = document.createElementNS(xmlns, "svg")
        const right = document.createElementNS(xmlns, "svg")
        left.setAttribute('class', 'more-arrows')
        right.setAttribute('class', 'more-arrows')

        const l1 = document.createElementNS(xmlns, 'polygon')
        const l2 = document.createElementNS(xmlns, 'polygon')
        const l3 = document.createElementNS(xmlns, 'polygon')
        const r1 = document.createElementNS(xmlns, 'polygon')
        const r2 = document.createElementNS(xmlns, 'polygon')
        const r3 = document.createElementNS(xmlns, 'polygon')

        l1.setAttribute('class', 'arrow-top')
        l1.setAttribute('points', '37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 ')

        l2.setAttribute('class', 'arrow-middle')
        l2.setAttribute('points', '37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7')

        l3.setAttribute('class', 'arrow-bottom')
        l3.setAttribute('points', '37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 ')

        r1.setAttribute('class', 'arrow-top')
        r1.setAttribute('points', '37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 ')

        r2.setAttribute('class', 'arrow-middle')
        r2.setAttribute('points', '37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7')

        r3.setAttribute('class', 'arrow-bottom')
        r3.setAttribute('points', '37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 ')

        leftContainer.appendChild(left)
        rightContainer.appendChild(right)
        left.appendChild(l1)
        left.appendChild(l2)
        left.appendChild(l3)
        right.appendChild(r1)
        right.appendChild(r2)
        right.appendChild(r3)
        // const left = document.createElement("div")
        // const right = document.createElement("div")
        // left.setAttribute('class', 'left-arrow')
        // right.setAttribute('class', 'right-arrow')

        const parentObjectLeft = document.getElementsByClassName('owl-prev');

        [...parentObjectLeft].forEach((parent, i) => {
            const curLeft = leftContainer.cloneNode(true)
            parent.innerText = ''
            parent.appendChild(curLeft)
        });

        const parentObjectRight = document.getElementsByClassName('owl-next');

        [...parentObjectRight].forEach((parent, i) => {
            const curRight = rightContainer.cloneNode(true)
            parent.innerText = ''
            parent.appendChild(curRight)
        });
    }

    // shouldComponentUpdate() {
    // return false
    // }

    showFullApartmentHandler = () => {
        // history.push('/apartments/')
    }


    render() {

        const options = {
            items: 1,
            nav: true,
            animateOut: 'fadeOut',
            // dotsEach: true,
            // rewind: true,
            // loop: true,
            // autoplay: true,
        }

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { },
        }

        let carousel = this.props.justImages ?
            <div className={this.props.mobileInfoView ? 'apartmentContainerMobileInfoView' : 'fullApartmentContainer'} >
                <div className="fullWrapper" >
                    <OwlCarousel ref="car" options={options} events={events} >
                        {this.props.apartment.images.map(image =>
                            <div className="fullApartmentImageContainer"><img src={image} alt='image' /></div>
                        )}
                    </OwlCarousel>
                </div>
            </div>
            :
            <div className={this.props.mobileInfoView ? 'apartmentContainerMobileInfoView' : 'apartmentContainer'} >
                <div className="wrapper" >
                    <OwlCarousel ref="car" options={options} events={events} >
                        {this.props.apartment.images.map(image =>
                            <NavLink className='NavLink' to={'/FullApartment/' + this.props.apartment.apartmentId} target='_blank'>
                                <div className="apartmentImageContainer"><img src={image} alt='image' /></div>
                            </NavLink>
                        )}
                    </OwlCarousel>
                </div>
                <NavLink className='NavLink' to={'/FullApartment/' + this.props.apartment.apartmentId} target='_blank'>
                    <div className="apartmentInfo">
                        <h2>{this.props.apartment.projectType}</h2>
                        <p>{this.props.apartment.address}</p>
                        <h3>${this.props.apartment.price}.00 /month</h3>
                    </div>
                </NavLink>
            </div>
        if (this.props.mobileJustImages) {
            carousel = <div className='apartmentContainerMobile'>
                <div className="wrapperMobile" >
                    <OwlCarousel ref="car" options={options} events={events} >
                        {this.props.apartment.images.map(image =>
                            <div className="apartmentImageContainerMobile"><img src={image} alt='image' /></div>
                        )}
                    </OwlCarousel>
                </div>
            </div>
        }

        return carousel
    }
}

export default withRouter(ApartmentList);