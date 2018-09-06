import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import { Container, Grid, Segment, Icon, Label, List } from 'semantic-ui-react';
import styled from 'styled-components';
import { red, blue, orange } from '../utils/colors';

const RedLabel = styled(Label)`
  background-color: ${red} !important;
  color: #fff !important;
`;
const BlueLabel = styled(Label)`
  background-color: ${blue} !important;
  color: #fff !important;
`;
const OrangeLabel = styled(Label)`
  background-color: ${orange} !important;
  color: #fff !important;
`;

export default () => (
  <Container id="pdf-container">
    <Segment.Group style={{ margin: '20px 0' }}>
      <Segment>
        <Grid centered>
          <Grid.Column
            mobile={16}
            tablet={5}
            computer={4}
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
            tablet={5}
            computer={4}
            textAlign="center"
            style={{ height: '5rem' }}
          >
            <Label.Group color="blue">
              <BlueLabel as="a">React</BlueLabel>
              <BlueLabel as="a">React Native</BlueLabel>
              <BlueLabel as="a">Silverstripe</BlueLabel>
              <BlueLabel as="a">ASP.NET</BlueLabel>
              <BlueLabel as="a">Linux</BlueLabel>
            </Label.Group>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={5}
            computer={4}
            textAlign="center"
            style={{ height: '5rem' }}
          >
            <OrangeLabel
              size="large"
              content="john [at] redstubble [dot] com"
              icon="mail"
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  </Container>
);
