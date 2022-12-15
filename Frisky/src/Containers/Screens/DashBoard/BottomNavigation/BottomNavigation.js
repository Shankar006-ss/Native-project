import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { color } from "@/Utility/Constants";
import Home from "../Home/Home";
import Account from "../SubScreen/Account";
import Library from "../SubScreen/Library";
import Search from "../SubScreen/Search";
import { Image } from 'react-native';
import { globalstyles } from "@/Common/Style";

const Tab = createBottomTabNavigator();
export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarStyle: { backgroundColor: color.BACK},
        tabBarLabelStyle: { color: color.WHITE, fontSize: 12 }
      }}
    >
      <Tab.Screen //buttom home screen navigation
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            color = color.RED,
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen //buttom search screen navigation
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/search.png")}
            />
          ),
        }}
      />
      <Tab.Screen //buttom library screen navigation
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/library.png")}
            />
          ),
        }}
      />
      <Tab.Screen //buttom account screen navigation
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ }) => (
            <Image
              style={globalstyles.bottom}
              source={require("../../../../Image/account.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
