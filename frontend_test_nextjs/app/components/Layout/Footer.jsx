"use client";
import React, { useState } from "react";

import "../../styles/footer.scss";

const Footer = () => {
  const [isModal, setIsModal] = useState(false);
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
        {isModal && (
          <div className="footer__action_modal">
            <div className="footer__action_modal-option">
              {">"} ZRESETUJ USTAWIENIA
            </div>
            <div className="footer__action_modal-option">
              {">"} POKAŻ DANE OSOBOWE
            </div>
          </div>
        )}
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
