import React, { useState } from "react";

function ImagePreview({ url, onDownload }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="video-container">
      <img
        src={url}
        alt="preview"
        className="image-player"
        onLoad={() => setIsReady(true)}
      />

      {isReady ? (
        <button className="download-btn" onClick={() => onDownload(url)}>
          Download Photo
        </button>
      ) : (
        <p style={{ color: "#888", marginTop: "1rem" }}>Loading image...</p>
      )}
    </div>
  );
}

export default ImagePreview;
