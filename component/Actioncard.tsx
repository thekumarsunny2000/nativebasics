import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View >
            <Text style={styles.headingtext}>Actioncard</Text>
            <View style={[styles.card, styles.elevated]}>
                <View style={styles.headingconatiner}>

                    <Text style={styles.headertext}>
                        whats new bro
                    </Text>

                </View>
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    style={styles.imagestyle}
                />
                <View style={styles.cardbody}>
                    <Text style={styles.footercontainer}>
                        {/* <TouchableOpacity
                            onPress={() => { openWebsite('https://reactnative.dev/docs/linking') }}> */}

                        <Text>read more</Text>
                        {/* </TouchableOpacity> */}

                    </Text>
                </View>
            </View>

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
    card: {
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevated: {},
    headingconatiner: {
        padding: 8,
    },
    headertext: {},
    imagestyle: {
        height: 180,
        marginBottom: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    cardbody: {},
    footercontainer: {},

})