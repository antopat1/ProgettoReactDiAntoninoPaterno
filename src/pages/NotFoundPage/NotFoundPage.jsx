import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "/src/components/Navbar/Navbar";
import Footer from "/src/components/Footer/Footer";
import style from "./NotFoundPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function NotFound() {

  return (
    <>
      <Helmet>
        <title>Page Not Found - The New York Times Clone</title>
      </Helmet>
      <header>
        <Navbar />
        
      </header>
      <main>
        <hr className={style.hr}/>
        <hr className={style.hr}/>

        <div className={style.container}>
          <div className={style.notFoundDiv}>
            <div>
              <Link to="/" className={style.redirect}>
                Go to Home Page »
              </Link>
              <h1>Page Not Found</h1>
            </div>
            <p className={style.notFoundMessage}>
              We’re sorry!<br/>
              <nobr> Try searching for a topic on the following form</nobr>
            </p>
            
            <SearchForm/>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
