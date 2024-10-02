import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Vaultdetail.css'; // Ensure the CSS file is linked properly
import bitcoinLogo from '../Icons/bitcoin.png';
import ethereumLogo from '../Icons/etherum.png';
import injectiveLogo from '../Icons/injective.svg';

const VaultDetail = () => {
  const { vaultName } = useParams(); // Access the vault name from URL

  // Example data
  const vaultData = {
    'btcusdt': {
      name: 'BTC/USDT',
      asset: '$100',
      profit: '$50',
      roi: '50%',
      address: 'inj19za42zcxjabcd8wny65t99ey2l3muh62pa6wyj',
      invested: "$100",
      current: "$150",
      entryPrice: "$62,560",
      exitPrice: "$64,020",
      logo: bitcoinLogo,
    },
    'ethusdt': {
      name: 'ETH/USDT',
      asset: '$100',
      profit: '$50',
      roi: '50%',
      address: 'inj19za42zcxjabcd8wny65t99ey2l3muh62pa6wyj',
      invested: "$100",
      current: "$150",
      entryPrice: "$2,150",
      exitPrice: "$2,670",
      logo: ethereumLogo,
    },
    'injusdt': {
      name: 'INJ/USDT',
      asset: '$100',
      profit: '$50',
      roi: '50%',
      address: 'inj19za42zcxjabcd8wny65t99ey2l3muh62pa6wyj',
      invested: "$100",
      current: "$150",
      entryPrice: "$13",
      exitPrice: "$21",
      logo: injectiveLogo,
    },
    // Additional vaults can be added here
  };

  const vault = vaultData[vaultName] || { name: 'Vault not found', asset: '', profit: '', roi: '', address: '' };

  return (
    <>
    <div className="vault-detail-container">
      {/* Left Box for Vault Performance */}
      <div className="left-empty-box">
        <div className="left-box-content">
          <img src={vault.logo} width={50} height={50} alt={`${vault.name} logo`} />
          <div className="vault-title">
            <h2>{vault.name}</h2>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="vault-content">
        <div className="vault-perf-container">
          {/* Vault Info and Deposit/Withdraw */}
          <div className="vault-info-actions-row">
            {/* Vault Info */}
            <div className="vault-info">
              <h2 className="vault-info-heading">VAULT INFO</h2>
              <div className="vault-address">{vault.address}</div>
              <div className="vault-stats">
                <div className="vault-stat">
                  <span style={{color:'#AF27DD'}}>Asset</span>
                  <p>{vault.asset}</p>
                </div>
                <div className="vault-stat">
                  <span style={{color:'#AF27DD'}}>Profit</span>
                  <p style={{color:'#00FF44'}}>{vault.profit}</p>
                </div>
                <div className="vault-stat">
                  <span style={{color:'#AF27DD'}}>ROI</span>
                  <p style={{color:'#00FF44'}}>{vault.roi}</p>
                </div>
              </div>
            </div>

            {/* Deposit/Withdraw - Moved Below Vault Info */}
            <div className="vault-actions">
              <div className="deposit-withdraw-header">
                <h4 style={{color:'#FF6F00'}}>DEPOSIT</h4>
                <h4 style={{color:'#FF6F00'}}>WITHDRAW</h4>
              </div> 
              <div className="deposit-input">
                <input type="number" placeholder="0" className="amount-input" />
                <span className="currency-label" style={{color:'#AF27DD'}}>USDT</span>
              </div>
              <div className="balance-container">
                <span style={{color:'#AF27DD'}}>BALANCE: $100</span>
                <button className="max-button" style={{color:'#AF27DD'}}>MAX</button>
              </div>
              <button className="deposit-button">DEPOSIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='main-second'>
      <div className="main-second-left-empty-box">
        <div className="main-second-left-box-content">
          <img src={vault.logo} width={50} height={50} alt={`${vault.name} logo`} />
          <div className="main-second-vault-title">
            <h2 style={{color:'#FF6F00'}}>{vault.name}</h2>
            <h3 style={{color:'#FF6F00'}}>Vault Performance</h3>
          </div>
        </div>
      </div>
      <div className="transaction-details">
        <h4 className="transaction-heading">TRANSACTION</h4>
        <div className="transaction-info">
          <div className="transaction-header">
            <span style={{color:'#FF6F00'}}>Invested</span>
            <span style={{color:'#FF6F00'}}>Current</span>
            <span style={{color:'#FF6F00'}}>Profit</span>
            <span style={{color:'#FF6F00'}}>ROI</span>
            <span style={{color:'#FF6F00'}}>Entry</span>
            <span style={{color:'#FF6F00'}}>Exit</span>
          </div>
          <div className="transaction-row">
            <span>{vault.invested}</span>
            <span style={{color:'#AF27DD'}}>{vault.current}</span>
            <span style={{color:'#AF27DD'}}>{vault.profit}</span>
            <span style={{color:'#AF27DD'}}>{vault.roi}</span>
            <span>{vault.entryPrice}</span>
            <span>{vault.exitPrice}</span>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default VaultDetail;
