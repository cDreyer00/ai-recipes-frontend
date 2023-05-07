import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    Pressable
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type ValueInputProps = {
    iconType: IconType,
    alwaysEnabled?: boolean,
}

type IconType = 'kcal' | 'clock' | 'person'

export default function ValueInput({ iconType, alwaysEnabled = false }: ValueInputProps) {
    const [enabled, setEnabled] = useState(alwaysEnabled ? true : false);

    const styles = baseStyles(enabled);

    const icon = (iconType: IconType) => {
        switch (iconType) {
            case 'kcal':
                return require('../../../assets/images/icons/kcal-white.png')
            case 'clock':
                return require('../../../assets/images/icons/clock-white.png')
            case 'person':
                return require('../../../assets/images/icons/person-white.png')
            default:
                return null
        }
    }

    function handlePointerDown() {
        if (alwaysEnabled) return;
        setEnabled(!enabled);
    }

    return (
        <>
            <Pressable onPress={handlePointerDown}>
                <View style={styles.container}>

                    <Image source={icon(iconType)} style={styles.icon} />

                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        keyboardType="numeric"
                        editable={enabled}

                    />

                    {!enabled ? <View style={styles.disabledLine} /> : null}
                </View>
            </Pressable>
        </>
    )
}

const baseStyles = (enabled: Boolean) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: 120,
    },
    input: {
        fontSize: 14,

        minWidth: 40,
        maxWidth: 60,
        height: 40,

        borderWidth: 3,
        borderRadius: 50,

        color: '#FFF',
        borderColor: '#2E2E3A',

        textAlign: 'center',
        marginLeft: 5,
        paddingHorizontal: 10,
        opacity: enabled ? 1 : 0.4,
    },
    disabledLine: {
        width: 100,
        height: 3,
        backgroundColor: '#5F5F5F',
        marginRight: 5,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        opacity: enabled ? 1 : 0.4,
    }
})
