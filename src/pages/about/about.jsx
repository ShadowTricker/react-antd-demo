
import { useEffect, useState } from "react";
import { Container, Paragraph } from "../../components";
import "./about.css";

import axiosInstance from "../../utils/axios";

const About = () => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const getAboutData = async () => {
      const { data: { aboutData } } = await axiosInstance.get('/about');
      setParagraphs(aboutData);
    };
    getAboutData();
  }, []);

  return (
    <Container>
      {
        paragraphs && paragraphs.length > 0
          && paragraphs.map(a => <Paragraph key={a.title} paragraphData={a} />)
      }
    </Container>
  );
};
export default About;