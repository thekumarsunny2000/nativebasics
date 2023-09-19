import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevaedcard() {
    return (
        <View>
            <Text style={styles.headingtext}>Elevaedcard</Text>
            <ScrollView horizontal={true} style={styles.container} >
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>
                        tap
                    </Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>
                        me
                    </Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>
                        to
                    </Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>
                        scroll
                    </Text>
                </View>
                <View style={[styles.card, styles.cardelevated]}>
                    <Text>
                        more...
                    </Text>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    headingtext: {
        // width: 100,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },

    card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        // padding: 
        margin: 5
    },
    cardelevated: {
        backgroundColor: 'grey',
        // elevation: 5,
        // shadowOffset: {
        //     width: 10,
        //     height: 10,
        // },
    },
})