import React, { useState } from "react";
import "./instadown.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import Insta_fun from "./Insta_fun";
import { Helmet } from "react-helmet";

function Instadow() {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  function validateSafeURL(url) {
    if (!url || typeof url !== "string") return false;

    const trimmed = url.trim().toLowerCase();

    // ❌ Block if contains XSS payloads or dangerous schemes
    const blackList = ["<", ">", "javascript:", "data:", "onerror=", "onload="];
    for (const bad of blackList) {
      if (trimmed.includes(bad)) return false;
    }

    // ✅ Allow only trusted video domains
    const allowedPattern =
      /^(https?:\/\/)(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|instagram\.com\/reel\/|linkedin\.com\/)/i;
    if (!allowedPattern.test(trimmed)) return false;

    // ✅ Use DOM anchor element for safe parsing
    const parser = document.createElement("a");
    parser.href = trimmed;

    // ✅ Only allow http(s)
    if (!["http:", "https:"].includes(parser.protocol)) return false;

    return true;
  }

  const handleSearch = async () => {
    if (!url || !validateSafeURL(url)) {
      setError("❌ Please enter a valid Instagram URL.");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    const ur = apiUrl;

    const video_url = url;

    try {
      const response = await axios.post(
        `${ur}/insta`,
        { video_url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data) &&
        response.data.data.length > 0
      ) {
        setVideoData(response.data);
      } else {
        setError("⚠️ No video data found. Please check the link.");
      }
    } catch (err) {
      console.error("Error occurred while fetching video:", err);

      // Smart error detection
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

  const handleDownload = () => {
  
    setDownloading(true);
    try {
      const url = videoData?.data?.[0]?.url;

      const a = document.createElement("a");
      a.href = url;
     
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err.message);
      setError("⚠️ Download failed. Please check the link.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="app-container">
       <Helmet>
         <title>Instagram Video Downloader - Free & Fast</title>
        <meta
          name="description"
          content="Download Instagram reels, stories, and videos in HD. No watermark, no login required."
        />
        <meta
          name="keywords"
          content="Instagram downloader, Instagram reels download, video downloader, free Instagram videos"
        />
        <link rel="canonical" href="https://grabshort.com/insta" />
      </Helmet>   
 
      {/* Main Content */}
      <main className="main-content">
        
          <Insta_fun />


        {/* URL Input Section */}
        <div className="input-section">
          <h1>Instagram Reels Downloader</h1>
          <p>Save your favorite Instagram Reels in high quality</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Paste Instagram Reel URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
          <span style={{ color: "red" }}>{error}</span>
        </div>

        {/* Fetching Animation */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>Fetching your reel...</p>
          </div>
        )}

        {/* Video Preview and Download */}
        {videoData && !isLoading && (
          <div className="video-preview-section">
            <div className="video-container">
              <video
                controls
                autoPlay
                muted
                style={{
                  width: "90%",
                  maxWidth: "640px",
                  aspectRatio: "9 / 16",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                  margin: "0 auto",
                  display: "block",
                }}
              >
                <source src={videoData?.data?.[0]?.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button className="download-btn" onClick={handleDownload}>
                Download Reel
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
                <h3>Find Reel URL</h3>
                <p>
                  Open Instagram, tap the share button on the reel, and select
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
                <p>Click the download button to save the reel to your device</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Instadow;
