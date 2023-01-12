import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Separator from "./src/components/Separator"

export default function App() {
    const [count, setCount] = useState(0)
    const onPress = () => setCount((pC) => pC + 1)

    useEffect(() => {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem("name", "Emeka")
                console.log("Set name")
            } catch (e) {
                // saving error
                console.log("Error setting name")
            }
        }

        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("name")
                if (value !== null) {
                    // value previously stored
                    console.log(value)
                }
            } catch (e) {
                // error reading value
                console.log("Error getting value")
            }
        }

        storeData()
        getData()
    })

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
    button: {
        color: "#841584",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
    },
})
