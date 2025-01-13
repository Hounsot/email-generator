import React, { useState, useEffect, useRef } from 'react';

const WelcomeEmailGenerator = () => {
  const [name, setName] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const iframeRef = useRef(null);

  const emailTemplate = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
  </style>
</head>
<body>
  <p>Hi everyone,</p>
  
  <p>I'm excited to welcome ${name || '[Имя]'} to our team!</p>
  
  <p>${name || '[Имя]'} is joining us as our new team member, and we're looking forward to working together.</p>
  
  <p>Please join me in giving ${name || '[Имя]'} a warm welcome!</p>
  
  <p>Best regards,<br>[Ваше имя]</p>
</body>
</html>`;

useEffect(() => {
    if (iframeRef.current && activeTab === 'preview') {
      const doc = iframeRef.current.contentDocument;
      doc.open();
      doc.write(emailTemplate);
      doc.close();
    }
  }, [emailTemplate, activeTab]);  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="card">
          <h1>Генератор приветственной рассылки</h1>
          
          <div className="input-group">
            <label htmlFor="name">Имя нового члена команды</label>
            <input
              id="name"
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button onClick={copyToClipboard}>
            {copied ? 'Скопировано!' : 'Скопировать в буфер обмена'}
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="card">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Превью
            </button>
            <button 
              className={`tab ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              HTML Код
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'preview' ? (
              <div className="iframe-container">
                <iframe
                  ref={iframeRef}
                  title="Email Preview"
                  className="preview-iframe"
                />
              </div>
            ) : (
              <div className="code-container">
                <pre>{emailTemplate}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .container {
          display: flex;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
        }
        
        .left-panel {
          width: 300px;
          flex-shrink: 0;
          .card{
          height: fit-content}
        }
        
        .right-panel {
          flex: 1;
          min-width: 0;
        }
        
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        
        .right-panel .card {
          padding: 0;
          overflow: hidden;
        }
        
        h1 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .input-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          color: #666;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #007bff;
          border-bottom-color: #007bff;
        }
        
        .tab:hover {
          color: #007bff;
        }
        
        .tab-content {
          flex: 1;
          overflow: hidden;
        }
        
        .code-container {
          background: #f5f5f5;
          padding: 20px;
          height: 100%;
          overflow: auto;
        }
        
        pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-size: 14px;
        }
        
        button {
          width: 100%;
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        
        button:not(.tab):hover {
          background: #0056b3;
        }

        .iframe-container {
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .preview-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          
          .left-panel {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeEmailGenerator;