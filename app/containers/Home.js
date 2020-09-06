import React, { Component } from 'react'
import { connect } from 'react-redux'
import Peoples from '../Peoples'
import { View, Text, FlatList } from 'react-native'
import PeopleRow from '../components/PeopleRow'

class Home extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     // peoples: peoples.Search
        //         peoples: []
        // }
    }
    async componentDidMount(){
        const {addPeoples} = this.props 
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // this.setState({ peoples: data })
        addPeoples(data)
    }
    render(){
        const { peoples } = this.props
        return(
            <View>
                <FlatList 
                data= {peoples}
                renderItem={({ item: people }) => <PeopleRow people={people}/>}
                    keyExtractor={(people) => people.id}
                />    
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        peoples: state
    }
}

function mapDispathToProps(dispatch) {
    return {
        addPeoples: (peoples) => dispatch({
            type: 'ADD_PEOPLES', 
            payload: { peoples}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps,
)(Home)