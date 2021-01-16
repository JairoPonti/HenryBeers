import React from "react";
import { Link } from "react-router-dom";
import "./Nosotros.css";

const TeamPage = () => {
  return (
      <div className="u-black u-clearfix u-header u-sticky u-header">
        <div className="u-clearfix u-sheet u-sheet-1">
          <Link to="/">
            <h1 className="u-heading-font u-text u-title u-text-1">
              HENRY <font className="u-text-palette-3-base">TEAM</font>
            </h1>
          </Link>
        </div>
      </div>
  );
};

export default TeamPage;
