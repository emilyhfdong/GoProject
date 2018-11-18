import React from "react"
import { Image } from "react-native"
import { createBottomTabNavigator } from "react-navigation"
import { Trips, Favourites } from "../features"
import { GlobalColours, RH } from "../shared"

export const MainStack = createBottomTabNavigator(
  {
    Favourites: {
      screen: Favourites,
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        title: "Plan a trip",
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let activeIcon
        if (routeName === "Favourites") {
          activeIcon = focused ? (
            <Image
              style={{ height: RH(3) }}
              resizeMode="contain"
              source={require("../assets/images/favourites-active.png")}
            />
          ) : (
            <Image
              style={{ height: RH(3) }}
              resizeMode="contain"
              source={require("../assets/images/favourites-inactive.png")}
            />
          )
        } else {
          activeIcon = focused ? (
            <Image
              style={{ height: RH(4) }}
              resizeMode="contain"
              source={require("../assets/images/trips-active.png")}
            />
          ) : (
            <Image
              style={{ height: RH(4) }}
              resizeMode="contain"
              source={require("../assets/images/trips-inactive.png")}
            />
          )
        }
        return activeIcon
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 10,
        fontWeight: "300",
      },
      style: {
        backgroundColor: GlobalColours.white,
        height: RH(9),
        borderTopColor: "transparent",
        paddingVertical: RH(1),
      },
      activeTintColor: GlobalColours.navy,
      inactiveTintColor: GlobalColours.grey,
      // showIcon: true,
    },
  },
)
{
  /* <Image source={require("../assets/images/favourites-active.png")} /> */
}
