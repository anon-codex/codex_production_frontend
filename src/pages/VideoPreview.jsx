import React, { useState } from "react";

function VideoPreview({ url, onDownload }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="video-container">
      <video
        className="video-player"
        id="video_dis_cont"
        controlsList="nodownload noremoteplayback"
        controls
        muted
        preload="auto"
        onLoadedData={() => setIsReady(true)}
        onContextMenu={(e) => e.preventDefault()} // 🔒 disable right-click / 3 dots
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isReady ? (
        <button className="download-btn" onClick={() => onDownload(url)}>
          Download Video
        </button>
      ) : (
        <p style={{ color: "#888", marginTop: "1rem" }}>Loading video...</p>
      )}
    </div>
  );
}

export default VideoPreview;
