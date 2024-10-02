import React from "react";
import "../Styles/Home.css"; // Assuming the CSS file will be stored here
import asset from '../Images/asset-logo.png';
import { Link } from "react-router-dom";
const Home = () => {
  const roadmapData = [
    {
      side: "left",
      status:"completed",
      title: "Automated Technicals - Q3 2024",
      description: "Integration of TA tools like Bollinger Bands, Moving Averages, Fibonacci Levels, Support, and Resistances.",
    },
    {
      side: "right",
      status:"inprogress",
      title: "UI Development - Q4 2024",
      description: "Design a user-friendly interface and complete the frontend part."
    },
    {
      side: "left",
      status:"inprogress",
      title: "Deep Learning Model - Q4 2024",
      description: "Development of a Deep Learning Model that understands patterns and identifies key support and resistances.",
    },
    {
      side: "right",
      status:"inprogress",
      title: "Testnet Deployment - Q1 2025",
      description: "Deploy the model to Testnet to be accessible for the public.",
    },
    {
      side: "left",
      status:"inprogress",
      title: "Reinforcement Model - Q1 2025",
      description: "Build an RL model to optimize the investment strategy.",
    },
    {
      side: "right",
      status:"inprogress",
      title: "Marketing and Collabs - Q1 2025",
      description: "Develop a marketing strategy and reach out for partnerships with other projects.",
    },
    {
      side: "left",
      status:"inprogress",
      title: "Mainnet Deployment - Q2 2025",
      description: "Pushing the model for real-time working.",
    },
  ];

  return (
    <main className="home-section">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Algorithmic Trading For Everyone</h1>
            <p>
              Empowering retail investors to navigate crypto markets confidently, reducing risks and enhancing profitability, regardless of market conditions. Paving the way for a secure and profitable crypto future.
            </p>
            <div className="buttons">
              <Link to="/retailers/vaults" className="trade-now">TRADE NOW!</Link>
              <a className="whitepaper" href="https://lazarus-finance.gitbook.io/lazarusfinance" target="_blank" rel="noreferrer">WHITEPAPER</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={asset} alt="Trading graph" />
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <section className="roadmap">
        <h1 id="heading-roadmap">ROADMAP</h1>
        <div className="roadmap-container">
          {roadmapData.map((item, index) => (
            <div key={index} className={`roadmap-item ${item.side}`}>
              <div className={`dot-${item.status}`}></div>
              <div className={`roadmap-content ${item.side}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section class="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-container">
    <div class="faq-item">
      <h3>What is Lazarus Finance?</h3>
      <p>
        Lazarus Finance is an AI-driven asset management protocol that is designed to help retail investors trade and invest in digital assets with ease.
      </p>
    </div>
    <div class="faq-item">
      <h3>How do Lazarus Finance differ from others?</h3>
      <p>
        Unlike other protocols which depend on unlikely strategies, Lazarus Finance focuses on a real-time trader approach via AI to invest in the market.
      </p>
    </div>
    <div class="faq-item">
      <h3>How does the AI algorithm work?</h3>
      <p>
        Our AI algorithms use deep learning and reinforcement learning to analyze market data and make real-time trading decisions.
      </p>
    </div>
    <div class="faq-item">
      <h3>What security measures are in place?</h3>
      <p>
        We use encryption, two-factor authentication, and regular security audits to protect your data and funds.
      </p>
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;
