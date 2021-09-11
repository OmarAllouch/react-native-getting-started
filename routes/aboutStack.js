import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/header";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About Page"
        component={About}
        options={({ navigation }) => {
          return {
            header: () => <Header navigation={navigation} />
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
