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
        <View style={styles.newRecipe}>
            <TouchableOpacity>
                <FontAwesome name={props.iconName} size={30} color="white" onPress={props.handleTouch} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    newRecipe: {
        position: 'absolute',
        backgroundColor: '#F18805',

        width: 50,
        height: 50,
        right: 30,
        bottom: 30,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 50,
    }
});