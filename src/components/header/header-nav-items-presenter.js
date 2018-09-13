import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import NavItem from './headerNavItem'
import { red, blue, orange } from '../../utils/colors'
import PageType from '../../utils/pageType'


class NavItems extends Component {
  renderItems = (obj) => {
    return Object.entries(obj).map(e => {
      const entry = e[1];
      return (
        <Grid.Column key={`${entry.title}`}
        mobile={16}
        tablet={5}
        computer={4}
        textAlign="center"
        style={{ height: '5rem' }}
      >
        <NavItem type={PageType[`${entry.pageType}`]} color={`${entry.color}`} title={`${entry.title}`} />
      </Grid.Column>)
    })
  }

  render({items} = this.props) {
    return (
      <Container style={{ padding: '20px' }}>
        <Grid centered>
        {this.renderItems(items)}
        </Grid>
        <div
          style={{
            display: 'table',
            clear: 'both',
          }}
        />
      </Container>
    )
  }
}

export default NavItems
