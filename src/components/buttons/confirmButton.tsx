import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// ==================================

type ConfirmButtonProps = {
    handleTouch: () => void;
    iconName: any;
}

export default function ConfirmButton(props: ConfirmButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.handleTouch}>
                <FontAwesome name={props.iconName} size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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