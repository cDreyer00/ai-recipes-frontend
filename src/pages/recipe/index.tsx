import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
// ==================================
import { RecipeData } from '../../components/buttons/recipeCard';
import ValueInput from '../../components/inputs/valueInput';
import ItensList from '../../components/others/itensList';
// ==================================

// recipe: RecipeData
export default function Recipe({ nagivation }: any) {
    const [stepCheck, setStepCheck] = useState<boolean[]>([]);

    useEffect(() => {
        const newStepCheck = [];
        for (let i = 0; i < steps.length; i++) {
            newStepCheck.push(false);
        }
        setStepCheck(newStepCheck);
    }, []);

    function handleRecipeCheck(index: number) {
        const newStepCheck = [...stepCheck];
        newStepCheck[index] = !newStepCheck[index];
        setStepCheck(newStepCheck);
    }

    const route = useRoute();
    const { title, description, emoji, ingredients, utensils, serves, time, kcal, steps } = route.params!.recipe as RecipeData;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.emoji}>{emoji}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <View style={styles.rowInputValues}>
                <ValueInput editable={false} iconType='person' alwaysEnabled={true} value={serves} />
                <ValueInput editable={false} iconType='clock' alwaysEnabled={true} value={time} />
                <ValueInput editable={false} iconType='kcal' alwaysEnabled={true} value={kcal} />
            </View>

            <View style={styles.itensListParent}>
                <Text style={styles.itensListTitle}>Ingredients:</Text>
                <ItensList itens={ingredients} />
            </View>

            <View style={styles.itensListParent}>
                <Text style={styles.itensListTitle}>Utensils:</Text>
                <ItensList itens={utensils} />
            </View>

            <View style={styles.stepsParent}>
                <Text style={styles.stepsTitle}>Steps:</Text>
                {steps.map((step, index) => (
                    <View key={index} style={styles.step}>
                        <Text style={styles.stepNumber}>{index + 1}</Text>
                        <Text style={styles.stepText}>{step}</Text>

                        <TouchableOpacity style={styles.stepCheck} onPress={() => handleRecipeCheck(index)}>
                            <FontAwesome5 name={stepCheck[index] ? 'check-square' : 'square'} size={30} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        paddingHorizontal: 40,
    },
    // TOP
    top: {
        maxWidth: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    title: {
        fontSize: 22,
        color: '#FFF',
    },
    emoji: {
        width: 75,
        height: 100,
        fontSize: 50,
        textAlign: 'right',
        textAlignVertical: 'center',
    },
    description: {
        fontSize: 16,
        color: '#FFF',
        opacity: 0.8,
        textAlign: 'center',
        marginBottom: 30,
    },
    // MIDDLE
    rowInputValues: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginBottom: 30,
    },
    itensListParent: {
        marginBottom: 30,
    },
    itensListTitle: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 10,
    },
    // BOTTOM
    stepsTitle: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 10,
    },
    stepsParent: {
        marginBottom: 30,
    },
    step: {
        height: 80,
        padding: 20,
        backgroundColor: '#2E2E3A',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 40
    },
    stepNumber: {
        fontSize: 22,
        color: '#FFF',
        marginRight: 15,
    },
    stepText: {
        fontSize: 14,
        color: '#FFF',
        flex: 1,
    },
    stepCheck: {
        marginLeft: 10,
    }
});