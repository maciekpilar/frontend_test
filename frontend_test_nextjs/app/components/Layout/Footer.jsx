"use client";

import React, { useState } from "react";

import "../../styles/footer.scss";

const Footer = () => {
  const [isModal, setIsModal] = useState(false);

  const resetPage = () => {
    window.location.reload();
  };

  const toggleDisabledClass = () => {
    const element = document.getElementById("sign");
    if (element) {
      element.classList.toggle("navbar__content_sign-disabled");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo_box" />
        <p className="footer__logo_text">
          CSS
          <br />
          IS
          <br />
          AWESOME
        </p>
      </div>
      <div className="footer__copy">
        <div className="footer__copy_divider" />
        <div>
          <p>nabthat</p>
        </div>
        <div className="footer__copy_divider" />
      </div>
      <div className="footer__action">
        <div
          className={`footer__action_modal ${
            isModal ? "footer__action_modal--visible" : ""
          }`}
        >
          <div onClick={resetPage} className="footer__action_modal-option">
            {">"} ZRESETUJ USTAWIENIA
          </div>
          <div
            onClick={toggleDisabledClass}
            className="footer__action_modal-option"
          >
            {">"} POKAŻ DANE OSOBOWE
          </div>
        </div>
        <button
          className="footer__action_button"
          onClick={() => setIsModal(!isModal)}
        >
          Pokaż ˅
        </button>
      </div>
    </footer>
  );
};

export default Footer;
