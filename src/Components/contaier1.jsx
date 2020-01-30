import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="max">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
                    <h1>Google maps </h1>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default SimpleContainer;