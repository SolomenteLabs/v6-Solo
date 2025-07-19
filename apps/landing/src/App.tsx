import React from 'react';

function App() {
  const handleMint = () => {
    // TODO: Wire to real mint logic or CLI trigger
    alert('Minting SoloPass Token...');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '2rem' }}>
      <img src="/solopass-logo.png" alt="SoloPass Logo" style={{ width: '120px', marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>
        SoloPass Mint Demo <span style={{ color: '#888' }}>(Coreum Mainnet)</span>
      </h1>
      <button
        onClick={handleMint}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#111',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#111')}
      >
        Mint SoloPass Token
      </button>
      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        Powered by Coreum Smart Tokens · Built by Solomente Labs
      </p>
    </div>
  );
}

export default App;
