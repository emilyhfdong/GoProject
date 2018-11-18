import React from "react"
import { Text as RNText } from "react-native"
import { GlobalColours } from "./colours"

export const Text = ({ children, style }) => (
  <RNText style={[{ color: GlobalColours.navy, fontWeight: "300", fontSize: 20 }, style]}>
    {children}
  </RNText>
)
