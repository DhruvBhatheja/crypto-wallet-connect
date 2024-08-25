import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const SolanaWalletButton = () => {
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = window.solana;

      if (provider.isPhantom) {
        await provider.connect();
        const publicKey = provider.publicKey.toString();
        setPublicKey(publicKey);

        const connection = new Connection(clusterApiUrl('devnet'));
        const balance = await connection.getBalance(new PublicKey(publicKey));
        setBalance(balance / 1e9); // Convert Lamports to SOL
      } else {
        alert("Phantom wallet is not installed. Please install it to use this feature.");
      }
    } catch (error) {
      console.error("Connection Error: ", error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
        {publicKey ? `Connected: ${publicKey.slice(0, 6)}...${publicKey.slice(-4)}` : 'Connect Solana Wallet'}
      </button>
      {balance && <p>Your balance: {balance} SOL</p>}
    </div>
  );
};

export default SolanaWalletButton;
