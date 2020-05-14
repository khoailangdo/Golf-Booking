import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50 }} >
      <View style={{ flex: 1, justifyContent: 'center' }}>{
        isHome ?
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={30} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
          :
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10 }} />
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

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home' isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeDetails')}>
          <Text>Go to Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Home Details' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Details!</Text>
      </View>
    </SafeAreaView>
  );
}

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHandle} />
      <StackHome.Screen name='HomeDetails' component={HomeDetailsScreen} options={navOptionHandle} />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();

function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName='Settings'>
      <StackSettings.Screen name='Settings' component={SettingsScreen} options={navOptionHandle} />
      <StackSettings.Screen name='SettingsDetails' component={SettingsDetailsScreen} options={navOptionHandle} />
    </StackSettings.Navigator>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Settings' isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingsDetails')}>
          <Text>Go to Settings Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title='Settings Details' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Details!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomHeader title='Notifications' navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications screen!</Text>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const navOptionHandle = () => ({
  headerShown: false
})

function CustomerDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="user-circle" size={100} style={{ marginLeft: 10 }} />
      </View>
      <ScrollView style={{ marginLeft: 10}}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
          <Text>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home'; //home-user
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'user-cog';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomerDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

