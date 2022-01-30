import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components";
import axiosInstance from "../../utils/axios";
import "./article.css";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async id => {
      const { data: { article } } = await axiosInstance.get(`/articles/${id}`);
      setArticle(article);
    };
    getArticle(id);
  }, [id]);

  const articleContents = article?.content
    ? article?.content.map(c => <p key={c}>{ c }</p>)
    : <p>There is no article data!</p>;

  return (
    <Container>
      <div className="article-container">
        <h1>{article?.title}</h1>
        <div className="author-area">
          <span className="author">
            <strong>Author: </strong><i>{article?.author}</i>
          </span>
          <span className="date-time">
            <strong>DateTime: </strong><i>{new Date(article?.updateDateTime).toLocaleString()}</i>
          </span>
        </div>
        <section className="article-content">
          { articleContents }
        </section>
      </div>
    </Container>
  );
};
export default Article;
