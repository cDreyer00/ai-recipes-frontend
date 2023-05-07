import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
} from "react-native";


export default function ItensList() {
    const [itens, setItens] = useState<string[]>([
        'cheese',
        'milk',
        'chicken',
        'potato',
        'tomato',
        'onion',
        'garlic',
    ])



    return (
        <View style={styles.container}>
            {itens.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        maxWidth: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        flexWrap: 'wrap',
    },
    item: {
        maxWidth: 100,
        height: 30,
        backgroundColor: '#2E2E3A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginLeft: 10,
        marginBottom: 10,
    },
    text: {
        marginHorizontal: 15,
        color: '#FFF',
    }
})
