import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// ==================================

type FloatingButtonProps = {
    handleTouch: () => Promise<void>;
    iconName: any;
    disabledByKeyboard?: boolean;
}

export default function AsyncFloatingButton({ handleTouch, iconName, disabledByKeyboard = true }: FloatingButtonProps) {
    const [KeyboardIsOpen, setKeyboardIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onTouch() {
        setLoading(true);
        await handleTouch();
        setLoading(false);
    }

    useEffect(() => {
        if (!disabledByKeyboard) return;

        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsOpen(true)
        });
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsOpen(false)
        });

        return () => {
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
        }
    });

    return (
        <View style={styles(KeyboardIsOpen).container}>
            <TouchableOpacity style={styles(KeyboardIsOpen).button} onPress={onTouch}>
                {loading ?
                    <ActivityIndicator size={35} color="#fff" /> :
                    <FontAwesome name={iconName} size={30} color="white" />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = (enabled: boolean) => StyleSheet.create({
    container: {
        display: enabled ? 'none' : 'flex',
        position: 'absolute',

        width: 60,
        height: 60,
        right: 30,
        bottom: 30,

        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    button: {
        backgroundColor: '#F18805',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
});