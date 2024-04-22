import style from "./Article.module.css";
import PropTypes from "prop-types";
import PlaceholderImg from "/src/assets/img/placeholder.png";

export default function Article({ articleProp }) {

  return (
    <>
      {articleProp.title ? (
        <div className={style.articleCard}>
          <div className={style.articleInfo}>
            <p className={style.articleLabel}>
              {articleProp.section === "us" && "U.S."}
              {articleProp.section === "nyregion" && "N.Y."}
              {articleProp.section === "realestate" && "Real Estate"}
              {articleProp.section === "world" && "World"}
              {articleProp.section === "" && "world"}
              {!["us", "nyregion", "realestate", "world"].includes(articleProp.section) &&
                articleProp.section}
            </p>

          </div>
          <div className={style.mainContent}>
            <a
              href={articleProp.url ? articleProp.url : null}
              target="_blank"
              rel="noopener noreferrer"
              className={style.articleLink}
            >
              <div className={style.articleImg}>
                <img
                  className={style.img}
                  src={
                    articleProp.multimedia
                      ? articleProp.multimedia[0].url
                      : PlaceholderImg
                  }
                />
                <br />
                <span className={style.copyright}>
                  {articleProp.multimedia
                    ? articleProp.multimedia[0].copyright
                    : null}
                </span>
              </div>
            </a>
            <div className={style.articleText}>
              <a
                href={articleProp.url ? articleProp.url : null}
                target="_blank"
                rel="noopener noreferrer"
                className={style.articleLink}
              >
                <h1 className={style.articleTitle}>
                  {articleProp.title ? articleProp.title : null}
                </h1>
              </a>
              <span className={style.articleCreator}>
                {articleProp.byline ? articleProp.byline : null}
              </span>
              <a
                href={articleProp.url ? articleProp.url : null}
                target="_blank"
                rel="noopener noreferrer"
                className={style.articleLink}
              >
                <p className={style.articleBody}>
                  {articleProp.abstract ? articleProp.abstract : null}
                </p>
              </a>
            </div>
            <hr className={style.hr} />
          </div>

        </div>
      ) : null}
    </>
  );
}


Article.propTypes = {
  articleProp: PropTypes.object.isRequired,
};




