import * as React from 'react';
import {useState} from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const initialValues = {
  name: '',
  email: '',
}

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '-50px',
        // [theme.breakpoints.down('sm')]: {
        //   marginTop: '-500px',
        //         },
    },
    input:{
      [theme.breakpoints.down('sm')]: {
        marginTop: '-500px',
              },

    },
    SubmitBtn: {
        fontFamily:'Manrope',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '25px',
        textTransform:'none',
        textDecoration:'none',
        width: '100%',
        backgroundColor: '#143B65',
                                            
        borderRadius: '5px',color: '#FFFFFF',
        padding: '10px',
        '&:hover': {
        border: '2px solid #007BFF',
        }                            
    }

}))


export default function ContactForm({url}) {
  const { runGetInTouchSnackbar} = useAuth();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();


  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]: value,
    })
}

const onSubmit = async(e) => {
  e.preventDefault()
  
  if(values.name != '' && values.email != '') {
    setLoading(true)

    var formdata = new FormData();
    formdata.append("fullName", values.name);
    formdata.append("email", values.email);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const res = await fetch("https://backend.malingreatssmartsystems.co.zw/api/enquiry-email", requestOptions)
    console.log(res.status)
      if (res.status === 200) {
          setLoading(false)
          runGetInTouchSnackbar()
        }
      }
}


  return (
      <Container sx={{marginTop: {xs:'5px', lg:'125px'}}}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit} 
            action="#"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
            <div>
                <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                // id="outlined-size-small"
                label=" Enter Name"
                id="standard-basic"
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                size="small"
                sx={{backgroundColor: '#FFF', 
                border: 'none', 
                borderRadius: '5px', 
                opacity: '0.2', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
           
                <TextField
                name="email"
                value={values.email}
                onChange={handleInputChange}
                label=" Enter Email"
                id="standard-basic"
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                size="small"
                sx={{backgroundColor: '#FFF', 
                border: 'none', 
                borderRadius: '5px', 
                opacity: '0.2', 
                padding: '5px', 
                margin: '10px',
                outline: 'none'}}
                />
                {loading ? 
                  <Button className={classes.SubmitBtn} 
                  type='submit'
                  variant="contained"
                  disabled="true"
                  sx={{ 
                  width: '93%',
                  margin: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '25px',
                  backgroundColor: '#143B65',                            
                  borderRadius: '5px',color: '#FFF',
                  padding: '10px',
              }}        
                  >
                      Loading...
                  </Button> 
                  :
                  <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ 
            width: '93%',
            margin: '10px',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '25px',
            backgroundColor: '#143B65',                            
            borderRadius: '5px',color: '#FFF',
            padding: '10px',
        }}        
            >
                Get Started
            </Button> 
                }
           {/* {loading ? 
            <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '80%' }}        
            >
                <img src={loader} alt='loading' style={{ height: '45px'}}/>
            </Button>
            :
            <Button className={classes.SubmitBtn} 
            type='submit'
            variant="contained" 
            sx={{ m: 1, width: '90%' }}        
            endIcon={<ForwardToInboxIcon />}>
                GET STARTED
            </Button> 
          } */}
            
            </div>
        </Box>
    </Container>
    //   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    //       Message Sent, You Will Be Replied Shortly
    //     </Alert>
    //   </Snackbar>
    // </Box>
  );
}