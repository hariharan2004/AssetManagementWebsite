import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connectLeap, connectKeplr } from '../Utils/Wallet'; // Import fetchBalance
import '../Styles/Header.css';
import phoneixlogo from '../Icons/phoenix-logo.png'
// Import your images
import keplrImage from '../Icons/Keplrlogo.png'; // Change the path as necessary
import leapImage from '../Icons/Leapicon.png'; // Change the path as necessary

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  const scrollToFAQ = () => {
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnectKeplr = async () => {
    const address = await connectKeplr("injective-1"); 
    if (address) {
      setWalletAddress(address);
      setDropdownOpen(false);
    }
  };

  const connectLeapWallet = async () => {
    const address = await connectLeap("injective-1");
    if (address) {
      setWalletAddress(address);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : 'no-border'}`}>
      <div className="logo">
      <Link to="/" className="logo-link">
        <img src={phoneixlogo} width={70} height={70} alt="lazarusfinance" />
        <h1 className="logo-title">LAZARUS<br />FINANCE</h1>
      </Link>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">HOME</Link>
          </li>
          <li 
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
            className={location.pathname.startsWith('/retailers') ? 'active' : ''}
          >
            <Link to="#">RETAILERS</Link>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/retailers/vaults">Vaults</Link></li>
                <li><Link to="/retailers/portfolio">Portfolio</Link></li>
                <li><Link to="/retailers/dashboard/profile">Dashboard</Link></li>
              </ul>
            )}
          </li>
          <li className={location.pathname === '/traders' ? 'active' : ''}>
            <Link to="/">TRADERS</Link>
          </li>
          <li className={location.pathname === '/markets' ? 'active' : ''}>
            <Link to="/">MARKETS</Link>
          </li>
          <li className={location.pathname === '/institutions' ? 'active' : ''}>
            <Link to="/">INSTITUTIONS</Link>
          </li>
          <li onClick={scrollToFAQ} style={{ cursor: 'pointer' }}>
            FAQ
          </li>
        </ul>
      </nav>
      <div className="wallet-container" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
        {walletAddress ? (
          <>
            <span className="wallet-address">{walletAddress}</span>
          </>
        ) : (
          <>
            <button className="connect-wallet">Connect Wallet</button>
            {dropdownOpen && (
              <div className="wallet-dropdown">
                <div className="wallet-option" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={keplrImage} alt="Keplr Wallet" style={{ width: '20px',marginRight: '8px' }} />
                  <button onClick={handleConnectKeplr}>Connect Keplr</button>
                </div>
                <div className="wallet-option" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={leapImage} alt="Leap Wallet" style={{ width: '20px', marginRight: '8px' }} />
                  <button onClick={connectLeapWallet}>Connect Leap</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
