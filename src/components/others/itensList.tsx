import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Pressable,
} from "react-native";


type ItensListProps = {
    itens: string[];
    onItemPress?: (item: string) => void;
}

export default function ItensList({ itens, onItemPress }: ItensListProps) {
    return (
        <View style={styles.container}>
            {itens.map((item, index) => (
                <Pressable key={index} onPress={() => onItemPress ? onItemPress(item) : null}>
                    <View key={index} style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                </Pressable>
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
