import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Music from './Music';
import { firestore } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const MainPage = () => {
    const [releases, setReleases] = useState([]);
    const [selectedRelease, setSelectedRelease] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestore, 'Releases'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReleases(data);
            if (data.length > 0) {
                setSelectedRelease(data[0]);
            }
        };
      
        fetchData();
    }, []);

    return (
        <Container style={{ marginTop: '25px', marginBottom: '25px' }}>
            {selectedRelease && (
                <>
                    <Typography variant="h6" align="center">{selectedRelease.title}</Typography>
                    <iframe
                        title={`${selectedRelease.title} Widget`}
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameborder="0"
                        src={selectedRelease.embedUrl}
                        style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
                    </iframe>
                </>
            )}
            <Music releases={releases} onReleaseSelect={setSelectedRelease} />
        </Container>
    );
}

export default MainPage;
