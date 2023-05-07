import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// ==================================

type ConfirmButtonProps = {
    handleTouch: () => void;
    iconName: any;
}

export default function ConfirmButton(props: ConfirmButtonProps) {
    const [KeyboardIsOpen, setKeyboardIsOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () =>{
            setKeyboardIsOpen(true)
        } );
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
            <TouchableOpacity style={styles(KeyboardIsOpen).button} onPress={props.handleTouch}>
                <FontAwesome name={props.iconName} size={30} color="white" />
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