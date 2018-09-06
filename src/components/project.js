import React, { Component } from 'react';
import { Card, Icon, Image, Dimmer, Button } from 'semantic-ui-react';

class CodeCard extends Component {
  state = {
    hover: false,
  };

  setHover = (bool) => this.setState({ hover: bool });

  render({ ButtonTitle, ImgSrc } = this.props) {
    return (
      <Card style={{ width: '100%' }}>
        <Dimmer.Dimmable
          onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          blurring
          dimmed={this.state.hover}
        >
          <Dimmer active={this.state.hover}>
            <Button inverted content={ButtonTitle} />
          </Dimmer>
          <Image
            centered
            style={{ height: '180px', padding: '20px', objectFit: 'contain' }}
            src={ImgSrc}
          />
        </Dimmer.Dimmable>
      </Card>
    );
  }
}

export default CodeCard;
