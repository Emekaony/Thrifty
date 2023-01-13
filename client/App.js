import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import "react-native-gesture-handler"
import Login from "./src/screens/Login"
import ScreenA from "./src/screens/ScreenA"
import ScreenB from "./src/screens/ScreenB"

/* 

*/

const LoginStack = createStackNavigator()
const AuthStack = createStackNavigator()

const LoginFlow = () => {
    return (
        <LoginStack.Navigator initialRouteName='Login'>
            <LoginStack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <LoginStack.Screen name='Screen A' component={ScreenA} />
            <LoginStack.Screen name='Screen B' component={ScreenB} />
        </LoginStack.Navigator>
    )
}

const AuthenticatedFlow = () => {
    return (
        <AuthStack.Navigator initialRoute='Home'>
            <AuthStack.Screen name='Feed' component={Feed} />
        </AuthStack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <LoginFlow />
        </NavigationContainer>
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
