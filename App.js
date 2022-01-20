import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,useTheme
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constant from "expo-constants";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Provider, useSelector } from "react-redux";
import {createStore,combineReducers} from "redux"
import { themeReducer } from "./src/reducer/themeReducer";
import { reducer } from "./src/reducer/reducer.js";

import Home from './src/components/screens/Home.js'
import Search from './src/components/screens/Search'
import Videoplayer from './src/components/screens/Videoplayer.js';
import Explore from "./src/components/screens/Explore.js"
import Suscribe from "./src/components/screens/Suscribe"




const mydark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headercolor: "#404040",
    textcolor: "white",
    tabiconcolor:"white"
  },
};

const mydefault = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headercolor: "white",
    textcolor: "black",
    tabiconcolor:"red"
  },
};

const rootreducer=combineReducers({
  cardData:reducer,//[],
  MyDarkMode:themeReducer//false
})

const store = createStore(rootreducer);

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome=()=>{
  const {colors}= useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = name = "home";
          } else if (route.name === "Explore") {
            iconName = name = "explore";
          } else if (route.name === "Suscribe") {
            iconName = name = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: colors.tabiconcolor,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
    </Tabs.Navigator>
  );
} 

export default App=()=>{
  return(
  <Provider store={store}>
  <Navigation/>
</Provider>)

}
export  function Navigation() {
  let currentTheme = useSelector(state => {
    return state.MyDarkMode;
  });
  return (
    <NavigationContainer theme={currentTheme ? mydark : mydefault}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootHome" component={RootHome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Videoplayer" component={Videoplayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

