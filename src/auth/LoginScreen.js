import React, {Component} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index';

export class LoginScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login!</Text>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('HomeApp')}>
                  <Text>Go to Login</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Register!</Text>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Register')}>
                  <Text>Go to Register</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}
