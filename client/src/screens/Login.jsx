import React, { useState } from "react"
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNav = (navigation) => {
        if (2 + 2 === 4) {
            navigation.navigate("Screen A")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginview}>
                <Text>Email</Text>
                <TextInput
                    placeholder='email'
                    style={styles.input}
                    value={email}
                    onChange={(val) => setEmail(val)}
                />
                <Text style={{ marginTop: 10 }}>Password</Text>
                <TextInput
                    placeholder='password'
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChange={(val) => setPassword(val)}
                />
                <Pressable
                    style={({ pressed }) => {
                        if (pressed) {
                            // console.log("pressed")
                            return [
                                styles.loginButton,
                                styles.loginButtonpressed,
                            ]
                        } else {
                            return styles.loginButton
                        }
                    }}
                    onPress={() => handleNav(navigation)}>
                    <Text style={{ color: "white", textAlign: "center" }}>
                        Login
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    loginview: {},
    input: {
        width: 300,
        height: 50,
        borderColor: "black",
        borderWidth: 2,
        paddingLeft: 10,
        borderRadius: 10,
    },
    loginButton: {
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "black",
        width: 300,
        height: 50,
        justifyContent: "center",
        borderRadius: 20,
    },
    loginButtonpressed: {
        opacity: 0.6,
    },
})

export default Login
