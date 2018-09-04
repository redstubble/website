import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from '../components/card';
import PSAImg from '../images/PSAPreview.png';
import GlenOrouaImg from '../images/GlenOrouaSchool.png';

export default () => (
  <Grid centered>
    <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
      <Card ButtonTitle="PSA Members App - React Native" ImgSrc={PSAImg} />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
      <Card
        ButtonTitle="Glen Oroua School - SilverStripe"
        ImgSrc={GlenOrouaImg}
      />
    </Grid.Column>
  </Grid>
);
