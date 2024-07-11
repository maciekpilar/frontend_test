"use client";
import React, { useState } from "react";

import "../../styles/optionButton.scss";

const OptionButton = () => {
  const [usedContentIds, setUsedContentIds] = useState(new Set());
  const [contentArea, setContentArea] = useState([]);

  const resetContent = () => {
    setContentArea([]);
    setUsedContentIds(new Set());
  };

  const appendNameToHeader = () => {
    setHeaderTitle(headerTitle + " - Your Name");
  };

  return (
    <div className="showButton">
      <button id="show-btn">Pokaż</button>
      <div className="footer-content">
        <button id="reset-btn" onClick={resetContent}>
          Reset
        </button>
        <button id="append-name-btn" onClick={appendNameToHeader}>
          Doklej Imię i Nazwisko
        </button>
      </div>
    </div>
  );
};

export default OptionButton;
