import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
// import Image from '../Images/Taj.jpg'


export default function Fancycards() {
    return (
        <View>
            <Text style={styles.headingtext}>Trending places</Text>
            <View style={[styles.card, styles.elevated]}>

                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={styles.imagepic}
                />
                <View style={styles.cardbody}>
                    <Text style={styles.cardtitle}>React project</Text>
                    <Text style={styles.cardlabel}>reactnative task </Text>
                    <Text style={styles.carddes}>basics with scroll view text the recat proeject</Text>
                    <Text style={styles.cardfooter}>lets exit</Text>

                </View>
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
    elevated: {
        backgroundColor: 'grey',
        elevation: 10,
    },
    card: {
        height: 300,
        width: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    imagepic: {
        height: 180,
        marginBottom: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    cardbody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardtitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        // marginbottom: 5,
        marginBottom: 4,
    },
    cardlabel: {
        color: 'black',
    },
    carddes: {
        color: 'black',
    },
    cardfooter: {
        color: 'black',
    },

})