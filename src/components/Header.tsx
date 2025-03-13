import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Button, Menu, MenuItem } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useNetworkContext } from '../contexts/WalletContextProvider';

const Header = () => {
  const location = useLocation();
  const { network, setNetwork } = useNetworkContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [networkMenuAnchor, setNetworkMenuAnchor] = useState<null | HTMLElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { 
      name: 'CoreMinter', 
      path: '/coremint',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 7h-3V6a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
      </svg>
    },
    { 
      name: 'NFT Viewer', 
      path: '/nftviewer',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M11 7h2v10h-2zM7 11h10v2H7z" fill="currentColor" />
      </svg>
    },
    { 
      name: 'StakeViewer', 
      path: '/stakeviewer',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    },
    { 
      name: 'GasTracker', 
      path: '/gastracker',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" />
      </svg>
    },
    { 
      name: 'TokenCleaner', 
      path: '/tokencleaner',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3H9a1 1 0 00-1 1v16a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 16h-4V5h4v14z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 8h4v2H5zM5 12h4v2H5zM15 8h4v2h-4zM15 12h4v2h-4z" fill="currentColor" />
      </svg>
    },
    { 
      name: 'CandyMint', 
      path: '/candymint',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    },
    { 
      name: 'LogWatcher', 
      path: '/logwatcher',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M7 9h10M7 13h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    },
  ];

  const networks = [
    { 
      name: 'Mainnet', 
      value: WalletAdapterNetwork.Mainnet,
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    },
    { 
      name: 'Devnet', 
      value: WalletAdapterNetwork.Devnet,
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 3v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    },
    { 
      name: 'Testnet', 
      value: WalletAdapterNetwork.Testnet,
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    },
  ];

  const handleNetworkMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNetworkMenuAnchor(event.currentTarget);
  };

  const handleNetworkMenuClose = () => {
    setNetworkMenuAnchor(null);
  };

  const handleNetworkChange = (newNetwork: WalletAdapterNetwork) => {
    setNetwork(newNetwork);
    handleNetworkMenuClose();
    console.log(`Switched to ${newNetwork}`);
  };

  // ネットワーク表示用の関数
  const getCurrentNetworkName = () => {
    return networks.find(n => n.value === network)?.name || 'ネットワーク';
  };

  // ネットワークアイコンを取得する関数
  const getCurrentNetworkIcon = () => {
    return networks.find(n => n.value === network)?.icon || networks[0].icon;
  };

  // 現在のネットワークかどうかを確認する関数
  const isCurrentNetwork = (networkValue: WalletAdapterNetwork) => {
    return network === networkValue;
  };

  // カスタムウォレットボタン
  const CustomWalletButton = () => {
    return (
      <div className="wallet-adapter-button-container relative overflow-hidden group">
        {/* ホバーエフェクト */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[rgb(var(--color-accent-primary))]/0 to-[rgb(var(--color-accent-primary))]/0 group-hover:from-[rgb(var(--color-accent-primary))]/5 group-hover:to-[rgb(var(--color-accent-primary))]/10 transition-all duration-500 z-10 pointer-events-none"></span>
        
        <WalletMultiButton className="btn-unified">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 14h2M16 10h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>ウォレット接続</span>
        </WalletMultiButton>
      </div>
    );
  };

  return (
    <header className="card-bg border-b border-theme theme-transition fixed w-full top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="text-[rgb(var(--color-accent-primary))]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 8M12 16L12 20M4 12L8 12M16 12L20 12" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <Link to="/" className="text-3xl font-bold text-primary">GearStack</Link>
              <p className="text-secondary text-sm">
                Solanaブロックチェーンの開発ツール集
              </p>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex gap-4 items-center">
            {/* サービスドロップダウン */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`btn-unified relative overflow-hidden ${
                  isServicesOpen 
                    ? 'bg-[rgb(var(--color-accent-secondary))] text-[rgb(var(--color-accent-primary))]' 
                    : 'text-secondary hover:text-[rgb(var(--color-accent-primary))] hover:bg-[rgb(var(--color-accent-secondary))]/30'
                } group btn-hover-effect`}
              >
                <span className="flex items-center relative">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  サービス
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 card-bg border border-theme rounded-lg shadow-lg z-10 theme-transition animate-fadeIn"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`flex items-center px-4 py-2 text-sm ${
                        isActive(service.path)
                          ? 'bg-[rgb(var(--color-accent-secondary))] text-[rgb(var(--color-accent-primary))]'
                          : 'text-secondary hover:bg-[rgb(var(--color-accent-secondary))]/30 hover:text-[rgb(var(--color-accent-primary))]'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${
                        index === services.length - 1 ? 'rounded-b-lg' : ''
                      } theme-transition`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="mr-2 text-[rgb(var(--color-accent-primary))]">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* ネットワーク切替ボタン */}
            <div className="network-selector">
              <Button
                variant="outlined"
                className="btn-unified group relative overflow-hidden btn-hover-effect"
                onClick={handleNetworkMenuOpen}
                endIcon={<KeyboardArrowDown />}
                startIcon={
                  <span className="text-[rgb(var(--color-accent-primary))]">
                    {getCurrentNetworkIcon()}
                  </span>
                }
                sx={{
                  textTransform: 'none',
                  borderColor: 'rgba(var(--color-border), 1)',
                  color: 'rgba(var(--color-text-secondary), 1)',
                  '&:hover': {
                    borderColor: 'rgba(var(--color-accent-primary), 1)',
                    backgroundColor: 'rgba(var(--color-accent-secondary), 0.3)',
                    color: 'rgba(var(--color-accent-primary), 1)',
                  },
                }}
              >
                <span className="relative">
                  {getCurrentNetworkName()}
                </span>
              </Button>
              <Menu
                anchorEl={networkMenuAnchor}
                open={Boolean(networkMenuAnchor)}
                onClose={handleNetworkMenuClose}
                PaperProps={{
                  className: 'card-bg border border-theme theme-transition animate-fadeIn',
                  sx: {
                    backgroundColor: 'rgb(var(--color-bg-secondary))',
                    borderRadius: '0.5rem',
                    marginTop: '0.5rem',
                    width: '180px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }
                }}
              >
                {networks.map((networkItem) => (
                  <MenuItem
                    key={networkItem.value}
                    onClick={() => handleNetworkChange(networkItem.value)}
                    selected={isCurrentNetwork(networkItem.value)}
                    sx={{
                      color: isCurrentNetwork(networkItem.value)
                        ? 'rgb(var(--color-accent-primary))' 
                        : 'rgb(var(--color-text-secondary))',
                      backgroundColor: isCurrentNetwork(networkItem.value)
                        ? 'rgba(var(--color-accent-secondary), 0.5)' 
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(var(--color-accent-secondary), 0.3)',
                        color: 'rgb(var(--color-accent-primary))',
                      },
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span className="text-[rgb(var(--color-accent-primary))] mr-2">{networkItem.icon}</span>
                    {networkItem.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            
            {/* Walletアプリ接続ボタン - カスタム実装 */}
            <CustomWalletButton />
            
            {/* テーマ切り替えボタン */}
            <ThemeToggle />
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden flex items-center gap-2">
            {/* モバイルネットワーク切替ボタン */}
            <div className="network-selector mr-2">
              <Button
                variant="outlined"
                size="small"
                className="btn-unified group relative overflow-hidden btn-hover-effect"
                onClick={handleNetworkMenuOpen}
                endIcon={<KeyboardArrowDown />}
                startIcon={
                  <span className="text-[rgb(var(--color-accent-primary))]">
                    {getCurrentNetworkIcon()}
                  </span>
                }
                sx={{
                  textTransform: 'none',
                  minWidth: '100px',
                  padding: '4px 8px',
                  borderColor: 'rgba(var(--color-border), 1)',
                  color: 'rgba(var(--color-text-secondary), 1)',
                  fontSize: '0.75rem',
                  '&:hover': {
                    borderColor: 'rgba(var(--color-accent-primary), 1)',
                    backgroundColor: 'rgba(var(--color-accent-secondary), 0.3)',
                    color: 'rgba(var(--color-accent-primary), 1)',
                  },
                }}
              >
                <span className="relative">
                  {getCurrentNetworkName()}
                </span>
              </Button>
              <Menu
                anchorEl={networkMenuAnchor}
                open={Boolean(networkMenuAnchor)}
                onClose={handleNetworkMenuClose}
                PaperProps={{
                  className: 'card-bg border border-theme theme-transition animate-fadeIn',
                  sx: {
                    backgroundColor: 'rgb(var(--color-bg-secondary))',
                    borderRadius: '0.5rem',
                    marginTop: '0.5rem',
                    width: '150px',
                  }
                }}
              >
                {networks.map((networkItem) => (
                  <MenuItem
                    key={networkItem.value}
                    onClick={() => handleNetworkChange(networkItem.value)}
                    selected={isCurrentNetwork(networkItem.value)}
                    sx={{
                      color: isCurrentNetwork(networkItem.value)
                        ? 'rgb(var(--color-accent-primary))' 
                        : 'rgb(var(--color-text-secondary))',
                      backgroundColor: isCurrentNetwork(networkItem.value)
                        ? 'rgba(var(--color-accent-secondary), 0.5)' 
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(var(--color-accent-secondary), 0.3)',
                        color: 'rgb(var(--color-accent-primary))',
                      },
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span className="text-[rgb(var(--color-accent-primary))] mr-2">{networkItem.icon}</span>
                    {networkItem.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            
            {/* モバイルウォレット接続ボタン */}
            <CustomWalletButton />
            
            <ThemeToggle />
            
            {/* モバイルメニューボタン */}
            <button 
              className="text-secondary hover:text-[rgb(var(--color-accent-primary))] btn-unified-icon relative overflow-hidden group btn-hover-effect"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー - 固定位置で表示して下のコンテンツを押し下げないようにする */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-theme theme-transition absolute w-full bg-inherit shadow-md animate-fadeIn">
            {/* モバイルサービスドロップダウン */}
            <div className="py-2 px-4">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-left text-secondary hover:text-[rgb(var(--color-accent-primary))]"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[rgb(var(--color-accent-primary))]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  サービス
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="mt-2 pl-4 border-l border-theme theme-transition animate-fadeIn">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`flex items-center py-2 text-sm ${
                        isActive(service.path)
                          ? 'text-[rgb(var(--color-accent-primary))]'
                          : 'text-secondary hover:text-[rgb(var(--color-accent-primary))]'
                      } theme-transition`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-2 text-[rgb(var(--color-accent-primary))]">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 