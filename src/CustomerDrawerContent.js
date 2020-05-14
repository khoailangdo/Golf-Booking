import React, {Component} from 'react';
import { View, Text, Button, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {IMAGE} from './constants/Image'

export class CustomerDrawerContent extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={IMAGE.ICON_PROFILE} style={{ width: 120, height: 120, borderRadius: 60 }} resizeMode='contain' />
              </View>
              <ScrollView style={{ marginLeft: 10 }}>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('MenuTab')}>
                  <Text>MenuTab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Notifications')}>
                  <Text>Notifications</Text>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          );
    }
}