import React from 'react'
import classes from './Intro.css'
import Video from '../../Video/Video'
import videoSource from '../../../assets/videos/interior-video.mp4'
import Search from '../Search/Search'
import SearchBar from '../SearchBar/SearchBar'


const intro = props => {
    return (
        <div className={classes.Intro}>
            <Search />
            <Video source={videoSource} />
        </div>
    )
}

export default intro