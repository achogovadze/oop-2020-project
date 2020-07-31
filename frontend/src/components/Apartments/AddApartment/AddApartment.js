import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './AddApartment.css'
import axios from 'axios'
const addApartment = props => {
    const [apartmentInfo, setApartmentInfo] = useState()
    const handleChange = (event, type) => {
        console.log(type)
        const newValue = {
            ...apartmentInfo,
            [type]: event.target.value
        }
        setApartmentInfo(newValue)
        console.log(apartmentInfo)
    }

    const handleSubmit = () => {
        axios.get('http://localhost:8081/oop_final4_war/addApartmentServlet', {
            params: {
                apartmentInfo
            }
        })
    }

    return (
        <div className={classes.Admin}>
            <TextField id="outlined-basic" label="Country" variant="outlined" onChange={(event) => handleChange(event, 'country')} />
            <TextField id="outlined-basic" label="City" variant="outlined" onChange={(event) => handleChange(event, 'city')} />
            <TextField id="outlined-basic" label="Address" variant="outlined" onChange={(event) => handleChange(event, 'address')} />
            <TextField id="outlined-basic" label="Price USD" variant="outlined" type="number" onChange={(event) => handleChange(event, 'price_usd')} />
            <TextField id="outlined-basic" label="Property type" variant="outlined" onChange={(event) => handleChange(event, 'property_type')} />
            <TextField id="outlined-basic" label="Project type" variant="outlined" onChange={(event) => handleChange(event, 'project_type')} />
            <TextField id="outlined-basic" label="Additional space" variant="outlined" onChange={(event) => handleChange(event, 'additional_space')} />
            <TextField id="outlined-basic" label="Additional footage" variant="outlined" type="number" onChange={(event) => handleChange(event, 'additional_footage')} />
            <TextField id="outlined-basic" label="Square footage" variant="outlined" type="number" onChange={(event) => handleChange(event, 'square_footage')} />
            <TextField id="outlined-basic" label="Building materials" variant="outlined" onChange={(event) => handleChange(event, 'building_materials')} />
            <TextField id="outlined-basic" label="Room height" variant="outlined" type="number" onChange={(event) => handleChange(event, 'room_height')} />
            <TextField id="outlined-basic" label="Floor level" variant="outlined" type="number" onChange={(event) => handleChange(event, 'floor_level')} />
            <TextField id="outlined-basic" label="Bedrooms number" variant="outlined" type="number" onChange={(event) => handleChange(event, 'bedrooms_num')} />
            <TextField id="outlined-basic" label="Beds Number" variant="outlined" type="number" onChange={(event) => handleChange(event, 'beds_num')} />
            <TextField id="outlined-basic" label="Bathrooms number" variant="outlined" type="number" onChange={(event) => handleChange(event, 'bathrooms_num')} />
            <TextField id="outlined-basic" label="Private Bathroom" variant="outlined" type="number" onChange={(event) => handleChange(event, 'private_bathroom')} />
            <TextField id="outlined-basic" label="WiFi" variant="outlined" type="number" onChange={(event) => handleChange(event, 'wifi')} />
            <TextField id="outlined-basic" label="Water" variant="outlined" onChange={(event) => handleChange(event, 'water')} />
            <TextField id="outlined-basic" label="Gas" variant="outlined" onChange={(event) => handleChange(event, 'gas')} />
            <TextField id="outlined-basic" label="Electricity" variant="outlined" onChange={(event) => handleChange(event, 'electricity')} />
            <TextField id="outlined-basic" label="Air Conditioning" variant="outlined" type="number" onChange={(event) => handleChange(event, 'air_conditioning')} />
            <TextField id="outlined-basic" label="Heating" variant="outlined" onChange={(event) => handleChange(event, 'heating')} />
            <TextField id="outlined-basic" label="Washing machine" variant="outlined" onChange={(event) => handleChange(event, 'washing_machine')} />
            <TextField id="outlined-basic" label="Oven" variant="outlined" type="number" onChange={(event) => handleChange(event, 'oven')} />
            <TextField id="outlined-basic" label="Dishwasher" variant="outlined" type="number" onChange={(event) => handleChange(event, 'dishwasher')} />
            <TextField id="outlined-basic" label="Dryer" variant="outlined" type="number" onChange={(event) => handleChange(event, 'dryer')} />
            <TextField id="outlined-basic" label="Desk" variant="outlined" type="number" onChange={(event) => handleChange(event, 'desk')} />
            <TextField id="outlined-basic" label="Balcony" variant="outlined" type="number" onChange={(event) => handleChange(event, 'balcony')} />
            <TextField id="outlined-basic" label="Elevator" variant="outlined" type="number" onChange={(event) => handleChange(event, 'elevator')} />
            <TextField id="outlined-basic" label="Parking" variant="outlined" type="number" onChange={(event) => handleChange(event, 'parking')} />
            <TextField id="outlined-basic" label="Vehicle Charger" variant="outlined" type="number" onChange={(event) => handleChange(event, 'vehicle_charger')} />
            <TextField id="outlined-basic" label="Pool" variant="outlined" type="number" onChange={(event) => handleChange(event, 'pool')} />
            <TextField id="outlined-basic" label="Is Available" variant="outlined" type="number" onChange={(event) => handleChange(event, 'is_available')} />
            <TextField id="outlined-basic" label="Apartment status" variant="outlined" onChange={(event) => handleChange(event, 'apartment_status')} />
            <TextField id="outlined-basic" label="Latitude" variant="outlined" type="number" onChange={(event) => handleChange(event, 'latitude')} />
            <TextField id="outlined-basic" label="Longitude" variant="outlined" type="number" onChange={(event) => handleChange(event, 'longitude')} />
            <TextField id="outlined-basic" label="Image" variant="outlined" type="text" onChange={(event) => handleChange(event, 'image1')} />
            <TextField id="outlined-basic" label="Image" variant="outlined" type="text" onChange={(event) => handleChange(event, 'image2')} />
            <TextField id="outlined-basic" label="Image" variant="outlined" type="text" onChange={(event) => handleChange(event, 'image3')} />
            <TextField id="outlined-basic" label="Image" variant="outlined" type="text" onChange={(event) => handleChange(event, 'image4')} />
            <TextField id="outlined-basic" label="Image" variant="outlined" type="text" onChange={(event) => handleChange(event, 'image5')} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}

export default addApartment