import React from 'react'
import { View, Text } from 'react-native'

export default function PeoplerRow({ people }) {
    return (
        <View>
            <Text>{people.name}</Text>
        </View>
    )
} 