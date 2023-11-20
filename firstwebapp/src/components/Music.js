import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';

const albums = [
    { 
      title: "Album Example 1", 
      description: "Released: 11-19-2023",
      songs: [
        { title: "Yeezy Remix", url: "https://drive.google.com/uc?export=download&id=1YXaNtSP_mEiNizVY6a-tuUUlA-eugudy" },
        { title: "Entrance", url: "https://www.reverbnation.com/soundofknowledge/song/5301616-entrance" },
        // more songs
      ]
    },
    // ... other albums
];

const Music = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentSongUrl, setCurrentSongUrl] = useState(null);

    return (
        <Container style={{ marginTop: '40px', marginBottom: '75px' }}>
            {albums.map((album, index) => (
                <Card key={index} sx={{ marginBottom: 4 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {album.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {album.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => setSelectedAlbum(album)}>Play</Button>
                    </CardActions>
                </Card>
            ))}
            {selectedAlbum && (
                <div>
                    <Typography variant="h5" gutterBottom>
                        {selectedAlbum.title}
                    </Typography>
                    {selectedAlbum.songs.map((song, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <Button 
                                variant="body1" 
                                style={{ marginRight: '10px', cursor: 'pointer' }}
                                onClick={() => setCurrentSongUrl(song.url)}
                            >
                                {song.title}
                            </Button>
                        </div>
                    ))}
                </div>
            )}
            {currentSongUrl && <ReactAudioPlayer src={currentSongUrl} controls autoPlay />}
            <Typography variant="h3" gutterBottom align="center">
                Mixtapes
            </Typography>
            <Typography variant="h6">
                Remember Me
            </Typography>
            <Typography variant="body2" gutterBottom>
                Released: March 20, 2013
            </Typography>
            <iframe
                title="Reverbnation Remember Me Widget"
                width="100%"
                height="300"
                scrolling="no"
                frameborder="0"
                src="https://www.reverbnation.com/widget_code/html_widget/Album_23476?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
                style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
            </iframe>
            <Typography variant="h6">
                Before The First Album
            </Typography>
            <Typography variant="body2" gutterBottom>
                Released: March 20, 2012
            </Typography>
            <iframe
                title="Reverbnation Before The First Album Widget"
                width="100%"
                height="300"
                scrolling="no"
                frameborder="0"
                src="https://www.reverbnation.com/widget_code/html_widget/Album_24307?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
                style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
            </iframe>
            <Typography variant="h6">
                18 & On Probation
            </Typography>
            <Typography variant="body2" gutterBottom>
                Released: May 7, 2011
            </Typography>
            <iframe
                title="Reverbnation 18 & On Probation Widget"
                width="100%"
                height="300"
                scrolling="no"
                frameborder="0"
                src="https://www.reverbnation.com/widget_code/html_widget/Album_24634?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
                style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
            </iframe>
            <Typography variant="h6">
                Tha Kum Up
            </Typography>
            <Typography variant="body2" gutterBottom>
                Released: July 22, 2010
            </Typography>
            <iframe
                title="Reverbnation Widget"
                width="100%"
                height="300"
                scrolling="no"
                frameborder="0"
                src="https://www.reverbnation.com/widget_code/html_widget/Album_24635?widget_id=55&pwc[included_songs]=1&context_type=album&pwc[size]=small&pwc[color]=dark"
                style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
            </iframe>
        </Container>
        
    );
}

export default Music;
