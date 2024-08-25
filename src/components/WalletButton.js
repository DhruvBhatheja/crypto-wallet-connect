// // // import React, { useState } from 'react';
// // // import { BrowserProvider, formatEther } from 'ethers';

// // // const WalletButton = () => {
// // //   const [account, setAccount] = useState(null);
// // //   const [balance, setBalance] = useState(null);

// // //   const connectWallet = async () => {
// // //     if (typeof window.ethereum !== 'undefined') {
// // //       try {
// // //         const provider = new BrowserProvider(window.ethereum);
// // //         const accounts = await provider.send("eth_requestAccounts", []);
// // //         setAccount(accounts[0]);

// // //         const balance = await provider.getBalance(accounts[0]);
// // //         setBalance(formatEther(balance));
// // //       } catch (error) {
// // //         console.error("Connection Error: ", error);
// // //       }
// // //     } else {
// // //       alert("MetaMask is not installed. Please install it to use this feature.");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
// // //         {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
// // //       </button>
// // //       {balance && <p>Your balance: {balance} ETH</p>}
// // //     </div>
// // //   );
// // // };

// // // export default WalletButton;


// import React, { useState } from 'react';
// import { BrowserProvider, formatEther } from 'ethers';

// const WalletButton = () => {
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState(null);

//   const connectWallet = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         const provider = new BrowserProvider(window.ethereum);
//         const accounts = await provider.send("eth_requestAccounts", []);
//         setAccount(accounts[0]);

//         const balance = await provider.getBalance(accounts[0]);
//         setBalance(formatEther(balance));
//       } catch (error) {
//         console.error("Connection Error: ", error);
//       }
//     } else {
//       alert("MetaMask is not installed. Please install it to use this feature.");
//       // Optionally, you could provide a link to install MetaMask
//       window.open('https://metamask.io/download.html', '_blank');
//     }
//   };

//   return (
//     <div>
//       <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
//         {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
//       </button>
//       {balance && <p>Your balance: {balance} ETH</p>}
//     </div>
//   );
// };

// export default WalletButton;

// --------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { BrowserProvider, formatEther } from 'ethers';

// const WalletButton = () => {
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(typeof window.ethereum !== 'undefined');

//   const connectWallet = async () => {
//     if (isMetaMaskInstalled) {
//       try {
//         const provider = new BrowserProvider(window.ethereum);
//         const accounts = await provider.send("eth_requestAccounts", []);
//         setAccount(accounts[0]);

//         const balance = await provider.getBalance(accounts[0]);
//         setBalance(formatEther(balance));
//       } catch (error) {
//         console.error("Connection Error: ", error);
//       }
//     } else {
//       alert("MetaMask is not installed. Please install it to use this feature.");
//       // Open MetaMask download page
//       window.open('https://metamask.io/download.html', '_blank');
//     }
//   };

//   return (
//     <div>
//       <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
//         {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
//       </button>
//       {balance && <p>Your balance: {balance} ETH</p>}
//       {!isMetaMaskInstalled && (
//         <p className="mt-4 text-red-500">
//           MetaMask not detected. Please install MetaMask and refresh the page.
//         </p>
//       )}
//     </div>
//   );
// };

// export default WalletButton;

//  ----------------------------------------------------------------------------




// import React, { useState } from 'react';
// import { BrowserProvider, formatEther } from 'ethers';
// import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// const WalletButton = () => {
//   const [account, setAccount] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [walletType, setWalletType] = useState(null); // Track which wallet is used

//   const isMetaMaskInstalled = typeof window.ethereum !== 'undefined';
//   const isSohanaInstalled = typeof window.sohana !== 'undefined';
//   const isSolanaInstalled = typeof window.solana !== 'undefined';

//   const connectEthereumWallet = async () => {
//     if (isMetaMaskInstalled) {
//       try {
//         const provider = new BrowserProvider(window.ethereum);
//         const accounts = await provider.send("eth_requestAccounts", []);
//         const balance = await provider.getBalance(accounts[0]);
//         setAccount(accounts[0]);
//         setBalance(formatEther(balance));
//         setWalletType('ethereum');
//       } catch (error) {
//         console.error("Ethereum Connection Error: ", error);
//       }
//     } else {
//       alert("MetaMask is not installed. Please install it.");
//       window.open('https://metamask.io/download.html', '_blank');
//     }
//   };

//   const connectSohanaWallet = async () => {
//     if (isSohanaInstalled) {
//       try {
//         const provider = window.sohana;
//         const accounts = await provider.request({ method: 'sohana_requestAccounts' });
//         const balance = await provider.request({ method: 'sohana_getBalance', params: [accounts[0]] });
//         setAccount(accounts[0]);
//         setBalance(balance);
//         setWalletType('sohana');
//       } catch (error) {
//         console.error("Sohana Connection Error: ", error);
//       }
//     } else {
//       alert("Sohana Wallet is not installed. Please install it.");
//       window.open('https://sohana.io/download.html', '_blank');
//     }
//   };

//   const connectSolanaWallet = async () => {
//     if (isSolanaInstalled) {
//       try {
//         const provider = window.solana;
//         const accounts = await provider.connect();
//         const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
//         const publicKey = new PublicKey(accounts.publicKey.toString());
//         const solBalance = await connection.getBalance(publicKey);
//         const formattedBalance = solBalance / 1e9; // Convert lamports to SOL
//         setAccount(publicKey.toString());
//         setBalance(formattedBalance);
//         setWalletType('solana');
//       } catch (error) {
//         console.error("Solana Connection Error: ", error);
//       }
//     } else {
//       alert("Solana Wallet is not installed. Please install it.");
//       window.open('https://phantom.app/', '_blank'); // Example for Phantom wallet
//     }
//   };

//   const disconnectWallet = () => {
//     setAccount(null);
//     setBalance(null);
//     setWalletType(null);
//   };

//   return (
//     <div>
//       {account ? (
//         <>
//           <p className="mb-4">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
//           <p className="mb-4">Your balance: {balance} {walletType === 'ethereum' ? 'ETH' : walletType === 'sohana' ? 'SOH' : 'SOL'}</p>
//           <button onClick={disconnectWallet} className="px-4 py-2 bg-red-500 text-white rounded">
//             Disconnect Wallet
//           </button>
//         </>
//       ) : (
//         <div>
//           {isMetaMaskInstalled && (
//             <button onClick={connectEthereumWallet} className="px-4 py-2 bg-blue-500 text-white rounded mb-2">
//               Connect MetaMask
//             </button>
//           )}
//           {isSohanaInstalled && (
//             <button onClick={connectSohanaWallet} className="px-4 py-2 bg-green-500 text-white rounded mb-2">
//               Connect Sohana Wallet
//             </button>
//           )}
//           {isSolanaInstalled && (
//             <button onClick={connectSolanaWallet} className="px-4 py-2 bg-yellow-500 text-white rounded">
//               Connect Solana Wallet
//             </button>
//           )}
//           {!isMetaMaskInstalled && !isSohanaInstalled && !isSolanaInstalled && (
//             <p className="mt-4 text-red-500">
//               No supported wallet detected. Please install a wallet and refresh the page.
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WalletButton;

import React, { useState } from 'react';
import { BrowserProvider, formatEther } from 'ethers';

const WalletButton = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(typeof window.ethereum !== 'undefined');

  const connectWallet = async () => {
    if (isMetaMaskInstalled) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);

        const balance = await provider.getBalance(accounts[0]);
        setBalance(formatEther(balance));
      } catch (error) {
        console.error("Connection Error: ", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
      window.open('https://metamask.io/download.html', '_blank');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
  };

  return (
    <div>
      {account ? (
        <>
          <button onClick={disconnectWallet} className="px-4 py-2 bg-red-500 text-white rounded">
            Disconnect Wallet
          </button>
          <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          <p>Your balance: {balance} ETH</p>
        </>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
          Connect Wallet
        </button>
      )}
      {!isMetaMaskInstalled && (
        <p className="mt-4 text-red-500">
          MetaMask not detected. Please install MetaMask and refresh the page.
        </p>
      )}
    </div>
  );
};

export default WalletButton;
