import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// ==================================

type NewRecipeProps = {
    handleTouch: () => void;
}

export default function NewRecipe(props: NewRecipeProps) {
    return (
        <View style={styles.newRecipe}>
            <TouchableOpacity>
                <FontAwesome name="plus" size={30} color="white" onPress={props.handleTouch} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    newRecipe: {
        position: 'absolute',
        backgroundColor: '#00b4d8',

        width: 50,
        height: 50,
        right: 30,
        bottom: 30,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 50,
    }
});