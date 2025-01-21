import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import dropdown from "../../assets/drop-down-icon.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header-container">
      <div>BITS10</div>
      <div className="header-option">
        <div>Resources</div>
        <div>Contact Us</div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "  #007bff;",
            color: "#FFF",
            marginLeft: "10px",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
