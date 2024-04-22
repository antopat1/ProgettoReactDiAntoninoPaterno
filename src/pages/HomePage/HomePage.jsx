import { useSelector} from "react-redux";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import axios from "axios";
import Navbar from "/src/components/Navbar/Navbar";
import SectionsLayout from "/src/components/SectionsLayout/SectionsLayout";
import Article from "/src/components/Article/Article";
import Footer from "/src/components/Footer/Footer";
import style from "./HomePage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSelector((state) => state.sectionMenuState);

  const navigate = useNavigate();

  // funzione asincrona per fetchariare i dati da API accessibile da API salvata in ambiente privato ENV
  const fetchArticle = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    return res.data.results;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article"],
    queryFn: fetchArticle,
  });

  if (isError) {
    navigate(`*`);
    console.log(error.message);
  }

  return (
    <>
      <Helmet>
        <title>The New York Times | Antonio Paternò </title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <hr className={style.hr}/>
      <hr className={style.hr}/>
      {/* su shermi piccoli al click sulla barra hamburger in  NAVBAR il menù sezioni è aperto */}
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
            {/* in fase di fetch dati fino che non sono caricati mostra barra Loading */}
            {isLoading ? (
              <div className={style.loadingDiv}>
                <HashLoader size={200} color="#c7c7c7" />
              </div>
            ) : (
              <div className={style.articleContainer}>
                {/* mappa tutti gli oggetti articoli presenti nei dati fetchati da API */}
                {data.map((article) => (
                  <Article key={article.title} articleProp={article} />
                ))}
                
              </div>
            )}
            
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
