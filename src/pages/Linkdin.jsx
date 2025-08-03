import React, { useState } from "react";
import "./instadown.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function Linkdow() {
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

    const allowedPattern =
      /^(https?:\/\/)(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|instagram\.com\/reel\/|linkedin\.com\/)/i;
    if (!allowedPattern.test(trimmed)) return false;

    const parser = document.createElement("a");
    parser.href = trimmed;
    if (!["http:", "https:"].includes(parser.protocol)) return false;

    return true;
  }

  const handleSearch = async () => {
    if (!url || !validateSafeURL(url)) {
      setError("❌ Please enter a valid LinkedIn URL.");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    const ur = apiUrl;

    const video_url = url;

    try {
      const response = await axios.post(
        `${ur}/linkedin`,
        { video_url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("data ", response.data.data.url);
      if (response.data && response.data.data.url) {
        setVideoData(response.data.data);
      } else {
        setError("⚠️ No video data found. Please check the link.");
      }
    } catch (err) {
      console.error("Error occurred while fetching video:", err);

      if (err.response) {
        if (err.response.status === 429) {
          setError("🚫 Too many requests. Please wait and try again later.");
        } else if (err.response.status === 403 || err.response.status === 401) {
          setError("🔐 Invalid API key or unauthorized access.");
        } else if (err.response.data && err.response.data.message) {
          setError(`❌ ${err.response.data.message}`);
        } else {
          setError("❌ Server error occurred. Please try again.");
        }
      } else if (err.request) {
        setError("⚠️ No response from server. Check your internet connection.");
      } else {
        setError("⚠️ Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    const url = videoData?.url;
    if (!url) return alert("Download link not found");

    setDownloading(true);

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create temporary blob link
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${Date.now()}_linkedin.mp4`; // Set filename
      document.body.appendChild(a);
      a.click();

      // Clean up
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err.message);
      alert("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  //   const handleDownload = () => {
  //     setDownloading(true);
  //     try {
  //       const url = videoData.url;
  //       const a = document.createElement("a");
  //       a.href = url;
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //       window.URL.revokeObjectURL(url);
  //     } catch (err) {
  //       console.error("Download failed:", err.message);
  //       alert("Download failed. Please check the link.");
  //     } finally {
  //       setDownloading(false);
  //     }
  //   };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      {/* <nav className="navbar">
        <div className="nav-brand">
          <div className="logo"> <img style={{width:"130px", height:"35px"}} src={logo} alt="" /></div>
        </div>

        <div className="nav-links">
          <Link className="nav-link" to="/">
            Instagram
          </Link>
          <Link className="nav-link active" to="/linkedow">
            LinkedIn
          </Link>
          <Link className="nav-link" to="/pindow">
            Pinterest
          </Link>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="main-content">
        {/* URL Input Section */}
        <div className="input-section">
          <h1>LinkedIn Video Downloader</h1>
          <p>Save your favorite LinkedIn videos in high quality</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Paste LinkedIn video URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
           <span style={{color:"red"}}>{error}</span>
        </div>

        {/* Fetching Animation */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>Fetching your video...</p>
          </div>
        )}

        {/* Video Preview and Download */}
        {videoData && !isLoading && (
          <div className="video-preview-section">
            <div className="video-container">
              <video
                controls
                className="video-player"
                poster="https://via.placeholder.com/400x600?text=LinkedIn+Video"
                autoPlay
                muted
              >
                <source src={videoData.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="download-btn" onClick={handleDownload}>
                Download Video
              </button>
            </div>
          </div>
        )}

        {/* Secure/Fast/No Login Info Strip */}
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

        {/* How to Download Steps */}
        <div className="steps-section">
          <h2>How to Download</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Find Video URL</h3>
                <p>
                  Open LinkedIn, tap the three-dot menu on the video, and select
                  "Copy Link"
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Paste URL</h3>
                <p>
                  Paste the copied link into the search bar above and click
                  "Search"
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Download & Save</h3>
                <p>
                  Click the download button to save the video to your device
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      {/* <footer className="footer">
        <p>© 2025 LinkedinDownloader. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Linkdow;
