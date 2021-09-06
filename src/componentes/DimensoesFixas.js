import React from 'react'
import { View } from 'react-native'

const DimensoesFixas = () => {
    return(
        <View style={{width: '100%', height: '100%', 
            flexDirection:'column', justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={{flexGrow:1, backgroundColor: 'powderblue'}}/>
            <View style={{flexGrow: 2, backgroundColor: 'skyblue'}}/>
            <View style={{flexGrow: 3, backgroundColor: 'steelblue'}}/>
        </View>
    )
}

export default DimensoesFixas;