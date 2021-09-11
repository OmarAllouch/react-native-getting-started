import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={({ navigation }) => {
          return {
            header: () => <Header navigation={navigation} />
          }
        }}
      />
      <Stack.Screen name="Review Details Page" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
