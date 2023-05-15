import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native';
// ========================================================================================================================
import BaseInput from '../../components/inputs/baseInput';
import AsyncFloatingButton from '../../components/buttons/floatingButton';
import ValueInput from '../../components/inputs/valueInput';
import ItensList from '../../components/others/itensList';
// ========================================================================================================================
import { RecipeData } from '../../components/buttons/recipeCard';

export default function RecipeRequest({ navigation }: any) {
    const [ingridients, setIngridients] = useState<string[]>([])
    const [utensils, setUtensils] = useState<string[]>([])
    const [serves, setServes] = useState<number>(0)
    const [time, setTime] = useState<number>(0)
    const [kcal, setKcal] = useState<number>(0)

    const [loading, setLoading] = useState<boolean>(false)
    const [fail, setFail] = useState<boolean>(false);

    const route = useRoute();
    const allRecipes = route.params!.recipes as RecipeData[];

    async function handleAddIngridients(itens: string[]) {
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

    async function handleConfirm() {
        if (loading) return;
        setLoading(true)
        setFail(false);

        const data = {
            ingridients,
            utensils,
            serves,
            time,
            kcal,
            language: 'en'
        }
        const baseUrl = 'https://feb3-2804-2a4c-1082-3f32-f10a-5c43-6821-12b4.ngrok-free.app'
        await axios.get(`${baseUrl}/test`)
            .then(async (response) => {
                const recipe = response.data as RecipeData;
                await AsyncStorage.setItem('@recipes', JSON.stringify([...allRecipes, recipe]));
                navigation.navigate('recipe', { recipe });
            }).catch((error) => {
                console.log(error);
                setFail(true);
            })

        setLoading(false)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Recipe</Text>
            <View style={styles.inputParent}>
                <BaseInput
                    icon="🍖"
                    placeholder="cheese, milk, chicken..."
                    alwaysEnabled={true}
                    handleAddButton={handleAddIngridients}
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

            <AsyncFloatingButton iconName="check" handleTouch={handleConfirm} />
            <ItensList itens={utensils} onItemPress={handleDeleteUtensil} />

            {fail ?
                <View style={styles.fail}>
                    <Text style={styles.failText}>The request failed</Text>
                </View>
                : null
            }
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
    },
    fail: {
        marginTop: 20,
        width: '50%',
        alignSelf: 'center',
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 40,
    },
    failText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    }
})