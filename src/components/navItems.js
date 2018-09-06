import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import NavItem from './navItem';
import { red, blue, orange } from '../utils/colors';
import PageType from '../utils/pageType';

class NavItems extends Component {
  state = {};

  pages = {
    Projects: {
      title: 'Projects',
      color: red,
      pageType: PageType.projects,
    },
    Experience: {
      title: 'Experience',
      color: blue,
      pageType: PageType.experience,
    },
    Resume: {
      title: 'Resume',
      color: orange,
      pageType: PageType.resume,
    },
  };

  render({ page, resetPage, buttonHandler } = this.props) {
    return (
      <Container style={{ padding: '20px' }}>
        <Grid centered>
          <Grid.Column mobile={16} tablet={5} computer={4} textAlign="center">
            <NavItem type={PageType.projects} color={red} title="Projects" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={4} textAlign="center">
            <NavItem type={PageType.projects} color={blue} title="Experience" />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={5}
            computer={4}
            textAlign="center"
            style={{ height: '5rem' }}
          >
            <NavItem type={PageType.projects} color={orange} title="Resume" />
          </Grid.Column>
        </Grid>
        <div
          style={{
            display: 'table',
            clear: 'both',
          }}
        />
      </Container>
    );
  }
}

export default NavItems;
