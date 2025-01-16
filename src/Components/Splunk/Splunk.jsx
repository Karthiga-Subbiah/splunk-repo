import React from "react";
import { Tooltip } from "antd";
import { useState, useRef,useEffect } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Splunk() {

  const [logInput, setLogInput] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [history, setHistory] = useState([]);
  const textareaRef = useRef(null); 
  const [inputText, setInputText] = useState('');

  const generateLineNumbers = () => {
    const lines = inputText.split('\n');
    return lines.map((_, index) => index + 1).join('\n');
  };




  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* <img
          src="https://via.placeholder.com/100x50?text=bits10+logo"
          alt="Bits10 Logo"
          style={{ height: "50px" }}
        /> */}
        <span>Bits10</span>
        <nav style={{ display: "flex", gap: "50px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Resources
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Contact Us
          </a>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="style=fill">
              <g id="profile">
                <path
                  id="vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z"
                  fill="#000000"
                />
                <path
                  id="rec (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z"
                  fill="#000000"
                />
              </g>
            </g>
          </svg>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Splunk Workspace</h2>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
              borderTop: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                borderBottom: "1px solid #ddd",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "40px",
              }}
            >
              <span>Input</span>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Extract
              </button>
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

      {/* Text Area */}
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
          </div>

          {/* Output Section */}
          <div
            style={{
              flex: 1,
              border: "1px solid #ddd",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                borderBottom: "1px solid #ddd",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
                height: "40px",
              }}
            >
              <span>Output</span>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    color: "gray",
                    padding: "8px 12px",
                    border: "1px solid rgb(221, 221, 221)",
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontSize: "14px",
                    background: "transparent",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="-11 0 173 173"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M30.9231 153.398C25.9082 153.062 21.2595 152.78 16.6153 152.431C13.3686 152.186 10.2997 151.464 7.57825 149.459C3.00684 146.09 1.56856 141.264 1.45752 136.007C1.29453 128.332 1.3601 120.646 1.56139 112.971C1.76659 105.186 2.08738 97.3959 2.65361 89.6298C3.85945 73.0868 4.37958 56.5257 4.83867 39.947C5.16774 31.9356 6.64051 24.0128 9.21208 16.4196C11.3588 9.78579 15.6757 5.67804 22.6329 4.53533C24.2764 4.26477 25.9218 3.95521 27.579 3.81993C50.8387 1.97287 74.0726 -0.472549 97.4629 0.405459C102.453 0.593417 107.451 0.999201 112.406 1.62356C118.56 2.39881 121.757 5.86334 121.976 12.0576C122.154 17.1357 121.886 22.2301 121.81 27.7778C122.815 27.7778 124.008 27.6887 125.186 27.7947C128.943 28.1322 132.725 28.3527 136.439 28.9654C142.402 29.9513 146.049 33.544 147.63 39.4325C148.915 44.4993 149.683 49.6836 149.923 54.9056C150.962 71.9558 149.786 88.9202 148.223 105.895C147.611 112.529 147.573 119.228 147.435 125.902C147.297 132.576 147.5 139.263 147.258 145.933C147.13 149.71 146.673 153.467 145.891 157.163C144.143 165.312 138.661 170.196 130.151 171.171C124.199 171.921 118.213 172.362 112.215 172.494C94.7719 172.676 77.3226 172.758 59.8815 172.485C54.1516 172.396 48.3809 171.399 42.7387 170.278C36.1316 168.965 32.0471 163.932 31.3101 157.17C31.1769 155.969 31.0621 154.766 30.9231 153.398ZM42.1303 105.059H41.7043C41.4796 112.397 41.2545 119.735 41.029 127.073C40.7536 135.633 40.44 144.191 40.1932 152.752C40.1523 154.189 40.3926 155.633 40.4588 157.076C40.5887 159.93 42.1549 161.708 44.8231 162.227C49.3899 163.117 53.9848 164.166 58.6069 164.406C68.2512 164.906 77.9245 165.201 87.5784 165.067C99.5655 164.9 111.549 164.269 123.526 163.708C126.073 163.54 128.597 163.116 131.059 162.443C134.088 161.671 136.161 159.649 136.683 156.506C137.389 152.801 137.843 149.051 138.043 145.284C138.262 137.614 138.034 129.932 138.177 122.261C138.285 116.482 138.437 110.684 139.001 104.936C140.466 89.9771 141.451 75.0022 140.733 59.9668C140.468 54.4224 140.112 48.8753 138.642 43.4636C137.98 41.0305 136.759 39.5275 134.086 39.4781C127.658 39.359 121.224 38.9747 114.801 39.0996C103.697 39.3149 92.6057 39.8527 81.5077 40.2214C73.6252 40.4816 65.7382 40.6117 57.8595 40.9538C54.3244 41.1072 50.7127 41.2972 47.4906 43.0057C46.3829 43.591 44.8608 44.551 44.69 45.5422C44.2323 48.6629 43.4542 51.7279 42.3679 54.6885C42.1903 55.4482 42.1426 56.2326 42.227 57.0083C42.1861 59.5663 42.1374 62.1248 42.1355 64.6827C42.1259 78.1396 42.1242 91.5985 42.1303 105.059ZM30.7977 143.928C30.923 141.672 31.0432 139.9 31.1166 138.126C31.4936 129.01 31.8649 119.894 32.2303 110.777C32.8101 96.6584 33.3426 82.5381 33.9984 68.4236C34.4114 59.539 34.6984 50.6261 36.6036 41.8935C36.9547 40.4047 37.6251 39.0103 38.5686 37.8072C41.2356 34.4555 45.0749 32.2443 49.3088 31.6215C54.8914 30.6969 60.5238 30.1038 66.1765 29.8454C80.6044 29.169 95.044 28.7541 109.478 28.2195C110.341 28.1876 111.198 28.0243 112.384 27.8851C112.736 22.5832 112.797 17.4317 111.688 11.8788C106.128 11.5341 100.604 11.0605 95.0706 10.8706C73.5895 10.1324 52.229 12.3483 30.8335 13.6744C28.2958 13.8311 25.788 14.4314 23.2555 14.7325C20.3237 15.0818 18.7822 16.8625 17.9277 19.5213C15.7651 26.07 14.4364 32.8659 13.9731 39.748C13.0069 55.9592 12.0153 72.1737 11.4237 88.4019C10.8802 103.295 10.8166 118.213 10.6257 133.121C10.656 135.122 10.8955 137.114 11.34 139.066C11.8549 141.637 13.2809 142.885 15.9147 143.141C19.34 143.474 22.7764 143.702 26.2114 143.913C27.6257 144.003 29.0516 143.928 30.7977 143.928Z"
                        fill="#000000"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="150"
                          height="173"
                          fill="white"
                          transform="translate(0.777344)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Copy O/P</span>
                </button>
                <Tooltip placement="Top" title="Content" color="#F1F1F1">
                  <span
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ paddingTop: "2px" }}
                    >
                      <path
                        d="M7.17484 4.25185C7.2915 4.14685 7.4315 4.08268 7.58317 4.08268C7.74067 4.08268 7.87484 4.14685 7.99734 4.25185C8.10817 4.37435 8.1665 4.51435 8.1665 4.66602C8.1665 4.82352 8.10817 4.95768 7.99734 5.08018C7.87484 5.19102 7.74067 5.24935 7.58317 5.24935C7.4315 5.24935 7.2915 5.19102 7.17484 5.08018C7.064 4.95768 6.99984 4.82352 6.99984 4.66602C6.99984 4.51435 7.064 4.37435 7.17484 4.25185ZM5.7165 6.98185C5.7165 6.98185 6.98234 5.97852 7.44317 5.93768C7.87484 5.90268 7.78734 6.39852 7.7465 6.65518L7.74067 6.69018C7.659 6.99935 7.55984 7.37268 7.46067 7.72852C7.239 8.53935 7.02317 9.33268 7.07567 9.47852C7.134 9.67685 7.49567 9.42602 7.75817 9.25102C7.79317 9.22768 7.82234 9.20435 7.8515 9.18685C7.8515 9.18685 7.89817 9.14018 7.94484 9.20435C7.9565 9.22185 7.96817 9.23935 7.97984 9.25102C8.03234 9.33268 8.0615 9.36185 7.9915 9.40852L7.96817 9.42018C7.83984 9.50768 7.2915 9.89268 7.06984 10.0327C6.83067 10.1902 5.91484 10.7152 6.05484 9.69435C6.17734 8.97685 6.34067 8.35852 6.469 7.87435C6.70817 6.99935 6.81317 6.60268 6.2765 6.94685C6.06067 7.07518 5.93234 7.15685 5.8565 7.20935C5.79234 7.25602 5.7865 7.25602 5.74567 7.18018L5.72817 7.14518L5.699 7.09852C5.65817 7.04018 5.65817 7.03435 5.7165 6.98185ZM12.8332 6.99935C12.8332 10.2077 10.2082 12.8327 6.99984 12.8327C3.7915 12.8327 1.1665 10.2077 1.1665 6.99935C1.1665 3.79102 3.7915 1.16602 6.99984 1.16602C10.2082 1.16602 12.8332 3.79102 12.8332 6.99935ZM11.6665 6.99935C11.6665 4.42102 9.57817 2.33268 6.99984 2.33268C4.4215 2.33268 2.33317 4.42102 2.33317 6.99935C2.33317 9.57768 4.4215 11.666 6.99984 11.666C9.57817 11.666 11.6665 9.57768 11.6665 6.99935Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </span>
                </Tooltip>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      {/* Line Numbers */}
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

      {/* Text Area */}
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Splunk;