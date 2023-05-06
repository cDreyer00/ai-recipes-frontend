import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BaseInput from '../../components/inputs/baseInput';
import ConfirmButton from '../../components/buttons/confirmButton';
import ValueInput from '../../components/inputs/valueInput';

export default function Recipe() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Recipe</Text>

            <View style={styles.inputParent}>
                <BaseInput icon="🍖" placeholder="cheese, milk, chicken..." />
            </View>
    
            <View style={styles.rowInputValues}>
                <ValueInput iconType='person' />
                <ValueInput iconType='clock' />
                <ValueInput iconType='kcal' />
            </View>

            <View style={styles.inputParent}>
                <BaseInput useExpoIcons={true} icon="blender" placeholder="blender, microwave, oven..." />
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
    inputParent: {
        marginBottom: 50,
    },
    rowInputValues:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        gap: 30,
    }
})