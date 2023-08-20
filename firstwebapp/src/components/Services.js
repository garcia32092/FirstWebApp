import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const services = [
    { title: "Heating", description: "We provide heating installation, repair, and maintenance services." },
    { title: "Ventilation", description: "Our ventilation services ensure clean and fresh air in your home or office." },
    { title: "Air Conditioning", description: "Stay cool with our air conditioning installation and repair services." }
];

const Services = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Our Services
            </Typography>
            {services.map((service, index) => (
                <Card key={index} sx={{ marginBottom: 4 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}

export default Services;
