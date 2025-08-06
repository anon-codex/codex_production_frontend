import React, { useState } from "react";

function VideoPreview({ url, onDownload }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="video-container">
      <video
        className="video-player"
        controls
        muted
        preload="auto"
        onLoadedData={() => setIsReady(true)}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isReady ? (
        <button className="download-btn" onClick={() => onDownload(url)}>
          Download
        </button>
      ) : (
        <p style={{ color: "#888", marginTop: "1rem" }}>Loading video...</p>
      )}
    </div>
  );
}

export default VideoPreview;
