import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Welcome from './screens/Welcome';
import Splash2 from './screens/Splash2';
import IPhone14Pro14 from './screens/IPhone14Pro14';
import IPhone14Pro13 from './screens/IPhone14Pro13';
import IPhone14Pro11 from './screens/IPhone14Pro11';
import IPhone14Pro10 from './screens/IPhone14Pro10';
import IPhone14Pro9 from './screens/IPhone14Pro9';
import IPhone14Pro8 from './screens/IPhone14Pro8';
import IPhone14Pro7 from './screens/IPhone14Pro7';
import Splash5 from './screens/Splash5';
import Splash4 from './screens/Splash4';
import Splash3 from './screens/Splash3';
import Splash1 from './screens/Splash1';
import IPhone14Pro12 from './screens/IPhone14Pro12';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconRegistry, ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Transactions from './screens/Transactions';
import Approvals from './screens/Approvals';
import Accounts from './screens/Accounts';
import More from './screens/More';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="IPhone14Pro10"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="IPhone14Pro10"
        component={IPhone14Pro10}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="IPhone14Pro11"
        component={IPhone14Pro11}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({name, style}) {
    const {height, tintColor, ...iconStyle} = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = name => ({
    toReactElement: props => MaterialIcon({name, ...props}),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      },
    );
  }
  const MaterialIconsPack = {
    name: 'material',
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Splash2"
                component={Splash2}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IPhone14Pro14"
                component={IPhone14Pro14}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IPhone14Pro13"
                component={IPhone14Pro13}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IPhone14Pro9"
                component={IPhone14Pro9}
                options={{headerShown: false}}
              />
              {/* <Stack.Screen 
                name='AuthScreens' 
                component={TabNavigator} 
                options={{ headerShown: false }}
              /> */}
              <Tab.Screen
                name="Home"
                component={IPhone14Pro10}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IPhone14Pro11"
                component={IPhone14Pro11}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Back"
                component={IPhone14Pro8}
                options={{headerShown: true}}
              />
              <Stack.Screen
                name="IPhone14Pro7"
                component={IPhone14Pro7}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Splash5"
                component={Splash5}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Splash4"
                component={Splash4}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Splash3"
                component={Splash3}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Splash1"
                component={Splash1}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="IPhone14Pro12"
                component={IPhone14Pro12}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Transactions"
                component={Transactions}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Approvals"
                component={Approvals}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Accounts"
                component={Accounts}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="More"
                component={More}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
