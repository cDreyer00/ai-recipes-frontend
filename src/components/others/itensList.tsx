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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item: {
        height: 30,
        backgroundColor: '#2E2E3A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginRight: 5,
        marginBottom: 8,
    },
    text: {
        marginHorizontal: 15,
        color: '#FFF',
    }
})
