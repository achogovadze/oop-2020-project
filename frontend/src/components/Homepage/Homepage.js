import React, { useState, useEffect } from 'react'
import Icons from './Icons/Icons'
import MainContent from '../../../../../../Desktop/safe/src/components/Homepage/MainContent/MainContent'
import Cities from './Cities/Cities'
import classes from './Homepage.css'
import tbilisiView from '../../../../../../Desktop/safe/src/assets/images/tbilisiView1.png'
import Intro from './Intro/Intro'
import LabelImages from './LabelImages/LabelImages'
import QualitySection from '../../../../../../Desktop/safe/src/components/Homepage/QualitySection/QualitySection'
import Slider from '../../../../../../Desktop/safe/src/components/Slider/Slider'
import images from '../../../../../../Desktop/safe/src/components/Slider/Images'
import BottomSearch from './BottomSearch/BottomSearch'
import ContactArea from './ContactArea/ContactArea'
import axios from 'axios';

const homepage = (props) => {
    const cities = ['Tbilisi', 'London', 'Madrid', 'Warsaw']

    return (
        <div>
            <Intro />
            <Cities />
            <LabelImages />
            <QualitySection />
            {/* <Slider slides={images} autoPlay={4} /> */}
            <MainContent />
            <BottomSearch />
            <ContactArea />
            {/* <Icons /> */}
        </div>
    )
}

export default homepage