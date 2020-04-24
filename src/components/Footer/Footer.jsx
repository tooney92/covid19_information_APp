import React from 'react'; 
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Footer.module.css';
// import CountUp from 'react-countup'
import cx from 'classnames'


const Footer = () => {
  
    return(
        <div className={cx(styles.container)}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.infected)}>
                    <CardContent className={cx(styles.logo2)}>
                        <Typography variant="h5" gutterBottom> By: Anthony Nta</Typography>
                        <img src = "./me.jpg"/>
                        <Typography variant="body2"> Social Media:
                        <a href="https://twitter.com/tonynta" target="_blank">Twitter   </a>  
                        <a href="https://www.instagram.com/tonynta/" target="_blank">Instagram</a>
                         </Typography>
                        <Typography variant="body2">Credits: Javascript React JS project</Typography>
                        <Typography variant="body2">Inspired: Adrian hajdin</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )

}

export default Footer;