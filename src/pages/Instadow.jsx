import React, { useState, useEffect } from "react";
import "./instadown.css";
import axios from "axios";
import Insta_fun from "./Insta_fun";
import { Helmet } from "react-helmet-async";
import Seo from "./Seo";

const apiUrl = import.meta.env.VITE_API_URL;

function Instadow() {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    async function warmUp() {
      const video_url =
        "https://www.instagram.com/reel/DLrsVh4yxr7/?utm_source=ig_web_copy_link";
      try {
        const response = await axios.post(
          `${apiUrl}/insta`,
          { video_url },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Warm-up success:", response.data);
      } catch (error) {
        console.log("Warm-up error:", error);
      }
    }
    warmUp();
  }, []);

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
      setError("❌ Please enter a valid Instagram URL.");
      return;
    }
    setLoading(true);
    setError("");
    setVideoData(null);
    try {
      const response = await axios.post(
        `${apiUrl}/insta`,
        { video_url: url },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data?.data?.length > 0) {
        setVideoData(response.data);
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
        } else if (err.response.data?.message) {
          setError(`${err.response.data.message}`);
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
      {/* ✅ SEO Optimized Meta Tags */}
      <Helmet>
        <title>
          Instagram Reels & Pinterest Video Downloader | Free HD Online Tool
        </title>
        <meta
          name="description"
          content="Download Instagram Reels, Stories, Highlights, and Pinterest videos in HD quality. 100% free, no login required, and works on all devices."
        />
        <meta
          name="keywords"
          content="Instagram Reels downloader, Instagram story saver, Pinterest video downloader, Download Instagram Reels online, Download Pinterest videos HD, Free Instagram downloader, Save Reels online, All-in-one social media downloader"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="https://www.grabshort.online" />
        <meta
          property="og:title"
          content="Instagram & Pinterest Video Downloader"
        />
        <meta
          property="og:description"
          content="Easily download Instagram Reels, Stories, and Pinterest videos online in HD for free. No login required!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grabshort.online" />
        <meta
          property="og:image"
          content="https://www.grabshort.online/logo.png"
        />
      </Helmet>

      <main className="main-content">
        <Insta_fun />

        {/* Input Section */}
        <div className="input-section">
          <h1 style={{color:"orange"}}>Instagram Reels Downloader</h1>
          <p>Save your favorite Instagram Reels in high quality</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Paste Instagram Reel URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? "Searching..." : "Download"}
            </button>
          </div>
          <span style={{ color: "red" }}>{error}</span>
        </div>

        {/* Loader */}
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

        {/* Video Display */}
        {videoData && !isLoading && (
          <div className="video-preview-section">
            <div className="video-container">
              <span style={{ fontSize: "140%" }}>Search Result</span>
              <video
                id="video_diss_cont"
                controls
                autoPlay
                muted
                controlsList="nodownload noremoteplayback"
                style={{
                  // maxWidth: "37%",
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

        {/* Steps */}
        {/* <div className="steps-section">
          <h2>How to Download</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Find Reel URL</h3>
                <p>
                  Open Instagram, tap the share button, and copy the Reel link.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Paste URL</h3>
                <p>
                  Paste the link above and click “Search” to fetch the video.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Download & Save</h3>
                <p>
                  Click “Download” to save the Reel or Pinterest video in HD.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* ✅ SEO Blog Section (Styled with your gradient colors) */}
      < Seo />
       
      
      </main>
    </div>
  );
}

export default Instadow;
