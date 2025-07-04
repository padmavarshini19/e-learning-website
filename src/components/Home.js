import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  // Carousel Images
  const carouselImages = [
    { src: "/img/c1.png", alt: "First Slide", caption: "Learn Anytime, Anywhere" },
    { src: "/img/c2.png", alt: "Second Slide", caption: "Explore New Skills" },
    { src: "/img/c3.png", alt: "Third Slide", caption: "Achieve Your Goals" },
  ];


  const videos = [
    { title: "React JS", description: "Learn React Basics", url: "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" },
    { title: "JS", description: "Advanced JavaScript", url: "https://www.youtube.com/watch?v=R9I85RhI7Cg" },
    { title: "Python", description: "Python for Beginners", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=13s" },
    { title: "Data science", description: "Data Science Crash Course", url: "https://www.youtube.com/watch?v=N6BghzuFLIg" },
  ];

  // Function to extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1]; // Return video ID or null if not matched
  };

  return (
    <div id="content-home">
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h2>Welcome to the E-Learning Platform</h2>
        <p>Learn, grow, and succeed with our curated courses and materials.</p>
      </header>

      {/* Carousel */}
      <Carousel>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Video Grid */}
      <div className="video-grid-section" style={{ padding: '20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Top Picks</h3>
        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {videos.map((video, index) => {
            const videoId = getYouTubeVideoId(video.url); // Get video ID from URL
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Construct thumbnail URL

            return (
              <div key={index} className="video-card" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px', textAlign: 'left' }}>
                <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" style={{ width: '100%', borderRadius: '5px' }} />
                <h4 style={{ margin: '10px 0', color: '#007bff' }}>{video.title}</h4>
                <p style={{ fontSize: '14px', color: '#555' }}>{video.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f8f9fa' }}>
        <p>© 2025 E-Learning Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
