import { View, Text, StyleSheet } from "react-native";
const text = process.env.HELLO
console.log("here->>>", text)
export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color:"#fff"
    }
})