import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {IMAGE} from './constants/Image';

export class CustomHeader extends Component{
    render(){
      let { navigation, isHome, title} = this.props;
        return (
            <View style={{ flexDirection: 'row', height: 50 }} >
              <View style={{ flex: 1, justifyContent: 'center' }}>{
                isHome ?
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={IMAGE.ICON_MENU} resizeMode='contain' />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                    <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={IMAGE.ICON_BACK} resizeMode='contain' />
                  </TouchableOpacity>
              }
              </View>
              <View style={{ flex: 4, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{title}</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}></View>
            </View>
          );
    }
}