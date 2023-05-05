import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type ValueInputProps = {
    iconType: IconType,
}

type IconType = 'kcal' | 'clock' | 'person'

export default function ValueInput({ iconType }: ValueInputProps) {
    const icon = iconType === 'kcal' ?
    <Image source={require('../../../assets/images/icons/kcal-white.png')} style={{ width: 30, height: 30 }} /> :
    iconType === 'clock' ?
    <Image source={require('../../../assets/images/icons/clock-white.png')} style={{ width: 30, height: 30 }} /> :
    iconType === 'person' ?
    <Image source={require('../../../assets/images/icons/person-white.png')} style={{ width: 30, height: 30 }} /> : null

    return (
        <View style={styles.container}>
            {icon}
            <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor="rgba(255,255,255, 0.4)"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    input: {
        fontSize: 14,
        color: '#FFF',
        width: 40,
        height: 40,
        borderColor: '#2E2E3A',
        borderWidth: 3,
        borderRadius: 50,
        textAlign: 'center',
        marginLeft: 10,
    }
})
