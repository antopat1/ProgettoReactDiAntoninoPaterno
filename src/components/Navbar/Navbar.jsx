import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "/src/states/sectionMenuSlice";
import { show, hide } from "/src/states/searchBarShownSlice";
import { Link } from "react-router-dom";
import SectionsLayout from "../SectionsLayout/SectionsLayout";
import style from "./Navbar.module.css";
import Logo from "/src/assets/img/logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { formatDate } from "../../utils/dateUtils";

import Modal from "../ModalSubMenu/Modal";



export default function Navbar() {

  const date = new Date();
  
  // richiamo l'utilis necessaria alla fomattazione data 
  const formattedDate = formatDate(date);
  
  // richiamo agli stati associati agli slice definiti per la barra di ricerca e per il modale per sottomenù
  const { isOpen } = useSelector((state) => state.sectionMenuState);

  const { isShown } = useSelector((state) => state.searchBarShownState);

  const { navIsOpen } = useSelector((state) => state.navbarSliceState);


  const dispatch = useDispatch();


  return (
    <nav>
      <div className={style.extraDiv}>
        {/* al click sulla lente di ingrandimento attivo/disattivo l'area per l'inserimento imput di ricerca */}
        <FontAwesomeIcon
          icon={faSearch}
          className={style.icon}
          onClick={() => {
            if (isShown) {
              dispatch(hide());
            } else {
              dispatch(show());
            }
          }}
        />

        {isShown &&
          <SearchForm className={style.searchForm} />}


        <div className={style.languages}>
          <span> U.S.</span>
          <a href="https://www.nytimes.com/international">INTERNATIONAL</a>
          <a href="https://www.nytimes.com/ca">CANADA</a>
          <a href="https://www.nytimes.com/es">ESPANOL</a>
          <a href="https://cn.nytimes.com/">中文</a>
        </div>
        <div className={style.extraButtonDiv}>
          <a href="https://www.nytimes.com/subscription">
            <button className={style.extraButton}>
              SUBSCRIBE FOR 0.50 A WEEK
            </button>
          </a>
          <a href="https://myaccount.nytimes.com">
            <button className={style.extraButton}>LOG IN</button>
          </a>
        </div>
      </div>
      <div className={style.navWrapper}>
        {isOpen ? (
          <div className={style.empty}></div>
        ) : (

          <FontAwesomeIcon
            icon={faBars}
            className={style.icon}
            onClick={() => dispatch(open())}
          />
        )}
        <Link to="/">
          <img
            src={Logo}
            className={style.logo}
            onClick={() => dispatch(close())}
          />
        </Link>
        {/* all'eventuale menù aperto su schermi piccoli , il click della X dertina la chiusura */}
        {isOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className={style.icon}
            onClick={() => dispatch(close())}
          />
        ) : (
          <a href="https://myaccount.nytimes.com">
            <FontAwesomeIcon icon={faUser} className={style.icon} />
          </a>
        )}
      </div>
      {!isOpen && (
        <div className={style.navDate}>
          <p>{formattedDate}</p>

          <a href="https://myaccount.nytimes.com"><p>Today’s Paper</p></a>
        </div>
      )}
      {/* montaggio componente con le differenti sezioni */}
      <div className={style.navSections}>
        <SectionsLayout />
      </div>
      
      {navIsOpen && <Modal />}

    </nav>
  );
}




