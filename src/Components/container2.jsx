import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaCard from "./cards";
import {Card} from "@material-ui/core";
import AutoGrid from "./autogrid";

function SimpleContainer2() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="max">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '89vh' }} >
                    <AutoGrid>
                    </AutoGrid>
                </Typography>

            </Container>
        </React.Fragment>
    );
}

export default SimpleContainer2;