import React from "react";
import styles from "./Modal.module.css";
import SectionsLayout from "../SectionsLayout/SectionsLayout";
import logoImmage1 from "../../assets/img/Logo1.webp";
import logoImmage2 from "../../assets/img/Logo2.webp";
import logoImmage3 from "../../assets/img/Logo3.webp";
import logoImmage4 from "../../assets/img/Logo4.webp";

import { useDispatch } from 'react-redux';

import { closeNavbar } from "/src/states/navbarSlice";


function Modal() {
      
    const dispatch = useDispatch();
   
    const handleMouseLeave = () => {
    dispatch(closeNavbar());
  };


  return (
    
    // All'uscita del mouse dall'area del modale disattiva lo stesso
    <div className={styles.modalBackground} onMouseLeave={handleMouseLeave}>

      <div className={styles.modalContent}>
        <p>SECTIONS</p>
        <SectionsLayout showIcon={false} />
      </div>

      <div className={styles.column}>
        <p>TOP STORIES</p>
        <span>&nbsp;</span>
        <ul>

          <li><a href="https://www.nytimes.com/news-event/immigration-us">Immigration</a></li>
          <li><a href="https://www.nytimes.com/spotlight/abortion-news">Abortion</a></li>
          <li><a href="https://www.nytimes.com/news-event/donald-trump-investigations">Investigation</a></li>

        </ul>
      </div>




      <div className={styles.column}>
        <p>NEWSLETTERS</p>
        <span>&nbsp;</span>
        <ul>
          <li>
            <table>
              <tr>
                <td>
                  <a href="https://www.nytimes.com/newsletters/morning-briefing"><img src={logoImmage1} alt="Description of the image" /></a>
                </td>
                <td>
                  <a href="https://www.nytimes.com/newsletters/morning-briefing">The Morning</a>
                </td>
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td>
                  <a href="https://www.nytimes.com/newsletters/upshot"><img src={logoImmage2} alt="Description of the image" /></a>
                </td>
                <td>
                  <a href="https://www.nytimes.com/newsletters/upshot">The Upshot</a>
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <p className={styles.smallText}><a href="https://www.nytimes.com/newsletters">See all newsletters </a></p>
      </div>

      <div className={styles.column}>
        <p>PODCAST</p>
        <span>&nbsp;</span>
        <ul>

          <li>
            <table>
              <tr>
                <td>
                  <a href="https://www.nytimes.com/column/the-daily"><img src={logoImmage3} alt="Description of the image" /></a>
                </td>
                <td>
                  <a href="https://www.nytimes.com/column/the-daily">The Daily</a>
                </td>
              </tr>
            </table>
          </li>


          <li>
            <table>
              <tr>
                <td>
                  <a href="https://www.nytimes.com/column/election-run-up-podcast"><img src={logoImmage4} alt="Description of the image" /></a>
                </td>
                <td>
                  <a href="https://www.nytimes.com/column/election-run-up-podcast">The Run-up</a>
                </td>
              </tr>
            </table>
          </li>

        </ul>
        <p className={styles.smallText}><a href="https://www.nytimes.com/spotlight/podcasts">See all podcast </a></p>
      </div>

    </div>

  );
}

export default Modal;



