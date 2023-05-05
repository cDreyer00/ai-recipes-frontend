import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons';

export type InputProps = {
    useExpoIcons?: boolean;
    icon?: any;
    placeholder: string;
}

export default function BaseInput({ useExpoIcons = false, icon: iconName, placeholder }: InputProps) {
    return (
        <View style={styles.container}>
            {useExpoIcons ?
                <MaterialCommunityIcons name={iconName} size={40} color="white" /> :
                <Text style={styles.icon}>{iconName}</Text>
            }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="rgba(255,255,255, 0.4)"
            />

            <TouchableOpacity style={styles.add}>
                <FontAwesome name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        fontSize: 32,
        color: '#FFF',
    },
    input: {
        fontSize: 14,
        color: '#FFF',
        width: 200,
        height: 40,
        paddingHorizontal: 15,
        borderColor: '#2E2E3A',
        borderWidth: 3,
        borderRadius: 50,
    },
    add: {
        backgroundColor: '#F18805',
        width: 80,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})