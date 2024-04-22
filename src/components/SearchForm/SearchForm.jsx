import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "/src/states/searchBarSlice";
import { useNavigate } from "react-router-dom";
import style from "./SearchForm.module.css"; // Importa gli stili CSS

export default function SearchForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchData } = useSelector((state) => state.searchBarState);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchData}`); // Naviga alla pagina dei risultati di ricerca con il termine di ricerca come parametro nell'URL
    };

    const handleChange = (e) => {
        dispatch(change(e.target.value)); // Cambia il valore del campo di ricerca e invia un'azione `change` alla store Redux
    };

    return (
        <form className={style.searchForm} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="SEARCH"
                value={searchData}
                onChange={handleChange}
                className={style.searchBar} // Applica la classe di stile per la casella di ricerca
            />

                <button className={style.searchButton}>GO</button> {/* Applica la classe di stile per il pulsante di ricerca */}

        </form>
    );
}
