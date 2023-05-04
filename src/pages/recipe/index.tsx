import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BaseInput from '../../components/inputs/baseInput';
import ConfirmButton from '../../components/buttons/confirmButton';

export default function Recipe() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Recipe</Text>
            
            <View style={styles.input}>
                <BaseInput iconName="🍖" placeholder="cheese, milk, chicken..." />
            </View>

            <View style={styles.input}>
                <BaseInput useExpoIcons={true} iconName="blender" placeholder="cheese, milk, chicken..." />
            </View>

            <ConfirmButton iconName="check" handleTouch={() => { }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 50,
        textAlign: 'center',
    },
    input: {
        marginBottom: 50,
    }
})