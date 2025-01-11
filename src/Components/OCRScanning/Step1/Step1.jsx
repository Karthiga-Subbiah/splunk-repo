import React from "react";
import { useState, useContext } from "react";
import deleteIcon from "../../../assets/deleteIcon.svg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "../Step1/Step1.css";
import axios from "axios";
import { OCRScanningContext } from "../OCRScanningContext";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Step1 = () => {
  const {  setActive,
    setFields,
    uploadedFiles,
    setUploadedFiles,
    thumbnails, setThumbnails
   } = useContext(OCRScanningContext);
  //checking 

  
  const handleFileChange = async(e) => {
    const { name, files } = e.target;
    let docs= [...uploadedFiles, ...files];

    setUploadedFiles(docs);

    const generatedThumbnails = [];
    for (const doc of docs) {
      const fileArrayBuffer = await doc.arrayBuffer();
      console.log(fileArrayBuffer,doc,"fileArrayBuffer");
      const pdf = await pdfjs.getDocument({ data: fileArrayBuffer }).promise;
      console.log(pdf,"pdf");
      // Render the first page as a thumbnail
      const page = await pdf.getPage(1);
      console.log(page,"page");
      const viewport = page.getViewport({ scale: 0.5 });
      console.log(viewport,"viewport");
      const canvas = document.createElement("canvas");
      console.log(canvas,"canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      console.log(canvas,"canvas");
      const context = canvas.getContext("2d");
      console.log(context,"context");
      await page.render({ canvasContext: context, viewport }).promise;
      console.log(canvas.toDataURL(),"canvas.toDataURL()");
      generatedThumbnails.push(canvas.toDataURL());
    }
    console.log(generatedThumbnails,"generatedThumnb");
    setThumbnails(generatedThumbnails);
  };

  const nextHandler = async () => {
    let files = new FormData();
    uploadedFiles.forEach((file) => {
      files.append(`uploadedFiles`, file);
    });
    // .post("http://65.0.137.90/fileUpload/", files)
    //   .post("http://127.0.0.1:8000/fileUpload/", files)
    await axios
      .post("http://65.0.137.90/fileUpload/", files)
      .then((response) => {
        console.log(response, "response");
        if (response?.data?.results) {
          let formatted=Object.entries(response?.data?.results).map(([name,probability])=>{
            return {name,probability,id:crypto.randomUUID()}
          })
          setFields({...response?.data,results:formatted});
          setActive((pre) => pre + 1);
        }
      }).catch((e)=>{
       console.log(e,"error")
      });
  };
  return (
    <>
      <div className="upload-container">
        <span>Upload Documents</span>
        <div className="fileupload">
          <input
            type="file"
            // accept="image/*"
            onChange={handleFileChange}
            multiple={true}
            id="upload-file"
            hidden
          />
          <button
            type="button"
            onClick={() => {
              document.getElementById("upload-file").click();
            }}
          >
            Upload Files
          </button>

          <div className="file-description">
            Supported File formats-All Image Formats
          </div>
        </div>
        {thumbnails?.length > 0 && (
          <div className="uploaded-iamges">
            {thumbnails.map((file) => {
              return (
                <div className="image-cover">
                  <img 
                  // src={URL.createObjectURL(file)} 
                  src={file}
                  className="image" />
                  <div
                    className="delete-icon"
                    onClick={() => {
                      let filtered = uploadedFiles.filter((f) => {
                        return f.name !== file.name;
                      });
                      setUploadedFiles([...filtered]);
                    }}
                  >
                    <img src={deleteIcon} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="next-btn">
          <button type="button" onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>

      <div className="recent-uploaded-container">
        <div className="title">Recently Uploaded Documents</div>
        <div className="accordian">
          <div className="accordian-container">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Documents Name 1,2,3...
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Documents Name 1,2,3...
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Documents Name 1,2,3...
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              {/* <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions> */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
