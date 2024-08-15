import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomeScreen from '../screens/WelcomeScreen';
import CategoriesScreen from '../screens/CategoryScreen';
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>
{
    return(
        <Tab.Navigator>
              <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Image source={require("../images/icons/home.png")} style={styles.tabImage} />
                  ),
                }}
              />
              <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Image source={require("../images/icons/categories.png")} style={styles.tabImage} />
                  ),
                }}
              />
      </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
  tabImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default TabNavigator;