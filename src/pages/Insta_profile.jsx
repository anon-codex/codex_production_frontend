import React, { useState } from "react";
import "./insta_profile.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import Insta_fun from "./Insta_fun";

function Insta_profile() {
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
      /^(https?:\/\/)?(www\.)?instagram\.com\/([a-zA-Z0-9_.]+)(\/)?(\?.*)?$/i;
    if (!allowedPattern.test(trimmed)) return false;

    // ✅ Use DOM anchor element for safe parsing
    const parser = document.createElement("a");
    parser.href = trimmed;

    // ✅ Only allow http(s)
    if (!["http:", "https:"].includes(parser.protocol)) return false;

    return true;
  }
// || !validateSafeURL(url)
  const handleSearch = async () => {
    if (!url) {
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
        `${ur}/insta_profile_api`,
        { video_url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.data) {
        setVideoData(response.data);
      } else {
        setError("⚠️ No Profile data found. Please check the link.");
      }
    } catch (err) {
      console.error("Error occurred while fetching Profile:", err);

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
    const imageUrl = videoData.data; // direct image URL from backend
    const a = document.createElement("a");
    a.href = imageUrl;

    // IMPORTANT: download only works if file is from same-origin
    const filename = imageUrl.split("/").pop() || "download.jpg";
    a.setAttribute("download", filename);

    // Trick to force download in all browsers
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {
    console.error("Image download failed:", err.message);
    // alert("Image download failed. Please try again.");
    setError("⚠️ Image download failed. Please try again.");
  } finally {
    setDownloading(false);
  }
};



  return (
    <div className="app-container">
      {/* Main Content */}
      <main className="main-content">
        <Insta_fun />

        {/* URL Input Section */}
        <div className="input-section">
          <h1>Instagram Profile Downloader</h1>
          <p>Save your favorite Instagram Profile in best quality</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Paste Instagram Profile URL here..."
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
            <p>Fetching your profile...</p>
          </div>
        )}

        {/* Video Preview and Download */}
        {videoData && !isLoading && (
          <div className="video-preview-section">
            <div className="video-container">
              <img
                src={videoData.data}

                alt="Instagram profile"
              />

              <button className="download-btn" onClick={handleDownload}>
                Download Profile
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
                <h3>Find Profile URL</h3>
                <p>
                 Open Instagram, go to the profile you want, tap the three dots on the top-right, and select "Copy Profile URL" to copy the profile link.
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
                <p>Click the download button to save the profile to your device</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Insta_profile;
