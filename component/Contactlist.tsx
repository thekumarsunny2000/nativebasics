import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Contactlist() {

    const contacts = [
        {
            uid: 1,
            name: 'sunny',
            status: 'developer',
            sapid: '5210',
        },
        {
            uid: 2,
            name: 'badal',
            status: 'tech lead',
            sapid: '5211',
        },
        {
            uid: 3,
            name: 'lovish',
            status: 'tester',
            sapid: '5212',
        },

    ];
    return (
        <View>
            <Text style={styles.headingtext}>Contactlist</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}>
                {contacts.map(({ uid, name, status, sapid }) => (
                    <View key={uid} style={styles.usercard}>
                        <Image
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                            style={styles.userimage}
                        />
                        <View>
                            <Text style={styles.name}> {name}</Text>
                            <Text style={styles.status}> {status}</Text>
                            <Text style={styles.sapid}> {sapid}</Text>
                        </View >
                    </View >
                ))
                }
            </ScrollView >
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
        paddingHorizontal: 16,

    },
    usercard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        marginBottom: 4,
        padding: 8,
        borderRadius: 14,
    },
    userimage: {
        height: 100,
        width: 100,
        marginBottom: 4,
        borderRadius: 100 / 2,
        marginRight: 14,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    status: {},
    sapid: {},
    // : { },

})