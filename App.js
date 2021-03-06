/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { RootStack, TripsProvider } from "./src"

export default class App extends Component {
  render() {
    return (
      <TripsProvider>
        <RootStack />
      </TripsProvider>
    )
  }
}
