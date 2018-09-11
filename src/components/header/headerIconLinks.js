import React from 'react'
import { FaGithub, FaMedium } from 'react-icons/fa'
import styled from 'styled-components'
import { red, blue } from '../../utils/colors'

const NoDecorationLink = {
  textDecoration: 'none',
  color: 'inherit',
}

const StyledFaGithub = styled(props => <FaGithub {...props} />)`
  transition: 0.4s;
  margin: 0 30px;
  &:hover {
    transition: 0.7s;
    fill: ${red};
  }
`;

const StyledFaMedium = styled(props => <FaMedium {...props} />)`
  transition: 0.4s;
  margin: 0 30px;
  &:hover {
    transition: 0.7s;
    fill: ${blue};
  }
`;

export default () => (
  <p style={{textAlign: 'center'}}>
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
  </p>
)
