import React from 'react'

const TestContact = () => {
  const testClick = () => {
    alert('DUGME RADI!')
  }

  return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h1>TEST KONTAKT STRANICA</h1>
      
      <button 
        onClick={testClick}
        style={{
          padding: '20px 40px',
          fontSize: '20px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        KLIKNI ME - TEST
      </button>
      
      <br />
      
      <button 
        onClick={() => window.open('https://google.com', '_blank')}
        style={{
          padding: '20px 40px',
          fontSize: '20px',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        OTVORI GOOGLE
      </button>
      
      <br />
      
      <button 
        onClick={() => window.location = 'mailto:test@test.com'}
        style={{
          padding: '20px 40px',
          fontSize: '20px',
          background: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        OTVORI EMAIL
      </button>
    </div>
  )
}

export default TestContact
