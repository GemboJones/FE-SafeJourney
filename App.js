import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { MyFriends } from "./components/MyFriends";
import { AddFriend } from "./components/AddFriend";
import Header from "./components/Header";
import { useState } from "react";
import { Home } from "./components/Home";
import { UserContext, UserProvider } from "./context/userContext";
import { FriendProvider } from "./context/friendContext";
import { SignIn } from "./components/SignIn";
import { useContext } from "react";

const Drawer = createDrawerNavigator();

export default function App() {
  const {user} = useContext(UserContext)
  if (!user) {
    return <SignIn/>
  }
  return (
    <FriendProvider>
      <UserProvider>
        <NavigationContainer>
          <View>
            <Header />
          </View>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="My friends" component={MyFriends} />
            <Drawer.Screen name="Add friend" component={AddFriend} />
          </Drawer.Navigator>
        </NavigationContainer>
      </UserProvider>
    </FriendProvider>
  );
}
