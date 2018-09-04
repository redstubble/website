import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import { Container, Grid, Segment } from 'semantic-ui-react';

export default () => (
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
          <Grid.Column width={6} textAlign="right">
            Contact:
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            john [at] redstubble [dot] com
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment />
    </Segment.Group>
  </Container>
);
