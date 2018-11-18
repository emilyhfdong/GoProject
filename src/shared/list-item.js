import React from "react"
import { View } from "react-native"
import { GlobalColours } from "./colours"
import { RH, RW } from "./responsive-dimensions"

export const ListItem = ({ children, style }) => (
  <View
    style={[
      {
        backgroundColor: GlobalColours.white,
        height: RH(10),
        borderRadius: 8,
        shadowColor: "#A5ABB7",
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 4,
        shadowOpacity: 0.13,
        justifyContent: "center",
        paddingHorizontal: RW(3),
        marginVertical: RH(0.5),
      },
      style,
    ]}
  >
    {children}
  </View>
)
