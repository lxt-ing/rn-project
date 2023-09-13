import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './views/HomeScreen';
import MineScreen from './views/MineScreen';
const Tab = createBottomTabNavigator();
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => {
            console.log(route);
            return {
              tabBarBadge: 3,
            };
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Mine" component={MineScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
