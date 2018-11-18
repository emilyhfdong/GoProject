import React from "react"
import { BaseScreen, Text, ListItem, RH, RW, GlobalColours } from "../../shared"
import { Image, View, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { stops } from "../../data"
import Fuse from "fuse.js"
import { TripsContext } from "../trips"

export class SelectStationModal extends React.Component {
  state = {
    searchInput: "",
  }
  render() {
    const fuse = new Fuse(stops, { keys: ["name"] })
    const filteredStops = fuse.search(this.state.searchInput)
    return (
      <TripsContext.Consumer>
        {(value) => (
          <BaseScreen
            headerTitle="Select a station"
            isModal
            closeModal={() => this.props.navigation.pop()}
          >
            <ListItem
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Image
                  resizeMode="contain"
                  style={{ width: RW(5), marginLeft: 0 }}
                  source={require("../../assets/images/search-icon.png")}
                />
              </View>
              <View style={{ flex: 8, alignItems: "flex-start" }}>
                <TextInput
                  style={{ color: GlobalColours.navy, fontSize: 20, fontWeight: "300" }}
                  value={this.state.searchInput}
                  onChangeText={(searchInput) => this.setState({ searchInput })}
                  placeholder="search a station"
                />
              </View>
            </ListItem>
            <ListItem style={{ height: RH(70) }}>
              <ScrollView>
                {filteredStops.map((stop) => (
                  <Station
                    key={stop.id}
                    name={stop.name}
                    onPress={() => {
                      value.actions.setToStation(stop.id, stop.name)
                      this.props.navigation.pop()
                    }}
                  />
                ))}
              </ScrollView>
            </ListItem>
          </BaseScreen>
        )}
      </TripsContext.Consumer>
    )
  }
}

const Station = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        height: RH(8),
        justifyContent: "center",
        paddingLeft: RW(4),
        borderColor: "transparent",
        borderBottomColor: GlobalColours.lightBlue2,
        borderWidth: 0.5,
      }}
    >
      <Text style={{ fontSize: 18 }}>{name}</Text>
    </View>
  </TouchableOpacity>
)
