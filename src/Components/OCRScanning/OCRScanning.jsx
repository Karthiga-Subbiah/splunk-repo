import React, { useState, createContext } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { OCRScanningContext } from "./OCRScanningContext";

const OCRScanning = () => {
  const [activeStep, setActive] = useState(3);
  const [fields, setFields] = useState();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  return (
    <OCRScanningContext.Provider
      value={{
        activeStep,
        setActive,
        fields,
        setFields,
        uploadedFiles,
        setUploadedFiles,
        thumbnails,
        setThumbnails
      }}
    >
      <div>
        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
          OCR Scanning Tool
        </div>
        <div className="OCRScanning-container">
          <div className="steps-container">
            <div className="steps">
            {[1, 2, 3].map((step) => {
              return (
                <span
                  className={`${activeStep === step ? "active" : ""}`}
                  onClick={() => {
                    setActive(step);
                  }}
                  style={{ cursor: "pointer" }}
                >{`Step ${step}`}</span>
              );
            })}</div>
           {activeStep===2 && <div className="Processed-Doc"><div>Total No. of Processed Doc</div><div className="doc-count">{uploadedFiles?.length}</div></div>}
           
          </div>

          {activeStep === 1 ? (
            <Step1/>
          ) : activeStep === 2 && fields ? (
            <Step2 />
          ) : (
            <Step3 />
          )}
        </div>
      </div>
    </OCRScanningContext.Provider>
  );
};

export default OCRScanning;
