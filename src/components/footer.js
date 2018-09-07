import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import { Container, Grid, Segment, Icon, Label, List } from 'semantic-ui-react';
import styled from 'styled-components';
import { red, blue, orange } from '../utils/colors';

const CustomLabel = styled(Label)`
  color: #fff !important;
  border-radius: 15px !important;
`;

const RedLabel = styled(CustomLabel)`
  background-color: ${red} !important;
`;
const BlueLabel = styled(CustomLabel)`
  background-color: ${blue} !important;
`;
const OrangeLabel = styled(CustomLabel)`
  background-color: ${orange} !important;
`;

export default () => (
  <Container id="pdf-container">
    <Grid centered>
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={8}
        textAlign="center"
        style={{ height: '5rem' }}
      >
        <Label.Group>
          <RedLabel>JS</RedLabel>
          <RedLabel>C#</RedLabel>
          <RedLabel>PHP</RedLabel>
          <RedLabel>SQL</RedLabel>
          <RedLabel as="a">MYSQL</RedLabel>
        </Label.Group>
      </Grid.Column>
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={8}
        textAlign="center"
        style={{ height: '5rem' }}
      >
        <Label.Group>
          <OrangeLabel as="a">React</OrangeLabel>
          <OrangeLabel as="a">React Native</OrangeLabel>
          <OrangeLabel as="a">Silverstripe</OrangeLabel>
          <OrangeLabel as="a">ASP.NET</OrangeLabel>
          <OrangeLabel as="a">Linux</OrangeLabel>
        </Label.Group>
      </Grid.Column>
      <BlueLabel
        size="large"
        content="john [at] redstubble [dot] com"
        icon="mail"
      />
    </Grid>
  </Container>
);
