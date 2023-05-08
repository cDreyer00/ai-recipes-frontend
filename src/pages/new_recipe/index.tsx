import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BaseInput from '../../components/inputs/baseInput';
import ConfirmButton from '../../components/buttons/confirmButton';
import ValueInput from '../../components/inputs/valueInput';
import ItensList from '../../components/others/itensList';

export default function RecipeRequest() {
    const [ingridients, setIngridients] = useState<string[]>([])
    const [utensils, setUtensils] = useState<string[]>([])
    const [serves, setServes] = useState<number>(0)
    const [time, setTime] = useState<number>(0)
    const [kcal, setKcal] = useState<number>(0)

    async function handleAddIngridient(itens: string[]) {
        if (itens.length === 0) return;
        for (let i = 0; i < itens.length; i++) {
            const item = itens[i];
            if (ingridients.includes(item)) {
                itens.splice(i, 1);
                i--;
            }
        }

        setIngridients([...ingridients, ...itens])
    }

    function handleDeleteIngridient(item: string) {
        setIngridients(ingridients.filter((value) => value !== item))
    }

    function handleAddUtensil(itens: string[]) {
        if (itens.length === 0) return;
        for (let i = 0; i < itens.length; i++) {
            const item = itens[i];
            if (utensils.includes(item)) {
                itens.splice(i, 1);
                i--;
            }
        }

        setUtensils([...utensils, ...itens])
    }

    function handleDeleteUtensil(item: string) {
        setUtensils(utensils.filter((value) => value !== item))
    }

    function handleConfirm() {
        console.log('Ingridients => ', ingridients)
        console.log('\n')
        console.log('Utensils => ', utensils)
        console.log('\n')
        console.log('Serves => ', serves)
        console.log('\n')
        console.log('Time => ', time)
        console.log('\n')
        console.log('Kcal => ', kcal)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Recipe</Text>

            <View style={styles.inputParent}>
                <BaseInput
                    icon="🍖"
                    placeholder="cheese, milk, chicken..."
                    alwaysEnabled={true}
                    handleAddButton={handleAddIngridient}
                />
            </View>

            <ItensList itens={ingridients} onItemPress={handleDeleteIngridient} />

            <View style={styles.rowInputValues}>
                <ValueInput iconType='person' onValueChange={setServes} value={serves} />
                <ValueInput iconType='clock' onValueChange={setTime} value={time} />
                <ValueInput iconType='kcal' onValueChange={setKcal} value={kcal} />
            </View>

            <View style={styles.inputParent}>
                <BaseInput
                    useExpoIcons={true}
                    icon="blender"
                    placeholder="blender, microwave, oven..."
                    handleAddButton={handleAddUtensil}
                />
            </View>

            <ConfirmButton iconName="check" handleTouch={handleConfirm} />
            <ItensList itens={utensils} onItemPress={handleDeleteUtensil} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 50,
        textAlign: 'center',
    },
    inputParent: {
        marginBottom: 10,
    },
    rowInputValues: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        gap: 30,
    }
})