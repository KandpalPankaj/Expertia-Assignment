import React from "react";
import "./css/header.css";
import {  IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <div className="close">
                <IconButton aria-label="delete" onClick={() => removeKeywords(key)} >
                  <DeleteIcon />
                </IconButton>
                </div>
            </li>
          );
        })}
        <div onClick={() => clearAll()} id="clear">
          Clear
        </div>
      </ul>
    </div>
  );
};

export default Header;
