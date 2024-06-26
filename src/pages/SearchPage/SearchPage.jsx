import { useSelector, useDispatch } from "react-redux";
import { change } from "/src/states/searchBarSlice";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "/src/components/Navbar/Navbar";
import SectionsLayout from "/src/components/SectionsLayout/SectionsLayout";
import SearchArticle from "/src/components/SearchArticle/SearchArticle";
import Footer from "/src/components/Footer/Footer";
import style from "./SearchPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function Search() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);
  const { searchData } = useSelector((state) => state.searchBarState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchQuery } = useParams();
  
  // sfruttando useParamers di react-router-dom creo una variabile query che contente di fetchare opporuni dati tramite API_KEY
  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`
    );
    return res.data.response.docs;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", searchQuery],
    queryFn: fetchArticle,
    enabled: !!searchQuery,
    onSuccess: () => dispatch(change("")),
  });

  if (isError) {
    navigate(`*`);
    console.log(error.message);
  }

  return (
    <>
      <Helmet>
        <title>Search - The New York Times Clone</title>
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
          <main>
          <hr className={style.hr}/>
          <hr className={style.hr}/>

            {isLoading ? (
              <div className={style.loadingDiv}>
                <HashLoader size={200} color="#c7c7c7" />
              </div>
            ) : (
              <>
                <div className={style.preArticle}>
                  <p className={style.preTitle}>Showing result for : </p>
                  <h1 className={style.searchTitle}>{searchQuery}</h1>
                </div>
                <div className={style.articleContainer}>
                  {data === 0 ? (
                    <p>No results found</p>
                  ) : (
                    data.map((article) => (
                      <SearchArticle
                        key={article.headline.main}
                        articleProp={article}
                      />
                    ))
                  )}
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
