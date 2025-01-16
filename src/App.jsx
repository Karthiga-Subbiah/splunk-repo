import { useState, useRef,useEffect } from 'react'
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Splunk from './Components/Splunk/Splunk';

function App() {

  const [logInput, setLogInput] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [history, setHistory] = useState([]);
  const textareaRef = useRef(null); 

  const extractLogs = () => {
    // Assume raw input is a configuration for Splunk
    const formattedConfig = logInput.trim();
    setFormattedOutput(formattedConfig);
    setHistory((prevHistory) => [...prevHistory, formattedConfig]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Output copied to clipboard!");
  };

  const [inputText, setInputText] = useState('');

  // Function to generate line numbers based on the input
  const generateLineNumbers = () => {
    const lines = inputText.split('\n');
    return lines.map((_, index) => index + 1).join('\n');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  useEffect(() => {
    // Focus on the textarea to allow typing on specific lines
    textareaRef.current?.focus();
  }, []);



  return (
    <div>
    {/* <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1>Splunk Config Highlighter</h1>
    <div>
      <label>
        <strong>Input:</strong>
        
                
      </label>
    </div>
    <button onClick={extractLogs} style={{ marginRight: "10px" }}>
      Highlight
    </button>
    <button onClick={() => copyToClipboard(formattedOutput)}>Copy O/P</button>
    <div style={{ marginTop: "20px" }}>
      <label>
        <strong>Output:</strong>
      </label>
      <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
        {formattedOutput ? (
          <SyntaxHighlighter
             language="ini"
            style={dracula}
            showLineNumbers={true}
            lineNumberStyle={{ color: "#888" }}
          >
            {formattedOutput}
          </SyntaxHighlighter>
        ) : (
          "Formatted configuration will appear here..."
        )}
      </div>
    </div>
    <div style={{ marginTop: "20px" }}>
      <label>
        <strong>History of Configurations:</strong>
      </label>
      <ul>
        {history.map((config, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <div style={{ background: "white", padding: "5px" }}>
              <SyntaxHighlighter
                language="ini"
                style={dracula}
                showLineNumbers={true}
                lineNumberStyle={{ color: "#888" }}
              >
                {config}
              </SyntaxHighlighter>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <div
        style={{
          width: '40px',
          paddingRight: '10px',
          textAlign: 'right',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: 'gray',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #ccc',
        }}
      >
        <pre>{generateLineNumbers()}</pre>
      </div>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={20}
        cols={50}
        placeholder="Start typing your text here..."
        style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          padding: '10px',
          width: '500px',
          height: '400px',
          lineHeight: '1.5',
          resize: 'none',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <div
        style={{
          width: '40px',
          paddingRight: '10px',
          textAlign: 'right',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: 'gray',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #ccc',
        }}
      >
        <pre>{generateLineNumbers()}</pre>
      </div>

      <textarea
        ref={textareaRef}
        value={inputText}
        onChange={handleInputChange}
        rows={20}
        cols={50}
        placeholder="Start typing your text here..."
        style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          padding: '10px',
          width: '500px',
          height: '400px',
          lineHeight: '1.5',
          resize: 'none',
        }}
      />
    </div>
  </div> */}
  <div><Splunk/></div>
  </div>
  )
}

export default App
