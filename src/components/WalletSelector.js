// import React, { useState } from 'react';
// import WalletButton from './WalletButton';
// import SolanaWalletButton from './SolanaWalletButton';

// const WalletSelector = () => {
//   const [walletType, setWalletType] = useState('ethereum');

//   return (
//     <div className="p-4 wallet">
//       <h1 className="text-2xl mb-4 ">Select Wallet</h1>
//       <div className="mb-4">
//         <button onClick={() => setWalletType('ethereum')} className={`px-4 py-2 mr-2 ${walletType === 'ethereum' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded`}>
//           Ethereum
//         </button>
//         <button onClick={() => setWalletType('solana')} className={`px-4 py-2 ${walletType === 'solana' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded`}>
//           Solana
//         </button>
//       </div>

//       {walletType === 'ethereum' ? <WalletButton /> : <SolanaWalletButton />}
//     </div>
//   );
// };

// export default WalletSelector;


// import React, { useState } from 'react';
// import WalletButton from './WalletButton';
// import SolanaWalletButton from './SolanaWalletButton';

// const WalletSelector = () => {
//   const [walletType, setWalletType] = useState('ethereum');

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
//       <div className="p-8 bg-gray-900 rounded-lg shadow-lg text-center w-96">
//         <h1 className="text-3xl font-bold mb-6 text-blue-400">Select Your Wallet</h1>

//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setWalletType('ethereum')}
//             className={`px-4 py-2 mr-4 flex items-center ${walletType === 'ethereum' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded transition duration-200`}
//           >
//             <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum Logo" className="w-6 h-6 mr-2" />
//             Ethereum
//           </button>
//           <button
//             onClick={() => setWalletType('solana')}
//             className={`px-4 py-2 flex items-center ${walletType === 'solana' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded transition duration-200`}
//           >
//             <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana Logo" className="w-6 h-6 mr-2" />
//             Solana
//           </button>
//         </div>

//         {walletType === 'ethereum' ? <WalletButton /> : <SolanaWalletButton />}
//       </div>
//     </div>
//   );
// };

// export default WalletSelector;


// import React, { useState } from 'react';
// import WalletButton from './WalletButton';
// import SolanaWalletButton from './SolanaWalletButton';

// const WalletSelector = () => {
//   const [walletType, setWalletType] = useState('ethereum');

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
//       <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold mb-6 text-blue-400">Select Your Wallet</h1>

//         <div className="flex flex-col md:flex-row justify-center mb-6">
//           <button
//             onClick={() => setWalletType('ethereum')}
//             className={`px-4 py-2 mb-2 md:mb-0 md:mr-4 flex items-center ${walletType === 'ethereum' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded transition duration-200`}
//           >
//             <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum Logo" className="w-6 h-6 mr-2" />
//             Ethereum
//           </button>
//           <button
//             onClick={() => setWalletType('solana')}
//             className={`px-4 py-2 flex items-center ${walletType === 'solana' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded transition duration-200`}
//           >
//             <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana Logo" className="w-6 h-6 mr-2" />
//             Solana
//           </button>
//         </div>

//         {walletType === 'ethereum' ? <WalletButton /> : <SolanaWalletButton />}
//       </div>
//     </div>
//   );
// };

// export default WalletSelector;
import React, { useState } from 'react';
import WalletButton from './WalletButton';
import SolanaWalletButton from './SolanaWalletButton';

const WalletSelector = () => {
  const [walletType, setWalletType] = useState('ethereum');

  return (
    <div 
      className="flex items-center justify-center min-h-screen text-white"
      style={{ 
        backgroundImage: 'url("https://example.com/your-crypto-background.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400 flex items-center justify-center">
          Select Your Wallet
          <img 
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
            alt="Ethereum Logo" 
            className="w-10 h-10 ml-4"
          />
          <img 
            src="https://cryptologos.cc/logos/solana-sol-logo.png" 
            alt="Solana Logo" 
            className="w-10 h-10 ml-4"
          />
        </h1>

        <div className="flex flex-col md:flex-row justify-center mb-6">
          <button
            onClick={() => setWalletType('ethereum')}
            className={`px-6 py-3 mb-3 md:mb-0 md:mr-4 flex items-center ${walletType === 'ethereum' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-lg shadow-md transition duration-200`}
          >
            <img 
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
              alt="Ethereum Logo" 
              className="w-8 h-8 mr-3"
            />
            Ethereum
          </button>
          <button
            onClick={() => setWalletType('solana')}
            className={`px-6 py-3 flex items-center ${walletType === 'solana' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-lg shadow-md transition duration-200`}
          >
            <img 
              src="https://cryptologos.cc/logos/solana-sol-logo.png" 
              alt="Solana Logo" 
              className="w-8 h-8 mr-3"
            />
            Solana
          </button>
        </div>

        {walletType === 'ethereum' ? <WalletButton /> : <SolanaWalletButton />}
      </div>
    </div>
  );
};

export default WalletSelector;
