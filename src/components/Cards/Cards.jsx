import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cc from 'classnames';
const Cards = ({data:{confirmed, recovered, deaths , lastUpdate}}) => {
    if(!confirmed)
    {
        return 'Loading ...';
    }
        return (
            <div className = {styles.container}>
                <Grid container spacing = {3} justify="center">
                    <Grid item component = {Card} xs={12} md={3} className={cc(styles.Card, styles.infected)}>
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom >Infected</Typography>
                            <Typography variant= "h5"><Countup start={0} end = {confirmed.value} duration = {1.5} separator = ',' /></Typography>
                            <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant= "body2">number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component = {Card} xs={12} md={3} className={cc(styles.Card, styles.recovered)}>
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom >Recovered</Typography>
                            <Typography variant= "h5"><Countup start={0} end= {recovered.value} duration= {1.5} separator = ',' /> </Typography>
                            <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant= "body2">number of recoveries from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component = {Card} xs={12} md={3} className={cc(styles.Card, styles.deaths)}>
                        <CardContent>
                            <Typography color = "textSecondary" gutterBottom >Deaths</Typography>
                            <Typography variant= "h5"><Countup start ={0} end={deaths.value} duration={1.5} separator=',' /></Typography>
                            <Typography color = "textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant= "body2">number of Deaths by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    
                </Grid>
            </div>
        );
    
}; 

export default Cards;