import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomHeader } from '../index';

export class NotificationsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CustomHeader title='Notifications' navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Notifications Screen!</Text>
        </View>
      </View>
    );
  }
}
