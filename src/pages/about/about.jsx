
import { useEffect, useState } from "react";
import { Container, Paragraph } from "../../components";
import "./about.css";

const aboutData = [
  {
    title: 'Academind Discord Community',
    sentences: [
      'Join our live-chat community on Discord for free and find other students who are interested in exactly the same topics as you are.',
      'Discuss course problems, private projects, development and tech in general or take a break from learning and dive into our offtopic channels.',
      'You can also find learning partners, share your projects or simply have a great time there!'
    ]
  },
  {
    title: 'Course Q&A Forum',
    sentences: [
      'Are you stuck in a course, facing a problem or not sure about a certain concept?',
      'We\'re doing our best to provide fast and friendly help!',
      'Before you ask, make sure you compared your code to ours (you find it attached to various lectures in the course, always on the last lecture of each module).',
      'Also give Google a try! Often, googling your error message provides threads where other developers faced and solved the same problem. Their solution might work for you, too!',
      'In all other cases, we\'re happy to help on questions directly related to course lectures and/ or course code in the Q&A forum.',
      'Please understand that we don\'t offer any personal coaching, mentoring or anything like that. We can\'t help on personal projects.',
      'Sharing and discussing them in our Discord community might be a great alternative in such cases.'
    ]
  },
  {
    title: 'Refunds & Technical Issues',
    sentences: [
      'Not happy with a course? Didn\'t get what you expected?',
      'No worries, we got a 30-day money back policy - no questions asked!',
      'Send an email with the course you\'d like to get refunded from the email address with which you enrolled to support@academind.com and we\'ll get your money back.',
      'If you got technical issues, please also send a quick email to support@academind.com and describe your problem.',
      'For any course-related issues (e.g. error messages when following along, problems with code), please see the sections above.'
    ]
  },
];

const About = () => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    console.log('Get About Page Data!');
    setParagraphs(aboutData);
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