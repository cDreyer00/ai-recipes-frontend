import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ==================================
import AsyncFloatingButton from '../../components/buttons/floatingButton';
import RecipeCard, { RecipeData } from '../../components/buttons/recipeCard';
// ==================================

export default function Home({ navigation }: any) {
    const [recipes, setRecipes] = useState<RecipeData[]>([
        {
            title: 'potato',
            description: 'a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti',
            time: 9999,
            kcal: 99999,
            emoji: '🍗',
            serves: 120,
            ingredients: [
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti",
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a",
                "a large potato",
                "a",
            ],
            utensils: [
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti",
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a",
                "a large potato",
                "a",
            ],
            steps: [
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a large potato to cook with spaghetti a",
                "a large potato to cook with spaghetti a",
                "a large potato",
                "a",
            ]
        }
    ]);

    useFocusEffect(
        React.useCallback(() => {
            async function getStorage() {
                const recipes = await AsyncStorage.getItem('@recipes');
                if (recipes) {
                    // setRecipes(JSON.parse(recipes));
                }
            }

            getStorage();

            // AsyncStorage.removeItem('@recipes');
        }, [])
    );

    async function handleNewRecipe() {
        await navigation.navigate('recipe request', { recipes });
    }

    function handleRecipePressed(recipe: RecipeData) {
        navigation.navigate('recipe', { recipe });
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Your Recipes</Text>
                <View style={styles.recipesAmountParent}>
                    <Text style={styles.recipesAmount}>{recipes.length} / 10</Text>
                </View>
            </View>

            <FlatList
                data={recipes}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}

                renderItem={({ item }) => (
                    <RecipeCard recipe={item} handleRecipePressed={handleRecipePressed} />
                )}
            />


            <AsyncFloatingButton iconName={'plus'} handleTouch={handleNewRecipe} disabledByKeyboard={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',

        alignItems: 'center',
        fontFamily: 'Roboto'
    },
    // ==== top ===
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingTop: 50,
        marginBottom: 50,
    },
    title: {
        fontSize: 32,
        color: '#FFF',
        marginBottom: 15,
    },
    recipesAmountParent: {
        width: 80,
        height: 40,
        backgroundColor: '#2E2E3A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    recipesAmount: {
        fontSize: 22,
        color: '#FFF',
    },
});



// const recipeTemplate: RecipeData = {
//     title: 'Chicken Avocado Salad',
//     description: 'A refreshing and nutritious salad made with tender chicken, creamy avocado, juicy tomatoes, and melted cheese.',
//     time: 30,
//     serves: 2,
//     kcal: 350,
//     ingredients: [
//         '2 chicken breasts, grilled and sliced',
//         '1 avocado, diced',
//         '1 tomato, diced',
//         '1/2 onion, thinly sliced',
//         '1/2 cup shredded cheese',
//         'Salt and pepper to taste'
//     ],
//     utensils: ['Grill pan', 'Mixing bowl', 'Knife'],
//     steps: [
//         'Season the chicken breasts with salt and pepper. Grill them on a grill pan until cooked through. Slice the chicken breasts into thin strips.',
//         'In a mixing bowl, combine the diced avocado, tomato, and onion. Season with salt and pepper to taste.',
//         'Add the sliced chicken to the mixing bowl and toss everything together.',
//         'Sprinkle the shredded cheese on top of the salad and serve.'
//     ],
//     emoji: '🥗'
// }