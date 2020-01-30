import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const mystyle = {
    color: "black",
    padding: "10px",
    position: "center",
    border: "2px solid #000"
};

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color='secondary' onClick={handleOpen}>
                Login
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p style={{ fontSize: "20px" }}>Legg til events!</p>
                    <form style={mystyle}>
                        <p>Navn: </p>
                        <input type="text" name="event_navn" />
                        <br />
                        <br />
                        <p>Sted: </p>
                        <input type="text" name="event_sted" />
                        <br />
                        <br />
                        <p>Beskrivelse: </p>
                        <input type="text" name="event_beskrivelse" />
                        <br />
                        <br />
                        <p>Dato: </p>
                        <input type="text" name="event_dato" />
                        <br />
                        <br />
                        <p>Tid: </p>
                        <input type="text" name="event_tid" />
                    </form>
                </div>
            </Modal>
        </div>
    );
}

