import React, { Component } from 'react';
import TouchID from 'react-native-touch-id';
import App from '../App';
import Fallback from '../Components/Fallback';

export default class Lock extends Component<{}> {

    constructor() {
        super()
    
        this.state = {
            locked: true 
        };
      }

  componentDidMount() {
    TouchID.authenticate('Unlock with your fingerprint').then(success =>
      this.setState({ locked: false }),
    );
  }

  render() {
    if (this.state.locked) {
      return <Fallback />;
    }
    return <App />;
  }
}