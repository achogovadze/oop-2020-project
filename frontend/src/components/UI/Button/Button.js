import React from 'react'
import Button from '@material-ui/core/Button'
import classes from './Button.css'

const button = (props) => (
    <Button
        variant={props.variant}
        type={props.type}
        disabled={props.disabled}
        onClick={props.clicked}
        className={props.classNameStyle}
    >
        {props.children}
    </Button>
)

export default button