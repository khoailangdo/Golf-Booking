import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustomerDrawerContent } from './src';
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail } from './src/tab'
import { NotificationsScreen } from './src/drawer';
import { LoginScreen, RegisterScreen} from './src/auth';
import {IMAGE} from './src/constants/Image';

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandle} />
      <StackHome.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHandle} />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();

function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName='Settings'>
      <StackSettings.Screen name='Settings' component={SettingsScreen} options={navOptionHandle} />
      <StackSettings.Screen name='SettingsDetail' component={SettingsScreenDetail} options={navOptionHandle} />
    </StackSettings.Navigator>
  );
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const navOptionHandle = () => ({
  headerShown: false
})

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOME_BLACK; 
          } else if (route.name === 'Settings') {
            iconName = focused ? IMAGE.ICON_SETTINGS : IMAGE.ICON_SETTINGS_BLACK;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

function DrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomerDrawerContent navigation = {navigation}/>}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>

  )
}

const StackApp = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Login'>
        <StackApp.Screen name='HomeApp' component={DrawerNavigation} options={navOptionHandle} />
        <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandle} />
        <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandle} />
      </StackApp.Navigator>

    </NavigationContainer>
  );
}
export default App;

