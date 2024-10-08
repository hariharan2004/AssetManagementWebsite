import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connectLeap, connectKeplr } from '../Utils/Wallet';
import '../Styles/Header.css';
import phoneixlogo from '../Icons/phoenix-logo.png';
import keplrImage from '../Icons/Keplrlogo.png';
import leapImage from '../Icons/Leapicon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close menu on item click
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
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={handleMenuItemClick}>HOME</Link>
          </li>
          <li 
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
            className={location.pathname.startsWith('/retailers') ? 'active' : ''}
          >
            <Link 
              to="#" 
              onClick={(e) => { e.preventDefault(); handleMenuItemClick(); }}
            >
              RETAILERS
            </Link>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/retailers/vaults" onClick={handleMenuItemClick}>Vaults</Link></li>
                <li><Link to="/retailers/portfolio" onClick={handleMenuItemClick}>Portfolio</Link></li>
                {window.innerWidth >= 780 && (
                  <li><Link to="/retailers/dashboard/profile" onClick={handleMenuItemClick}>Dashboard</Link></li>
                )}
              </ul>
            )}
          </li>
          <li className={location.pathname === '/traders' ? 'active' : ''}>
            <Link to="/" onClick={handleMenuItemClick}>TRADERS</Link>
          </li>
          <li className={location.pathname === '/markets' ? 'active' : ''}>
            <Link to="/" onClick={handleMenuItemClick}>MARKETS</Link>
          </li>
          <li className={location.pathname === '/institutions' ? 'active' : ''}>
            <Link to="/" onClick={handleMenuItemClick}>INSTITUTIONS</Link>
          </li>
          <li className={location.pathname === '/roadmap' ? 'active' : ''}>
            <Link to="/retailers/roadmap" onClick={handleMenuItemClick}>ROADMAP</Link>
          </li>
          <li onClick={() => { scrollToFAQ(); handleMenuItemClick(); }} style={{ cursor: 'pointer' }}>
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
                  <img src={keplrImage} alt="Keplr Wallet" style={{ width: '20px', marginRight: '8px' }} />
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
