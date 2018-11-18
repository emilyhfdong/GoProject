import React from "react"
import { ListItem, Text, GlobalColours, RW } from "../../shared"
import { View, TouchableOpacity } from "react-native"

export const Input = ({ onPress, type, value, placeholder }) => (
  <TouchableOpacity onPress={onPress}>
    <ListItem style={{ flexDirection: "row", alignItems: "center", paddingLeft: RW(6) }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "400" }}>{type}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={value ? {} : { color: GlobalColours.grey }}>
          {value ? value : placeholder}
        </Text>
      </View>
    </ListItem>
  </TouchableOpacity>
)
