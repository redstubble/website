import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import { Container, Grid, Segment } from 'semantic-ui-react';
import { FaGithub, FaMedium, FaFileTextO } from 'react-icons/lib/fa';
import Header from '../components/header';
import styled from 'styled-components';

const NoDecorationLink = {
  textDecoration: 'none',
  color: 'inherit',
};

const StyledFaGithub = styled(FaGithub)`
  transition: 0.4s;
  margin: 30px;
  &:hover {
    transition: 0.7s;
    fill: #8e2d2d;
  }
`;

const StyledFaMedium = styled(FaMedium)`
  transition: 0.4s;
  margin: 30px;
  &:hover {
    transition: 0.7s;
    fill: #4472b9;
  }
`;

const StyledFaFileTextO = styled(FaFileTextO)`
  margin: 30px;
  transition: 0.4s;
  &:hover {
    transition: 0.7s;
    fill: #e18728;
  }
`;

export default () => (
  <div style={{ textAlign: 'center' }}>
    <Header />
    <p>
      <a
        style={NoDecorationLink}
        href="https://github.com/redstubble"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFaGithub size={50} />
      </a>
      <a
        style={NoDecorationLink}
        href="https://medium.com/@redstubble"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFaMedium size={50} />
      </a>
      <a
        href="https://github.com/redstubble/website/raw/gh-pages/resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
        style={NoDecorationLink}
      >
        <StyledFaFileTextO size={50} />
      </a>
      {/* <Link to="/resume/" style={NoDecorationLink}>
        <StyledFaFileTextO size={50} />
      </Link> */}
    </p>
    <p> john [at] redstubble [dot] com</p>
    <Container>
      <Segment.Group>
        <Segment color="orange" raised compact>
          <Grid centered>
            <Grid.Column width={6} textAlign="right">
              Lingua Franca:
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              JS, C#, PHP, SQL
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={6} textAlign="right">
              Pidgin:
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              React, React Native, Silverstripe, ASP.NET
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </Container>
  </div>
);
