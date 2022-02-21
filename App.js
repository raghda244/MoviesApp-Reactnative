import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/components/home';
import MovieDetails from './src/components/movie-details';
import MoviesProvider from './src/context/context';
import { IconComponentProvider} from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Default= createNativeStackNavigator();
export default function App() {
  return (
    <MoviesProvider>
    <NativeBaseProvider>
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <StatusBar hidden/>
      <NavigationContainer>
        <Default.Navigator
        initialRouteName='HomePage'
        >
          <Default.Screen
          name='HomePage'
          component={Home}
          />
          <Default.Screen
          name='MovieDetails'
          component={MovieDetails}
          />
        </Default.Navigator>
      </NavigationContainer>
      </IconComponentProvider>
    </NativeBaseProvider>
    </MoviesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
