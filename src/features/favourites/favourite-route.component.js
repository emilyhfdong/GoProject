import React from "react"
import { TouchableOpacity, View, Image } from "react-native"
import { RH, ListItem, GlobalColours, Text, RW } from "../../shared"

export const FavouriteRoute = ({ lineColour, toDestination, fromDestination }) => (
  <TouchableOpacity>
    <ListItem>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ backgroundColor: lineColour, height: RH(6.5), width: 3, borderRadius: 3 }}>
          <Text />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3, paddingLeft: RW(6) }}>
            <Text>{fromDestination}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: RH(2) }}
              resizeMode="contain"
              source={require("../../assets/images/arrow.png")}
            />
          </View>
          <View style={{ flex: 3, paddingLeft: RW(6) }}>
            <Text>{toDestination}</Text>
          </View>
        </View>
      </View>
    </ListItem>
  </TouchableOpacity>
)
