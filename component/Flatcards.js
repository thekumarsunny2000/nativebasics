import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Flatcards() {
    return (
        <View>
            <Text style={styles.headingtext}>Colour Boxs</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.card1]}>
                    <Text>red</Text>
                </View >
                <View style={[styles.card, styles.card2]}>
                    <Text>green</Text>
                </View >
                <View style={[styles.card, styles.card3]}>
                    <Text>blue</Text>
                </View >
                <View style={[styles.card, styles.card4]}>
                    <Text>pink</Text>
                </View >
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    headingtext: {
        // width: 100,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card1: {
        backgroundColor: 'red',
    },
    card2: {
        backgroundColor: 'green',
    },
    card3: {
        backgroundColor: 'blue',
    },
    card4: {
        backgroundColor: 'pink',
    }


});