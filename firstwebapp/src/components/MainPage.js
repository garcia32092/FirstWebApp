import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Music from './Music';

const releases = [
    {
        title: "Big Things, Small Packages Vol. 1",
        releaseDate: "Released: January 10, 2014",
        releaseType: "Mixtape",
        imageUrl: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/albums/images/311655/original/resize:300x300/crop:x0y0w1000h1000/hash:1700558087/BTSP.jpg?1700558087",
        embedUrl: "https://www.reverbnation.com/widget_code/html_widget/Album_311655?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
    },
    {
        title: "Remember Me",
        releaseDate: "Released: March 20, 2013",
        releaseType: "Mixtape",
        imageUrl: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/13445468/original/crop:x0y0w800h533/hash:1463948455/99849.jpg?1463948455",
        embedUrl: "https://www.reverbnation.com/widget_code/html_widget/Album_23476?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
    },
    {
        title: "Before The First Album",
        releaseDate: "Released: March 20, 2012",
        releaseType: "Mixtape",
        imageUrl: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/albums/images/24307/original/resize:300x300/crop:x0y0w750h750/hash:1461344588/Cover_MAIN2.jpg?1461344588",
        embedUrl: "https://www.reverbnation.com/widget_code/html_widget/Album_24307?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
    },
    {
        title: "18 & On Probation",
        releaseDate: "Released: May 7, 2011",
        releaseType: "Mixtape",
        imageUrl: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/albums/images/24634/original/resize:300x300/crop:x0y0w1000h1000/hash:1461179172/PoP2SiCk_18_On_Probation-front-large.jpg?1461179172",
        embedUrl: "https://www.reverbnation.com/widget_code/html_widget/Album_24634?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
    },
    {
        title: "Tha Kum Up",
        releaseDate: "Released: July 22, 2010",
        releaseType: "Mixtape",
        imageUrl: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/albums/images/24635/original/resize:300x300/crop:x0y0w1000h1000/hash:1461179172/PoP_aka_Sick_SliM_Tha_Kum_Up-front-large.jpg?1461179172",
        embedUrl: "https://www.reverbnation.com/widget_code/html_widget/Album_24635?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
    },
    
    // ... other releases
];

const MainPage = () => {
    const [selectedRelease, setSelectedRelease] = useState(null);

    useEffect(() => {
        if (releases && releases.length > 0) {
            setSelectedRelease(releases[0]);
        }
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
