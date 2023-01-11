import { StatusBar } from "expo-status-bar"
import { Alert, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
const Separator = () => <View style={styles.separator} />

export default function App() {
    const [count, setCount] = useState(0)
    const onPress = () => setCount((pC) => pC + 1)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Click me</Text>
            </TouchableOpacity>
            <Separator />
            <Text>You clicked me {count} times!</Text>
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    separator: {
        marginVertical: 8,
    },
    button: {
        color: "#841584",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
    },
})
