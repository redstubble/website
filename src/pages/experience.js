import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Project from '../components/project';
import HHLogo from '../images/logos/HothouseLogo.jpg';
import TDCLogo from '../images/logos/TasmanDC.jpg';
import CoreLogo from '../images/logos/image.png';

export default () => (
  <Container style={{ margin: '20px 0' }}>
    <Grid centered>
      <Grid.Column mobile={16} tablet={5} computer={5} textAlign="center">
        <Project ButtonTitle="HotHouse - Silverstripe" ImgSrc={HHLogo} />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={5} computer={5} textAlign="center">
        <Project ButtonTitle="TDC - Silverstripe / ASP.NET" ImgSrc={TDCLogo} />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={5} computer={5} textAlign="center">
        <Project
          ButtonTitle="Core-TT - ASP.NET / Javascript / D3"
          ImgSrc={CoreLogo}
        />
      </Grid.Column>
    </Grid>
  </Container>
);
