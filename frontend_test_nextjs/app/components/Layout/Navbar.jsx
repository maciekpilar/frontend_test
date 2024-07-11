import Image from "next/image";
import React from "react";

import "../../styles/navbar.scss";
import Link from "next/link";

const Navbar = () => {
  const isName = false;
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* 
          Image from: https://www.iconpacks.net/free-icon/html5-6652.html 
          Free SVG
        */}
        <Link href="/">
          <Image
            className="navbar__logo_image"
            src="html5-logo.svg"
            alt="HTML5 logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="navbar__content">
        <p className="navbar__content_title">
          Zadanie{" "}
          <span className="navbar__content_title-span">rekrutacyjne</span>
        </p>
        {isName ? (
          <p className="navbar__content_sign">Maciej Pilarski</p>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
