import React from 'react';
import ReactPlayer from 'react-player';

const PeopleSay = () => {
  // Video data stored in JSON format
  const videoData = [
    { id: 1, url: "/videos.mp4", title: "Session 1" },
    { id: 2, url: "/video2.mp4", title: "Session 2" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    { id: 3, url: "/video3.mp4", title: "Session 3" },
    // Add more videos here as needed
  ];

  return (
    <>
      <section className="bg-primary2 Blog-Video-Notice-wrapper mt-5 p-5">
        <div className="mb-0 text-center pt-5">
          <h2 className="text-center text-white">Sessions Videos Classes</h2>
          <hr />
        </div>
        <div className="container text-wrapper-combine-vbn">
          <div className="row">
            {videoData.map(video => (
              <div className="col-lg-4" key={video.id}>
                <hr />
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="286px"
                  controls={true}
                  playing={true}  // Auto play video
                  loop={true}     // Enable looping
                  muted={true}    // Mute the video for autoplay
                />
              </div>
            ))}
            
            {/* CTA Section */}
            <div className="container p-5 mt-5" style={{ backgroundColor: "#4AD44A", borderRadius: '25px' }}>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h1 className="font28px">
                  Book Your Seat For Free Career Counselling!
                </h1>
                <button className="btn ApplyNow">APPLY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PeopleSay;
