import React from  'react'
import {Text, View, StyleSheet} from 'react-native'

const ResultsList = ({title, results}) => {

    if (results == null){
        return null
    }else{
        return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>results: {results.length}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList

