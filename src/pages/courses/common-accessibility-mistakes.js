import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import ComplexSubscribe from '../../components/subscribe/complex';
/** @jsx jsx */
import { jsx, Container, Heading, Link, Grid, Text, Box, Flex } from 'theme-ui';

const Testimonial = ({ text, name }) => (
  <blockquote sx={{
    backgroundColor: '#eeeeee',
    padding: '1em 1.5em',
    borderBottom: '5px solid #ed6a5a',
    boxShadow: '3px 2px 5px 0px rgba(0, 0, 0, 0.25)',
  }}>
    <Text>{text}</Text>
    <br />
    <Text>
      <cite>{name}</cite>
    </Text>
  </blockquote >
);

const Lesson = ({ title, subtitle, index }) => (
  <div sx={{
    maxWidth: '50%',
    marginLeft: index % 2 ? 'auto' : 0,
    mt: 2,
    mb: 4
  }}>
    <Heading as="h3">{title}</Heading>
    <Text>{subtitle}</Text>
  </div>
);

const CommonAccessibilityMistakes = ({ title = 'Common Accessibility Mistakes and How to Avoid Them' }) => (
  <Layout>
    <SEO
      title={title}
      desc="A free introduction to web accessibility course for web developers."
      pathname="/courses/common-accessibility-mistakes"
    />
    <Container>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box sx={{ flexBasis: ['100%', null, '50%'] }}>
          <Heading as="h1" sx={{ mt: 5, mb: 4, fontSize: 6 }}>{title}</Heading>
          <p>A free web accessibility course for web developers.</p>
          <p><em>30 days, 10 lessons, 100% fun!</em></p>
          <p>Ten lessons spread out over a month focused on frequent but easy to fix accessibility mistakes.</p></Box>
        <Box sx={{ flexBasis: ['100%', null, '50%'], maxWidth: '350px', margin: '0 auto' }}>
          <ComplexSubscribe />
        </Box>
      </Flex>

      <Container variant="narrow" mt={6} mb={6}>
        <section className="lessons section l-contain--center l-contain--small">
          <Heading sx={{ fontSize: 6, textAlign: 'center' }} mb="4">
            Material Covered
          </Heading>
          {lessons.map(({ title, subtitle }, index) => (
            <Lesson
              title={title}
              subtitle={subtitle}
              key={index}
              index={index}
            />
          ))}

        </section>
      </Container>

      <section mt={6} mb={6}>
        <Heading sx={{ fontSize: 6, textAlign: 'center' }} mb="4">What people are saying</Heading>
        <Box sx={{
          display: 'grid',
          gridGap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(325px, 1fr))'
        }}>
          {testimonials.map(({ text, name }) => <Testimonial text={text} name={name} />)}
        </Box>
      </section>

      <Container variant="narrow" mt={6} mb={6}>
        <Heading sx={{ fontSize: 6, textAlign: 'center' }} mb="4">About the Author</Heading>
        <p>Hi, I'm Ben. I'm a self-taught web developer based in Greenville, South Carolina and work as a senior software engineer for <Link href="https://www.gatsbyjs.com">Gatsby Inc</Link>. After learning web development online and a few years working at an agency, I stumbled upon the importance of accessibility for the web, but struggled to find easy to understand resources for getting started. I was inspired to write this course to give others a simple, practical introduction to web accessibility principles.</p>
      </Container>



      <Container variant="narrow" sx={{ maxWidth: '450px' }} mb="6">
        <Heading sx={{ fontSize: 6, textAlign: 'center' }} mb="4">Ready to start?</Heading>
        <ComplexSubscribe />
      </Container>

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

const lessons = [
  {
    'title': <span>Lesson 1: <br /> Missing Titles</span>,
    'subtitle': <p>Every web page needs a unique, informative title.</p>
  },
  {
    'title': <span>Lesson 2: <br /> Poor Heading Structure</span>,
    'subtitle': <p>Learn the how to properly use heading tags to properly mark up your content.</p>
  },
  {
    'title': <span>Lesson 3: <br /> Read More / Click Here Links</span>,
    'subtitle': <p>Every link should have a well-defined purpose that is clear from its link text.</p>
  },
  {
    'title': <span>Lesson 4: <br /> Missing Labels</span >,
    'subtitle': <p>Every form input needs a label.</p>
  },
  {
    'title': <span>Lesson 5: <br /> CSS Grid and Flexbox</span >,
    'subtitle': <p>Use the latest CSS layout features without introducing accessibility mistakes.</p>
  },
  {
    'title': <span>Lesson 6: <br /> Images and the alt attribute</span >,
    'subtitle': <p>Always include the alt attribute, but it's ok to leave it blank sometimes.</p>
  }, {
    'title': <span>Lesson 7: <br /> Focus Styles and Outlines</span >,
    'subtitle': <p>Why every site needs focus styles.</p>
  },
  {
    'title': <span>Lesson 8:<br /> Keyboard Support with JavaScript</span>,
    'subtitle': <p>Making sites a joy to use without a mouse.</p>
  },
  {
    'title': <span>Lesson 9: <br /> Hiding Things</span>,
    'subtitle': <p>How to hide things for everybody.</p>
  },
  {
    'title': <span>Lesson 10: <br /> ARIA Attributes</span>,
    'subtitle': <p>Commonly used ARIA attributes and examples of the right way to use them.</p>
  },];
