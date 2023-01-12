import { StyleSheet, View } from "react-native"

export default function Separator() {
    return <View style={styles.separator}></View>
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
    },
})
