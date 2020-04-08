oimport React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import { Container, Heading, Link, Grid, Text } from 'theme-ui';

const Testimonial = ({ text, name }) => (
  <blockquote >
    <Text>{text}</Text>
    <br />
    <Text>
      <cite>{name}</cite>
    </Text>
  </blockquote >
);

const CommonAccessibilityMistakes = ({ title = 'Common Accessibility Mistakes and How to Avoid Them' }) => (
  <Layout>
    <SEO
      title={title}
      desc="A free introduction to web accessibility course for web developers."
      pathname="/courses/common-accessibility-mistakes"
    />
    <Container>

      <div className="hero">
        <div className="hero-text">
          <Heading as="h1" sx={{ mt: 5, mb: 4, fontSize: [6, 6, 7, 8] }}>{title}</Heading>
          <p>A free web accessibility course for web developers.</p>
          <p><em>30 days, 10 lessons, 100% fun!</em></p>
          <p>Ten lessons spread out over a month focused on frequent but easy to fix accessibility mistakes.</p>
        </div>
        <div className="hero-form">

        </div>
      </div>

      <Container variant="narrow" mt={6} mb={6}>
        <section className="lessons section l-contain--center l-contain--small">
          <Heading mb="4">Material Covered</Heading>

          <div className="lesson">
            <Heading as="h3">Lesson 1:<br /> Missing Titles</Heading>
            <p>Every web page needs a unique, informative title.</p>
          </div>

          <div className="lesson">
            <Heading as="h3">Lesson 2:<br /> Poor Heading Structure</Heading>
            <p>Learn the how to properly use heading tags to properly mark up your content.</p>
          </div>


          <div className="lesson">
            <Heading as="h3">Lesson 3:<br /> Read More / Click Here Links</Heading>
            <p>Every link should have a well-defined purpose that is clear from its link text.</p>
          </div>


          <div className="lesson">
            <Heading as="h3">Lesson 4:<br /> Missing Labels</Heading>
            <p>Every form input needs a label.</p>
          </div>

          <div className="lesson">
            <Heading as="h3">Lesson 5:<br /> CSS Grid and Flexbox</Heading>
            <p>Use the latest CSS layout features without introducing accessibility mistakes.</p>
          </div>

          <div className="lesson">
            <Heading as="h3">Lesson 6:<br /> Images and the alt attribute</Heading>
            <p>Always include the alt attribute, but it's ok to leave it blank sometimes.</p>
          </div>

          <div className="lesson">
            {/* <Heading as="h3">Lesson 7:<br />" :focus {outline: none; }"</Heading> */}
            <p>Why every site needs focus styles.</p>
          </div>
          <div className="lesson">
            <Heading as="h3">Lesson 8:<br /> Keyboard Support with JavaScript</Heading>
            <p>Making sites a joy to use without a mouse.</p>
          </div>

          <div className="lesson">
            <Heading as="h3">Lesson 9:<br /> Hiding Things</Heading>
            <p>How to hide things for everybody.</p>
          </div>

          <div className="lesson">
            <Heading as="h3">Lesson 10:<br /> ARIA Attributes</Heading>
            <p>Commonly used ARIA attributes and examples of the right way to use them.</p>
          </div>
        </section>
      </Container>

      <section className="section l-contain--center">
        <Heading mb="4">What people are saying</Heading>
        <Grid gap={2}
          columns={[2, null, 3]}>
          {testimonials.map(({ text, name }) => <Testimonial text={text} name={name} />)}
        </Grid>
      </section>

      <section className="section l-contain--center l-contain--small">
        <Heading>About the Author</Heading>
        <p>Hi, I'm Ben. I'm a self-taught web developer based in Greenville, South Carolina and work as a senior software engineer for <Link href="https://www.gatsbyjs.com">Gatsby Inc</Link>. After learning web development online and a few years working at an agency, I stumbled upon the importance of accessibility for the web, but struggled to find easy to understand resources for getting started. I was inspired to write this course to give others a simple, practical introduction to web accessibility principles.</p>
      </section>


      <section className="section l-contain--center l-contain--small">
        <div className="hero-form">
          <Heading>Ready to start?</Heading>

        </div>
      </section>
    </Container>
  </Layout>
);

CommonAccessibilityMistakes.propTypes = {};

export default CommonAccessibilityMistakes;

const testimonials = [
  {
    'text': 'Ben\'s focus on specific and relevant topics and balance of practical tips and supporting explanations make his accessibility mistakes email course hands down the most clear and digestible resource I\'ve found for concrete accessibility wins.',
    'name': 'Matthew M.'
  },
  {
    'text': 'This course is super informative, and the content is delivered in easily understandable and digestible chunks. Thanks for the great info!',
    'name': 'Angela I.'
  },
  {
    'text': 'Very good course – ordered by priority, simple solutions to each problems, if you do nothing else you’ll be way ahead.',
    'name': 'Marie-Christine M.'
  },
  {
    'text': 'Ben Robertson\'s a11y email course is the easiest to digest, most sensible material I\'ve read on the subject, it will teach you how to think about solving a11y problems rather than just giving you one-off examples.',
    'name': 'Mikael G.'
  },
  {
    'text': 'I highly recommended these tips by email. It\'s a way to consume content about accessibility in a calm way and assimilating content step by step. Thanks Ben!',
    'name': 'Raquel'
  },
  {
    'text': 'Thanks a lot for your course! Very simple, clear and gets right to it´s goal. Great for the ones that are new to web accessibility and for those who already knew some rules, but need to revisit them.',
    'name': 'Bianca M.'
  },
  {
    'text': 'You rock! Thanks for contributing to my development!',
    'name': 'Tomide A.'
  },
  {
    'text': 'Your lessons are fulfilling the void I\'m having in pursuing the levels of where I\'m heading in web development. All your demonstration are well focused on specificity of every subject. I learn a lot from you.',
    'name': 'Lloyd C.'
  }
];
