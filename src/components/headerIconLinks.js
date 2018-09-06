import React from 'react';
import { FaGithub, FaMedium, FaFileTextO } from 'react-icons/lib/fa';
import styled from 'styled-components';
import { red, blue, orange } from '../utils/colors';

const NoDecorationLink = {
  textDecoration: 'none',
  color: 'inherit',
};

const StyledFaGithub = styled(FaGithub)`
  transition: 0.4s;
  margin: 0 30px;
  &:hover {
    transition: 0.7s;
    fill: ${red};
  }
`;

const StyledFaMedium = styled(FaMedium)`
  transition: 0.4s;
  margin: 0 30px;
  &:hover {
    transition: 0.7s;
    fill: ${blue};
  }
`;

const StyledFaFileTextO = styled(FaFileTextO)`
  margin: 0 30px;
  transition: 0.4s;
  &:hover {
    transition: 0.7s;
    fill: ${orange};
  }
`;

export default () => (
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
    {/* <a
      href="https://github.com/redstubble/website/raw/gh-pages/resume.pdf"
      rel="noopener noreferrer"
      target="_blank"
      style={NoDecorationLink}
    >
      <StyledFaFileTextO size={50} />
    </a> */}
  </p>
);
