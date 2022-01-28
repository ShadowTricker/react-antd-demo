import { Container } from "../../components";
import "./article.css";

const Article = ({
  title = "The most important lessons I’ve learned after a year of working with React",
  content = [
    'Starting out with a new technology can be quite troublesome. You usually find yourself in a sea of tutorials and articles, followed by millions of personal opinions. And every single one states that they found the “right and perfect way.”',
    'This leaves us debating whether our chosen tutorial will be a waste of time or not.',
    'Before diving into the ocean, we must understand the underlying concepts of a technology. Then we need to develop a technology-based mindset. If we are starting to learn React, we first have to think in React. Only later on we can start mixing various mindsets into one.',
    'In this article we’ll be covering some lessons I learned regarding this mindset from my personal experiences with React. We’ll go over the days at work and nights with personal projects and even the talk I gave at a local JavaScript event.',
    'So let’s go!'
  ],
  author = "Shadow Tricker",
  dateTime = new Date(),
}) => {
  const articleContents = content
    ? content.map(c => <p key={c}>{ c }</p>)
    : <p>There is no article data!</p>;

  return (
    <Container>
      <div className="article-container">
        <h1>{title}</h1>
        <div className="author-area">
          <span className="author">
            <strong>Author: </strong><i>{author}</i>
          </span>
          <span className="date-time">
            <strong>DateTime: </strong><i>{dateTime.toLocaleString()}</i>
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
