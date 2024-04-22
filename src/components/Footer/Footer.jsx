import style from "./Footer.module.css";
import Logo from "/src/assets/img/logo.svg";
import SectionsLayout from "../SectionsLayout/SectionsLayout";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <div className={style.footerLine}></div>
        
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo(0, 0);
            }
          }}
        >
          <img src={Logo} />
        </Link>

        <span className={style.footerThinLine}></span>
        <div className={style.sectionList}>
          <SectionsLayout showIcon={false}/>
        </div>
        <span className={style.footerThinLine}></span>
        <p className={style.copyright}>© 2024 | Antonino Paternò</p>
      </div>
    </footer>
  );
}
