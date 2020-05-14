import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title='Home' isHome={true} navigation={this.props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <Text>Go to Home Details</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
