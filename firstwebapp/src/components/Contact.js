import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                We would love to hear from you! Please fill out the form below and we will get in touch with you as soon as possible.
            </Typography>
            <form noValidate autoComplete="off">
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        style: {
                            color: "#cc0000",
                            backgroundColor: "rgba(0, 0, 0, 0.28)"
                        }
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        style: {
                            color: "#cc0000",
                            backgroundColor: "rgba(0, 0, 0, 0.28)"
                        }
                    }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        style: {
                            color: "#cc0000",
                            backgroundColor: "rgba(0, 0, 0, 0.28)"
                        }
                    }}
                />
                <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default Contact;
