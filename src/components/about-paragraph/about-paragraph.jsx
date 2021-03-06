import './about-paragraph.css';

const Paragraph = ({
  paragraphData: {
    title,
    sentences
  }
}) => {
  return (
    <section className="paragraph">
      <h1>{ title }</h1>
      {
        sentences && sentences.map(s => <p key={s}>{ s }</p>)
      }
    </section>
  );
};
export default Paragraph;