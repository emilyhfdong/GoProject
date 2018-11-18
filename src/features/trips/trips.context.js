import React from "react"

export const TripsContext = React.createContext()

export class TripsProvider extends React.Component {
  state = {
    toStation: {
      id: "",
      name: "",
    },
    fromStation: {
      id: "",
      name: "",
    },
    date: new Date(),
  }

  actions = {
    setToStation: (id, name) => {
      const toStation = { id, name }
      this.setState({ toStation })
    },
    setFromStation: (id, name) => {
      const fromStation = { id, name }
      this.setState({ fromStation })
    },
    setDate: (date) => {
      this.setState({ date })
    },
  }

  render() {
    const value = {
      state: this.state,
      actions: this.actions,
    }
    return <TripsContext.Provider value={value}>{this.props.children}</TripsContext.Provider>
  }
}
