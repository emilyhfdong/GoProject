import React from "react"
import { ListItem } from "./list-item"
import { TouchableOpacity } from "react-native"
import { GlobalColours } from "./colours"
import { Text } from "./text"
import { RH } from "./responsive-dimensions"

export const Button = ({ style, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <ListItem style={[{ backgroundColor: GlobalColours.navy, height: RH(9) }, style]}>
      <Text style={{ color: GlobalColours.white, textAlign: "center" }}>{text}</Text>
    </ListItem>
  </TouchableOpacity>
)
