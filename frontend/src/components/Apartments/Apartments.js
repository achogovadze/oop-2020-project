import React, { useState, useEffect, useRef, useCallback } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { withRouter } from 'react-router-dom'
import classes from './Apartments.css'
import Slider from './Slider/Slider'
import Spinner from '../UI/Spinner/Spinner'
import ApartmentList from './ApartmentList/ApartmentList'
import i11 from '../../assets/images/apartments/1/1.jpg'
import i12 from '../../assets/images/apartments/1/2.jpg'
import i13 from '../../assets/images/apartments/1/3.jpg'
import i21 from '../../assets/images/apartments/2/1.jpg'
import i22 from '../../assets/images/apartments/2/2.jpg'
import i23 from '../../assets/images/apartments/2/3.jpg'
import i31 from '../../assets/images/apartments/5/1.jpg'
import i32 from '../../assets/images/apartments/5/2.jpg'
import i33 from '../../assets/images/apartments/5/3.jpg'
import i41 from '../../assets/images/apartments/7/1.jpg'
import i42 from '../../assets/images/apartments/7/2.jpg'
import i43 from '../../assets/images/apartments/7/3.jpg'
import i51 from '../../assets/images/apartments/9/1.jpg'
import i52 from '../../assets/images/apartments/9/2.jpg'
import i53 from '../../assets/images/apartments/9/3.jpg'
import i61 from '../../assets/images/apartments/6/1.jpg'
import i62 from '../../assets/images/apartments/6/2.jpg'
import i63 from '../../assets/images/apartments/6/3.jpg'

import axios from 'axios'

const libraries = {}

const mapContainerStyle = {
    width: '50vw',
    height: 'calc(100vh - 57px)',
}

const mapContainerStyleShowMobile = {
    width: '100vw',
    height: 'calc(100vh - 57px)',
}

const center = {
    lat: 41.726468,
    lng: 44.769843,
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

const apartments = props => {
    const [city, setCity] = useState(window.location.pathname.split("/").pop())

    const [selected, setSelected] = useState(null)

    const [map, setMap] = useState(null)

    const [bounds, setBounds] = useState(null)

    const [showMap, setShowMap] = useState(false)

    const [showMapClicked, setShowMapClicked] = useState(false)

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/oop_final4_war/getApartmentsInfo', {
            params: {
                city: window.location.pathname.split("/").pop(),
            }
        }).then(res => {
            setApartments(res.data)
            console.log(res.data)
        })
            .catch(error => console.log(error))
    }, [])

    const onLoad = useCallback(function callback(map) {
        const initialBounds = new window.google.maps.LatLngBounds();
        // apartments.map(apartment => {
        //     initialBounds.extend(new window.google.maps.LatLng(apartment.latitude, apartment.longitude))
        // })
        initialBounds.extend(new window.google.maps.LatLng(41.707647, 44.723416))
        initialBounds.extend(new window.google.maps.LatLng(41.755557, 44.782611))
        map.fitBounds(initialBounds);
        setMap(map)
    }, [])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return <div style={{ marginTop: '30%' }}><Spinner /></div>

    let filteredApartments = apartments

    if (showMapClicked && bounds) {
        const currentBounds = new window.google.maps.LatLngBounds();
        currentBounds.extend(new window.google.maps.LatLng(bounds[0].lat, bounds[0].lng))
        currentBounds.extend(new window.google.maps.LatLng(bounds[1].lat, bounds[1].lng))

        filteredApartments = apartments.filter(apartment => currentBounds.contains(new window.google.maps.LatLng(apartment.latitude, apartment.longitude)))
    }

    let render = <Spinner />

    if (apartments.length > 0) {
        render = (
            <div className={classes.Layout}>
                <div className={classes.Container}>
                    <div className={showMap ? classes.ListShowMobile : classes.List}>
                        <ApartmentList apartments={filteredApartments} />
                    </div>
                    <div className={showMap ? classes.MapContainerShowMobile : classes.MapContainer} onMouseOver={() => setShowMapClicked(true)}>
                        <GoogleMap
                            mapContainerStyle={showMap ? mapContainerStyleShowMobile : mapContainerStyle}
                            zoom={15}
                            center={center}
                            options={options}
                            onLoad={onLoad}
                            onClick={(event) => setSelected(null)}
                            onIdle={() => {
                                let ne = map.getBounds().getNorthEast();
                                let sw = map.getBounds().getSouthWest();
                                setBounds([{ lat: ne.lat(), lng: ne.lng() }, { lat: sw.lat(), lng: sw.lng() }])
                            }}
                        >
                            {apartments.map(apartment =>
                                (
                                    <Marker
                                        id={apartment.id}
                                        position={{ lat: apartment.latitude, lng: apartment.longitude }}
                                        onClick={() => {
                                            setSelected(apartment)
                                        }}
                                        icon={{
                                            url: '/favicon.ico',
                                            scaledSize: new window.google.maps.Size(30, 30),
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                        }}
                                    />
                                )
                            )}
                            {selected ? (
                                <InfoWindow position={{ lat: selected.latitude, lng: selected.longitude }} style={{ width: 'calc(100vw)' }} onCloseClick={() => setSelected(null)} >
                                    <div className={classes.InfoSlider}>
                                        <Slider apartment={selected} mobileInfoView />
                                    </div>
                                </InfoWindow>
                            ) : null}
                        </GoogleMap>
                    </div>
                </div>
                <div className={classes.MapToggler} onClick={() => { setShowMap(prevState => !prevState); setShowMapClicked(true) }}>{showMap ? `View Apartments (${filteredApartments.length})` : 'View Map'}</div>
            </div>
        )
    }
    return render
}

export default withRouter(apartments)