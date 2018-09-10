import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Project from '../components/project'
import PSAImg from '../images/PSAPreview.png'
import GlenOrouaImg from '../images/GlenOrouaSchool.png'

export default () => (
  <Container style={{ margin: '20px 0' }}>
    <Grid centered>
      <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
        <Project ButtonTitle="PSA Members App - React Native" ImgSrc={PSAImg} />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
        <Project
          ButtonTitle="Glen Oroua School - SilverStripe"
          ImgSrc={GlenOrouaImg}
        />
      </Grid.Column>
    </Grid>
  </Container>
)
