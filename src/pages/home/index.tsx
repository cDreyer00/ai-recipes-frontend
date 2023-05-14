import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ==================================
import ConfirmButton from '../../components/buttons/confirmButton';
import RecipeCard, { RecipeData } from '../../components/buttons/recipeCard';
// ==================================

export default function Home({ navigation }: any) {
    const [recipes, setRecipes] = useState<RecipeData[]>([]);

    useEffect(() => {
        async function getRecipes() {
            const recipes = await AsyncStorage.getItem('@recipes');
            if (recipes) {
                setRecipes(JSON.parse(recipes));
            }
        }
        getRecipes();
    }, [])

    function handleNewRecipe() {
        navigation.navigate('recipe request');
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

            <ConfirmButton iconName={'plus'} handleTouch={handleNewRecipe} disabledByKeyboard={false} />
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
