import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { makeStyles } from '@mui/styles';

import IndustryBg from '../../../assets/industry-solution-bg.svg'
import CustomDevImg from '../../../assets/cs-hero.svg'



const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: '75px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    heading: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '65px',
        color: '#000',
        marginBottom: '5px',
        marginTop: '95px'

    },
    body: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000',
        marginBottom: '25px'
    },
    button: {
        marginTop: '20px',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: '14px',
      
        
    },
    img: {
        width: '100%',
    }
    
}))


const ErpOffering = () => {
    const classes = useStyles();

    return (
    <Box sx={{ backgroundImage: `url(${IndustryBg})`}}>
    <Container>
        <Grid container spacing={3}  >
        <Grid item xs={6}>
        <img 
        src={CustomDevImg} 
        alt="Malin Greats Logo" 
        className={classes.img}
        />
        
        </Grid>
        <Grid item xs={6}>
        <Box>
            <h2 className={classes.heading}>Custom Software Development</h2>
            <h5 className={classes.body}>We develop tailored web and mobile based software solutions for starts ups, SMEs and large organisations. Whether you are an existing business or are looking to develop and launch a software product get in touch and we’ll help you turn an idea into a reality.</h5>
            <Button variant='contained'
            sx={{
                lineHeight: '25px',
                textAlign: 'center',
                background: '#143B65',
                color: '#FFF',
                borderRadius: '10px',
                width: '35%',
                textTransform: 'none'
            }}
            className={classes.button}
            >
                Learn More
            </Button>
        </Box>
        </Grid>
        </Grid>
    </Container>
    </Box>
  )
}

export default ErpOffering