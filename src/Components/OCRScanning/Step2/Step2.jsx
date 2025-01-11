import React, { useState, useEffect, useContext } from "react";
import "./Step2.css";
import deleteIcon from "../../../assets/deleteIcon-table.svg";
import axios from "axios";
import { OCRScanningContext } from "../OCRScanningContext";
import EditIcon from "../../../assets/EditIcon.jsx";
import { colors } from "@mui/material";

const Step2 = () => {
  const [extractFields, setExtractFields] = useState([]);
  const { fields, setFields } = useContext(OCRScanningContext);
  const [editField, setEditField] = useState();

  console.log(fields, "fields");

  const handleDelete = (id) => {
    let results = fields?.results.filter((field) => {
      return field.id !== id;
    });

    setFields((pre) => {
      return { ...pre, results };
    });
  };

  const onSubmit = async () => {
    console.log(extractFields, "extractFields");
    let request = {
      folder_key: fields?.uploaded_path,
      fields: extractFields,
    };
    console.log(request, "extractFields");
    await axios.post("http://65.0.137.90/ocr/", request).then((response) => {
      console.log(response, "response");
    });
  };

  const onExtract = (e, id) => {
    const { checked } = e.target;
    let results = fields?.results.filter((field) => {
      return field.id === id;
    });
    console.log(results, "results");
    if (checked) {
      setExtractFields((pre) => {
        return [...pre, results[0]?.name];
      });
    } else {
      setExtractFields((pre) => {
        return pre.filter((field) => field !== results[0]?.name);
      });
    }
  };
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    let results = [...fields?.results];
    // results[name]=value;
    setFields((pre) => {
      return {
        ...pre,
        results: results.map((field) => {
          if (field.id === id) return { ...field, name: value };
          else return field;
        }),
      };
    });
  };
  const handleProbabilityChange=(e,id)=>{
    const { name, value } = e.target;
    let results = [...fields?.results];
    // results[name]=value;
    setFields((pre) => {
      return {
        ...pre,
        results: results.map((field) => {
          if (field.id === id) return { ...field, probability: value };
          else return field;
        }),
      };
    });

  }
  return (
    <div class="table-container-step2">
      <div className="table-wrapper-step2">
        <table>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Field Probability</th>
              <th>Extract</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fields?.results &&
              fields?.results.map((field) => {
                let result = field?.probability.replace("%", "");
                let probabiltyColor =
                  Number(result) <= 25
                    ? "red"
                    : Number(result) <= 60
                    ? "orange"
                    : "green";
                return (
                  <tr>
                    <td>
                      {editField === field?.id ? (
                        <div>
                          <input
                            value={field?.name}
                            onChange={(e) => handleChange(e, field.id)}
                            type="text"
                          />
                        </div>
                      ) : (
                        <div>{field.name}</div>
                      )}
                    </td>
                    <td>
                    {editField === field?.id ? (
                        <div>
                          <input
                            value={result}
                            onChange={(e) => handleProbabilityChange(e, field.id)}
                            type="text"
                          />
                        </div>
                      ) : (
                        <span class={`badge ${probabiltyColor}`}>
                        {parseFloat(result).toFixed(0)}%
                      </span>
                      )}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={extractFields.includes(field.name)}
                        onChange={(e) => {
                          onExtract(e, field.id);
                        }}
                      />
                    </td>
                    <td>
                      <EditIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        color={editField === field.id ? "#4287f5" : "blck"}
                        onClick={() => {
                          if (editField === field.id) setEditField();
                          else setEditField(field.id);
                        }}
                      />
                      <img
                        src={deleteIcon}
                        alt="de"
                        style={{
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleDelete(field?.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            {/* { data.map((item)=>{
        let probabiltyColor=item.probability<=25?"red":item.probability<=60?"orange":"green"
        return 
        <tr>
        <td>{item.name}</td>
        <td><span class={`badge ${probabiltyColor}`}>{item.probability}%</span></td>
        <td><input type="checkbox" checked={item?.extract}/></td>
        <td>
        <img src={editIcon} alt="de" style={{width:"20px",height:"20px"}}/>
           <img src={deleteIcon} alt="de" style={{width:"20px",height:"20px"}}/>
           
        </td>
      </tr>
       })} */}
          </tbody>
        </table>
        <div className="step2-submit" type="button">
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
