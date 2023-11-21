import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';

const albums = [
    { 
      title: "Album Example 1", 
      description: "Released: 11-19-2023",
      songs: [
        { title: "Yeezy Remix", url: "https://drive.google.com/uc?export=download&id=1YXaNtSP_mEiNizVY6a-tuUUlA-eugudy" },
        { title: "Entrance", url: "https://www.reverbnation.com/soundofknowledge/song/5301616-entrance" }, {/* This URL is not working. Needs updating */}
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
        </Container>
        
    );
}

export default Music;
