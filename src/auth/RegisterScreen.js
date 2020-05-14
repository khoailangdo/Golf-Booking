import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomHeader } from '../index';

export class RegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CustomHeader title='Register' navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Register Screen!</Text>
        </View>
      </View>
    );
  }
}
