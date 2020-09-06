
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, ScrollView} from 'react-native';
import Home from './app/containers/Home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PeopleRow from './app/components/PeopleRow'
import Peoples from './app/Peoples'

// export default class App extends React.Component {
//   render(){
//     return(
//       <View>
//         <Text>Hello</Text>
//       </View>
//     )
//   }
// }

function addPeoples(state, { peoples }){
  return peoples.map(people => ({
    name: people.name
  }))
}

function peoplesReducer(state = [], action){
  switch(action.type) {
    case 'ADD_PEOPLES':
      return addPeoples(state, action.payload)
    default:
      return state
  }  
}
const store = createStore(peoplesReducer)

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

// export default () => <Home />