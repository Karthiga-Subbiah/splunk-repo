import React from 'react';
import {Button} from '@mui/material';
import tool1 from "./Assets/Tool1.svg"
import tool2 from "./Assets/Tool2.svg"
import tool3 from "./Assets/Tool3.svg"
import tool4 from "./Assets/Tool4.svg"
import "./Products.css"
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const navigate = useNavigate();
  const tools = [
    { id: 1, title: 'OCR Scanning Tool', description: 'It is used to convert various types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data.', icon: tool1,color: '#FFA726',navigate:"/ocr-scanning-tool" },
    { id: 2, title: 'Tool 2', description: 'It is used to convert various types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data.', icon: tool2,color: '#EF5350' },
    { id: 3, title: 'Tool 3', description: 'It is used to convert various types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data.', icon: tool3,color: '#42A5F5' },
    { id: 4, title: 'Tool 4', description: 'It is used to convert various types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data.', icon: tool4,color: '#66BB6A' },
  ];


  const Cards=({tool})=>{
    const {title,icon,description,color}=tool
    return <div className='card' onClick={()=>{
         if(tool?.navigate) navigate(tool?.navigate)
    }}>
      <div className='card-heading'>
        <div className='icon-container' style={{backgroundColor:`${color}`}}>
        <img src={icon}/>
      
        </div>
        <span>{title}</span>
     
      </div>
      <div>{description}</div>
      <div className='card-button'><button type="button" onClick={(e)=>{
         e.stopPropagation();
         
      }}>Explore</button></div>
    </div>
  }

  return (
    <div className='products-container'>
      <h3>Products</h3>
      <div className='products-cards'>
        {
          tools.map((tool)=>{
            return <Cards tool={tool}/>
          })
        }
    
      </div>
    </div>
  );
};

export default Products;
