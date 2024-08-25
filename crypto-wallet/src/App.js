// import React from 'react';
// import WalletSelector from './components/WalletSelector';
// import './App.css';

// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md wallet">
//         <WalletSelector />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import WalletSelector from './components/WalletSelector';
import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <WalletSelector />
      </div>
    </div>
  );
}

export default App;
  
