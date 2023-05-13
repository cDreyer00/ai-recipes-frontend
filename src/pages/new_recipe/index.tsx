import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import axios from 'axios';

import BaseInput from '../../components/inputs/baseInput';
import ConfirmButton from '../../components/buttons/confirmButton';
import ValueInput from '../../components/inputs/valueInput';
import ItensList from '../../components/others/itensList';

import { RecipeData } from '../../components/buttons/recipeCard';

export default function RecipeRequest({ navigation }: any) {
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
        const data = {
            emoji: '🍖',
            ingridients,
            utensils,
            serves,
            time,
            kcal,
            language: 'en'
        }
        console.log('Data:', data);

        axios.post('https://a313-2804-2a4c-1082-3f32-a140-e66b-1035-5381.ngrok-free.app/recipe', data)
            .then((response) => {
                const recipe = response.data as RecipeData;
                console.log(recipe);
                navigation.navigate('recipe', { recipe });
            }).catch((error) => {
                console.log(error);
            })
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