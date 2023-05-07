import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Pressable,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons';

export type InputProps = {
    useExpoIcons?: boolean;
    icon?: any;
    placeholder: string;
    alwaysEnabled?: boolean,
}

export default function BaseInput({ useExpoIcons = false, icon: iconName, placeholder, alwaysEnabled = false }: InputProps) {
    const [enabled, setEnabled] = useState(alwaysEnabled ? true : false);
    const styles = baseStyles(enabled);

    function handlePointerDown() {
        if (alwaysEnabled) return;
        setEnabled(!enabled);
    }    

    return (
        <Pressable onPress={handlePointerDown}>
            <View style={styles.container}>
                {useExpoIcons ?
                    <MaterialCommunityIcons name={iconName} color="white" style={styles.icon} size={40} /> :
                    <Text style={styles.icon}>{iconName}</Text>
                }
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    editable={enabled}
                />

                <TouchableOpacity style={styles.add} disabled={!enabled}>
                    <FontAwesome name="plus" size={30} color="white" />
                </TouchableOpacity>

                {!enabled ? <View style={styles.disabledLine} /> : null}
            </View>
        </Pressable>
    )
}

const baseStyles = (enabled: Boolean) => StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
    },
    icon: {
        fontSize: 35,
        color: '#FFF',

        opacity: enabled ? 1 : 0.4,
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

        opacity: enabled ? 1 : 0.4,
    },
    add: {
        backgroundColor: '#F18805',
        width: 80,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

        opacity: enabled ? 1 : 0.4,
    },
    disabledLine: {
        position: 'absolute',
        zIndex: 1,

        width: '100%',
        height: 3,

        backgroundColor: '#5F5F5F',

        marginRight: 5,
        borderRadius: 50,
        flex: 1
    },
})
