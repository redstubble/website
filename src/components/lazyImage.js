import React from 'react';
import PropTypes from 'prop-types';
import { Visibility, Image, Loader, Dimmer, Button } from 'semantic-ui-react';

export default class LazyImage extends React.Component {
  state = {
    show: false,
  };

  showImage = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    const { size } = this.props;
    return (
      <div>
        <Dimmer.Dimmable blurring dimmed={!this.state.show}>
          <Dimmer active={!this.state.show}>
            <Button inverted content="Loading..." />
          </Dimmer>
          <Image onLoad={this.showImage} {...this.props} />
        </Dimmer.Dimmable>
      </div>
    );
  }
}
