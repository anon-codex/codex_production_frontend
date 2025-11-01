import React from 'react'

const Seo = () => {
  return (
    <>
     {/* SEO Blog Section */}
 <section
  style={{
    background: "",
    color: "black",
    padding: "3rem 1rem",
    borderRadius: "25px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
    marginTop: "100px",
    border: "2px solid #ffffff33",
    position: "relative",
    overflow: "hidden"
  }}
>
  {/* Animated Background Elements */}
  <div style={{
    position: "absolute",
    top: "-50%",
    right: "-10%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #ffffff33 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "float 6s ease-in-out infinite"
  }}></div>

  <h2
    style={{
      fontSize: "1.8rem",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "800",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      lineHeight: "1.3",
      position: "relative",
      zIndex: "2",
      color:"white"
    }}
  >
     Download Instagram Reels, Stories & Highlights in HD Quality - 100% Free!
  </h2>

  <p
    style={{
      fontSize: "1.2rem",
      lineHeight: "1.9",
      textAlign: "center",
      marginBottom: "2rem",
      fontWeight: "500",
      position: "relative",
      zIndex: "2"
    }}
  >
    Looking for the <strong style={{ color: "#afb10eee", fontSize: "1.3rem" }}>best Instagram video downloader</strong>? 
    GrabShort lets you <strong style={{ color: "#4caf50" }}>download Instagram Reels, Stories, Highlights, videos</strong> 
    in <strong style={{ color: "#00bcd4" }}>high-definition quality</strong> without any watermark!
  </p>

  {/* Feature Cards Grid */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    margin: "2.5rem 0",
    position: "relative",
    zIndex: "2"
  }}>
    <div style={{
      background: "rgba(255,255,255,0.15)",
      padding: "10px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)"
    }}>
      <h4 style={{ color: "#4caf50", marginBottom: "1rem", fontSize: "1.3rem" }}>⭐ 100% Free & Safe</h4>
      <p>No registration required, no hidden costs. Completely secure and privacy-focused.</p>
    </div>
    <div style={{
      background: "rgba(255,255,255,0.15)",
      padding: "5px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)"
    }}>
      <h4 style={{ color: "#ff9800", marginBottom: "1rem", fontSize: "1.3rem" }}>🎯 HD Quality Videos</h4>
      <p>Download Instagram videos in highest available quality up to 1080p resolution.</p>
    </div>
    <div style={{
      background: "rgba(255,255,255,0.15)",
      padding: "1.5rem",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)"
    }}>
      <h4 style={{ color: "#00bcd4", marginBottom: "1rem", fontSize: "1.3rem" }}>⚡ Lightning Fast</h4>
      <p>Instant processing and downloading. Save time with our optimized servers.</p>
    </div>
  </div>

  {/* Step-by-Step Guide */}
  <div style={{
    background: "rgba(255,255,255,0.1)",
    padding: "0rem",
    borderRadius: "20px",
    margin: "2.5rem 0",
    border: "1px solid rgba(255,255,255,0.3)",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "#00bcd4", fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
      📱 How to Download Instagram Reels - Step by Step Guide
    </h3>
    
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      counterReset: "step-counter"
    }}>
      {[
        {
          title: "Copy Instagram Link",
          desc: "Open Instagram app, find the reel/story you want to download, and copy the link from share menu."
        },
        {
          title: "Paste on GrabShort",
          desc: "Visit GrabShort.online and paste the copied Instagram URL in the download box."
        },
        {
          title: "Click Download",
          desc: "Press the search button and select your preferred video quality for download."
        },
        {
          title: "Save to Device",
          desc: "Your Instagram video will download instantly. Save it to your gallery or files."
        }
      ].map((step, index) => (
        <div key={index} style={{
          background: "rgba(255,255,255,0.15)",
          padding: "0.5rem",
          borderRadius: "15px",
          position: "relative",
          textAlign: "center"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(45deg, #ff4081, #7c4dff)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>
            {index + 1}
          </div>
          <h4 style={{ color: "#f8a76c", marginBottom: "1rem" }}>{step.title}</h4>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{step.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Advanced Features */}
  <div style={{
    margin: "2.5rem 0",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "#ff9800", fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
      🎨 Advanced Download Features
    </h3>
    
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem"
    }}>
      <div style={{
        background: "rgba(0,0,0,0.2)",
        padding: "1.5rem",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>📸 Instagram Stories Downloader</h4>
        <p>Download both images and videos from Instagram Stories. Works with public accounts and highlights.</p>
      </div>
      <div style={{
        background: "rgba(0,0,0,0.2)",
        padding: "1.5rem",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h4 style={{ color: "#00bcd4", marginBottom: "1rem" }}>🎭 Instagram Highlights Saver</h4>
        <p>Save complete highlight collections from any public Instagram profile permanently.</p>
      </div>
      <div style={{
        background: "rgba(0,0,0,0.2)",
        padding: "1.5rem",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <h4 style={{ color: "#ff4081", marginBottom: "1rem" }}>📹 Instagram Video Downloader</h4>
        <p>Download longer Instagram videos in original quality. Perfect for tutorials and long-form content.</p>
      </div>
    </div>
  </div>

  {/* Platform Support */}
  <div style={{
    background: "rgba(255,255,255,0.1)",
    padding: "2rem",
    borderRadius: "20px",
    margin: "2.5rem 0",
    textAlign: "center",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "#00bcd4", fontSize: "2rem", marginBottom: "1rem" }}>
      🌐 Multi-Platform Support
    </h3>
    <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
      GrabShort isn't just for Instagram! We support multiple social media platforms:
    </p>
    
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "2rem"
    }}>
      {['LinkedIn Video Downloader', 'Pinterest Video Saver', 'Facebook Video Download', 
        'Instagram Video Download'].map((platform, index) => (
        <span key={index} style={{
          background: "rgba(255,255,255,0.2)",
          padding: "0.5rem 1rem",
          borderRadius: "25px",
          border: "1px solid rgba(255,255,255,0.3)",
          fontSize: "0.9rem"
        }}>
          {platform}
        </span>
      ))}
    </div>
  </div>

  {/* FAQ Section */}
  <div style={{
    margin: "2.5rem 0",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "red", fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
      ❓ Frequently Asked Questions
    </h3>
    
    <div style={{
      display: "grid",
      gap: "1rem"
    }}>
      {[
        {
          q: "Is it legal to download Instagram videos?",
          a: "Yes, for personal use. However, respect copyright laws and don't redistribute content without permission."
        },
        {
          q: "Does this work on mobile devices?",
          a: "Absolutely! GrabShort is fully optimized for mobile, tablet, and desktop browsers."
        },
        {
          q: "Are private account videos downloadable?",
          a: "No, due to Instagram's privacy policy, only public account content can be downloaded."
        },
        {
          q: "Is there any quality loss during download?",
          a: "No! We maintain the original quality of Instagram videos up to 1080p HD."
        },
        {
          q: "Do you store my personal data?",
          a: "Never! We don't store any personal information or downloaded content on our servers."
        }
      ].map((faq, index) => (
        <div key={index} style={{
          background: "rgba(255,255,255,0.1)",
          padding: "1.5rem",
          borderRadius: "15px",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <h4 style={{ color: "#4caf50", marginBottom: "0.5rem" }}>Q: {faq.q}</h4>
          <p style={{ margin: 0, lineHeight: "1.6" }}>A: {faq.a}</p>
        </div>
      ))}
    </div>
  </div>

  {/* SEO Keywords Section */}
  <div style={{
    background: "#c0c4cc",
    padding: "2rem",
    borderRadius: "15px",
    marginTop: "2.5rem",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "#ff9800", textAlign: "center", marginBottom: "1rem" }}>
      🔍 SEO Optimized Keywords
    </h3>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      justifyContent: "center"
    }}>
      {[
        "Instagram Reel Downloader", "Download Instagram Stories", "Instagram Highlights Saver",
        "Free Instagram Video Downloader", "HD Instagram Downloader", "Instagram Reels Without Watermark",
        "Online Instagram Downloader", "Save Instagram Videos", "Instagram Story Downloader 2025",
        "Best Instagram Download Tool", "Multi-Platform Video Downloader", "Social Media Video Saver",
        "Instagram Content Download", "Video Downloader for Instagram", "GrabShort Instagram Downloader"
      ].map((keyword, index) => (
        <span key={index} style={{
          background: "rgba(255,255,255,0.1)",
          padding: "0.4rem 0.8rem",
          borderRadius: "20px",
          fontSize: "0.8rem",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          {keyword}
        </span>
      ))}
    </div>
  </div>

  {/* CTA Section */}
  <div style={{
    textAlign: "center",
    marginTop: "3rem",
    position: "relative",
    zIndex: "2"
  }}>
    <h3 style={{ color: "#ffffff", fontSize: "1.8rem", marginBottom: "1rem" }}>
      Ready to Download Your Favorite Instagram Content?
    </h3>
    <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: "0.9" }}>
      Join thousands of users who trust GrabShort for their social media downloading needs!
    </p>
    <a 
      href="https://www.grabshort.online"
      style={{
        background: "linear-gradient(45deg, #ff4081, #7c4dff)",
        color: "white",
        padding: "1rem 2.5rem",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
        display: "inline-block",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease"
      }}
      onMouseOver="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.4)';"
      onMouseOut="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.3)';"
    >
       Start Downloading Now!
    </a>
  </div>

  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
    `}
  </style>
</section>

    </>
  )
}

export default Seo