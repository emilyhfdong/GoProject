import React from "react"
import { GlobalColours } from "./colours"
import { Text } from "./text.js"
import { RH, RW } from "./responsive-dimensions"
import { View, Image, TouchableOpacity } from "react-native"

export const BaseScreen = ({ children, headerTitle, isModal, closeModal }) => (
  <View style={{ flex: 1, backgroundColor: GlobalColours.lightBlue }}>
    <View
      style={{
        height: RH(9),
        backgroundColor: GlobalColours.white,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: RH(4),
        paddingTop: RH(2),
        flexDirection: "row",
        paddingHorizontal: RW(4),
      }}
    >
      <View style={{ flex: 1 }}>
        <Text />
      </View>
      <View style={{ flex: 5, alignItems: "center" }}>
        <Text>{headerTitle}</Text>
      </View>
      <View style={{ flex: 1 }}>
        {isModal ? (
          <TouchableOpacity onPress={closeModal}>
            <Image
              resizeMode="contain"
              style={{ height: RH(2) }}
              source={require("../assets/images/close-icon.png")}
            />
          </TouchableOpacity>
        ) : (
          <Text />
        )}
      </View>
    </View>
    <View style={{ paddingHorizontal: RW(4) }}>{children}</View>
  </View>
)
