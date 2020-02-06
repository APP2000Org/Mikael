import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from "./cards";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
    },
}));
export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
                <Grid item xs>
                    <MediaCard/>
                </Grid>
            </Grid>
        </div>
    );
}