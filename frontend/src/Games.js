import React from 'react';
import { Button } from 'grommet';
import { Gamepad } from 'grommet-icons';
import { connect } from 'react-redux';
import { createGame } from './modules/account';

class Games extends React.Component {
  componentDidMount() {
    this.props.dispatch(createGame('NOSEDIVE'));
  }

  render() {
    return <Button icon={<Gamepad />} label="Create new game" />;
  }
}

export default connect()(Games);