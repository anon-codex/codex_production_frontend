import React, { useState } from "react"; 
import "./insta_story.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import Insta_fun from "./Insta_fun";
import VideoPreview from "./VideoPreview";

function Insta_story() {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  function validateSafeURL(url) {
    if (!url || typeof url !== "string") return false;
    const trimmed = url.trim().toLowerCase();
    const blackList = ["<", ">", "javascript:", "data:", "onerror=", "onload="];
    for (const bad of blackList) {
      if (trimmed.includes(bad)) return false;
    }
    
      const allowedPattern = /^(https?:\/\/)?(www\.)?instagram\.com\/s\/[a-zA-Z0-9_-]+\?story_media_id=\d+(_\d+)?(&.*)?$/i;;

    if (!allowedPattern.test(trimmed)) return false;

    const parser = document.createElement("a");
    parser.href = trimmed;

    if (!["http:", "https:"].includes(parser.protocol)) return false;
    return true;
  }

  const handleSearch = async () => {
    if (!url) {
      setError("❌ Please enter a valid Instagram URL.");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await axios.post(
        `${apiUrl}/insta_highlight_api`,
        { video_url: url },
        { headers: { "Content-Type": "application/json" } }
      );

      if (
        response.data.data &&
        Array.isArray(response.data.data.data) &&
        response.data.data.data.length > 0
      ) {
        setVideoData(response.data.data);
      } else {
        setError("⚠️ No video data found. Please check the link.");
      }
    } catch (err) {
      console.error("Error occurred while fetching video:", err);
      if (err.response?.status === 429) {
        setError("🚫 Too many requests. Please wait and try again later.");
      } else if (err.response?.status === 403 || err.response?.status === 401) {
        setError("🔐 Invalid API key or unauthorized access.");
      } else if (err.response?.data?.message) {
        setError(`❌ ${err.response.data.message}`);
      } else if (err.request) {
        setError("⚠️ No response from server. Check your internet connection.");
      } else {
        setError("⚠️ Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (url) => {
    setDownloading(true);
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = "highlight.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err.message);
      alert("Download failed. Please check the link.");
    } finally {
      setDownloading(false);
    }
  };




  return (
    <div className="app-container">
      <main className="main-content">
        <Insta_fun />

        {/* URL Input Section */}
        <div className="input-section">
          <h1>Instagram Highlights Downloader</h1>
          <p>Save your favorite Instagram Highlights in best quality</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Paste Instagram Highlights URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
          <span style={{ color: "red" }}>{error}</span>
        </div>

        {/* Loading Animation */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>Fetching your highlight...</p>
          </div>
        )}

        {/* Video Preview */}
        {videoData && !isLoading && (
          <div className="video-preview-section">
            {videoData.data.map((data, index) => (
              <VideoPreview key={index} url={data.url} onDownload={handleDownload} />
            ))}
          </div>
        )}

        {/* Info Strip */}
        <div className="info-strip">
          <div className="info-card">
            <span className="info-icon">🔒</span>
            <span className="info-text">Secure</span>
          </div>
          <div className="info-card">
            <span className="info-icon">🚫</span>
            <span className="info-text">No Login Required</span>
          </div>
          <div className="info-card">
            <span className="info-icon">⚡</span>
            <span className="info-text">Fast Download</span>
          </div>
        </div>

        {/* Steps Section */}
        <div className="steps-section">
          <h2>How to Download</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Find Highlight URL</h3>
                <p>Open Instagram, copy the link of the highlight you want to download.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Paste URL</h3>
                <p>Paste the copied link into the search bar and click Search.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Download</h3>
                <p>Click the Download button once the highlight loads fully.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Insta_story;
