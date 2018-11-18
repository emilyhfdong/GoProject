import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

// Responsive Height : returns pixel value for a percent of window.height
export const RH = (percentOfWindowHeight) => {
  const deviceHeight = height
  const value = (percentOfWindowHeight / 100) * deviceHeight
  return Math.round(value)
}

// Responsive Width: returns pixel value for a percent of window.width
export const RW = (percentOfWindowWidth) => {
  const deviceWidth = width
  const value = (percentOfWindowWidth / 100) * deviceWidth
  return Math.round(value)
}
