import { MainStack } from "./main.stack"
import { SelectStationModal, SelectDateModal } from "../features"
import { createStackNavigator } from "react-navigation"

export const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    SelectStation: {
      screen: SelectStationModal,
    },
    SelectDate: {
      screen: SelectDateModal,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  },
)
