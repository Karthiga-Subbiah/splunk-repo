import React, { useState } from "react";
import "./Step3.css";

const Step3 = () => {
  const [selectedDocument, setSelectedDocument] = useState("Document 1");
  const [fields, setFields] = useState([
      { label: "Common Field 1", value: "Apple" },
      { label: "Common Field 2", value: "Banana" },
      { label: "Common Field 3", value: "Cherry" },
      { label: "Common Field 4", value: "Date" },
    ]);
  
    // Handle input change
    const handleInputChange = (index, newValue) => {
      const updatedFields = [...fields];
      updatedFields[index].value = newValue;
      setFields(updatedFields);
    };
  const data = [
    ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
    ["Ford", "Chevrolet", "Toyota", "Honda", "Tesla"],
    ["Red", "Blue", "Green", "Yellow", "Purple"],
    ["Cat", "Dog", "Elephant", "Frog", "Giraffe"],
    ["JavaScript", "Python", "Java", "C++", "Ruby"],
  ];
  const documents = ["Document 1", "Document 2", "Document 3", "Document 4", "Document 5"];
  const commonFields = ["Common Field 1", "Common Field 2", "Common Field 3", "Common Field 4"];

  return (
    <div className="container">
      <div className="content">
        <div className="sidebar">
          {documents.map((doc) => (
            <div
              key={doc}
              className={`sidebar-item ${doc === selectedDocument ? "selected" : ""}`}
              onClick={() => setSelectedDocument(doc)}
            >
              {doc}
              <span className="arrow">&gt;</span>
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="common-fields">
            {fields.map((field, index) => (
              <div key={index} className="field">
                <label>{field.label}</label>
               <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="form-input"
          />
              </div>
            ))}
          </div>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Field 1</th>
                  <th>Field 2</th>
                  <th>Field 3</th>
                  <th>Field 4</th>
                  <th>Field n</th>
                </tr>
              </thead>
              <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
