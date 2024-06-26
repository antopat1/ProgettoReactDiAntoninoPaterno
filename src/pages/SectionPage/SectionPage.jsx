import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "/src/components/Navbar/Navbar";
import SectionsLayout from "/src/components/SectionsLayout/SectionsLayout";
import Article from "/src/components/Article/Article";
import Footer from "/src/components/Footer/Footer";
import style from "./SectionPage.module.css";

import SearchForm from "../../components/SearchForm/SearchForm";

export default function Section() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sectionName } = useParams();

  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${API_KEY}`
    );
    return res.data.results;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", sectionName],
    queryFn: fetchArticle,
    enabled: !!sectionName,
  });

  if (isError) {
    navigate(`*`);
    console.log(error.message);
  }

  return (
    <>
      <Helmet>
        <title>
          {(() => {
            switch (sectionName) {
              case "us":
                return "U.S.";
              case "nyregion":
                return "N.Y.";
              case "realestate":
                return "Real Estate";
              default:
                return sectionName.toUpperCase();
            }
          })()}{" "}
          - New York Times Clone
        </title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      {isOpen ? (
         <div className={style.searchDiv}>
         <SearchForm/>          
         <div className={style.sectionsDiv}>
           <h3>Sections Available</h3>
           <div className={style.sectionsList}>
             <SectionsLayout showIcon={false} />
           </div>
         </div>
       </div>
      ) : (
        <>
          <hr className={style.hr}/>
      
          <hr className={style.hr}/>
          <main>
            {isLoading ? (
              <div className={style.loadingDiv}>
                <HashLoader size={200} color="#c7c7c7" />
              </div>
            ) : (
              <>
                <h1 className={style.articleSection}>
                  {(() => {
                    switch (sectionName) {
                      case "us":
                        return "U.S.";
                      case "nyregion":
                        return "N.Y.";
                      case "realestate":
                        return "Real Estate";
                      default:
                        return sectionName;
                    }
                  })()}{" "}
                  News
                </h1>
                <div className={style.articleContainer}>
                  {data.map((article) => (
                    <Article key={article.title} articleProp={article} />
                  ))}
                </div>
              </>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
