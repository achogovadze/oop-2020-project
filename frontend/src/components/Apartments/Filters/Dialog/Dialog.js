import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ClearIcon from '@material-ui/icons/Clear';
import classes from './Dialog.css'


const dialog = props => {
    let DialogClasses = {
        paper: classes.Dialog
    }
    if (props.fullScreen) {
        DialogClasses = {
            paper: classes.Dialog,
            root: classes.FullDialog,
            paperFullScreen: classes.PaperFullScreen
        }
    }
    if (props.Amenities) {
        DialogClasses = {
            paper: classes.DialogAmenities,
            root: classes.FullDialog
        }
    }
    return (
        <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.open} classes={DialogClasses} fullWidth={props.fullWidth} fullScreen={props.fullScreen}>
            {props.Amenities &&
                <div className={classes.Close}>
                    <ClearIcon onClick={props.handleClose} />
                </div>}
            <DialogTitle id="simple-dialog-title" className={classes.DialogTitle}>{props.title}</DialogTitle>
            {props.children}
        </Dialog>
    )
}

export default dialog