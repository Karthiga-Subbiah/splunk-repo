import React from "react";
import "./ZninthHeader.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import dropdown from "../../assets/drop-down-icon.svg";

const ZninthHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="zninth-header-container">
      <div>Z-NINTH</div>
      <div className="zninth-header-option">
        <div style={{ display: "flex" }}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#3A3A99" : "black",
              textDecoration: "none",
            })}
            to="/products"
          >
            {" "}
            <div>Products</div>
          </NavLink>
          <img
            style={{ height: "20px", width: "20px",cursor:"pointer"}}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            src={dropdown}
            onClick={(e) => {
              e.stopPropagation();
              setAnchorEl(e.currentTarget);
            }}
          />
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >{
          ["option 1","Option 2","Option 3"].map((option)=>{
            return   <MenuItem onClick={handleClose}>{option}</MenuItem>
          })
        }
        </Menu>
        <div>Resources</div>
        <div>Settings</div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3A3A99",
            color: "#FFF",
            marginLeft: "10px",
          }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ZninthHeader;
