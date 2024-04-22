import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "/src/states/sectionMenuSlice";
import { openNavbar } from "/src/states/navbarSlice";
import style from "./SectionsLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SectionsLayout({ showIcon = true }) {
  const sectionLinks = [
    { to: "/section/us", text: "U.S." },
    { to: "/section/world", text: "World" },
    { to: "/section/business", text: "Business" },
    { to: "/section/arts", text: "Arts" },
    { to: "/section/opinion", text: "Opinion" },
    { to: "/section/health", text: "Health" },
    { to: "/section/realestate", text: "Real Estate" },
    { to: "/section/technology", text: "Technology" },
    { to: "/section/books", text: "Books" },
  ];

  const dispatch = useDispatch();
  
  // attiva il modale solo se su NAVBAR (showIcon = true)
  const handleMouseEnter = () => {
    if (showIcon) {
      dispatch(openNavbar());
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Torna all'inizio della pagina quando si clicca su un link
    dispatch(close()); // Chiudi il menu delle sezioni
  };

  return (
    <>
      {sectionLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          onClick={handleLinkClick} // Aggiungi gestore onClick per tornare all'inizio della pagina e chiudere il menu
          className={style.section}
          onMouseEnter={handleMouseEnter}
        >
          {link.text}
          {/* mostro la freccettina verso il basso solo da componente montato su NAVBAR */}
          {showIcon && <span>&nbsp;</span>}
          {showIcon && (
            <FontAwesomeIcon icon={faChevronDown} className={style.icon} />
          )}
        </Link>
      ))}
    </>
  );
}






