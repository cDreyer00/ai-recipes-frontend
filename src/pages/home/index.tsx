import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
// ==================================
import ConfirmButton from '../../components/buttons/confirmButton';
import RecipeCard, { RecipeData } from '../../components/buttons/recipeCard';
// ==================================

export default function Home({ navigation }: any) {

    const [recipes, setRecipes] = useState<RecipeData[]>([
        {
            title: 'Avocado and cheese breakfast toast',
            desciption: 'A quick and easy breakfast toast that combines creamy avocado and melted cheese on top of crispy bread.',
            time: 20,
            kcal: 300,
            emoji: '🥑',
            serves: 1,
            ingredients: [
                '1 slice of bread',
                '1/2 avocado',
                '1 slice of cheese',
                '1 egg',
                'Salt',
                'Pepper',
                'Oregano'
            ],
            utensils: [
                'Toaster',
                'Frying pan'
            ],
            steps: [
                'Toast the bread.',
                'Cut the avocado in half and remove the pit.',
                'Scoop out the avocado flesh and mash it with a fork.',
                'Spread the mashed avocado on the toast.',
                'Place the cheese slice on top of the avocado.',
                'Fry the egg and place it on top of the cheese.',
                'Season with salt, pepper and oregano.'
            ]
        },
        {
            title: 'Almôndegas',
            desciption: 'Almôndegas com molho de tomate',
            time: 60,
            kcal: 800,
            serves: 4,
            emoji: '🍖',
            ingredients: [
                '500g de carne moída',
                '1 ovo',
                '1/2 xícara de farinha de trigo',
                '1/2 xícara de farinha de rosca',
                '1/2 xícara de queijo parmesão ralado',
                '1/2 xícara de leite',
                '1/2 xícara de cebola picada',
                '1 colher de sopa de alho picado',
                '1 colher de sopa de sal',
                '1 colher de sopa de pimenta-do-reino',
                '1 colher de sopa de azeite',
                '1 colher de sopa de salsinha picada',
                '1 colher de sopa de cebolinha picada'
            ],
            utensils: [
                'Tigela',
                'Frigideira',
                'Forno'
            ],
            steps: [
                'Em uma tigela, misture a carne, o ovo, a farinha de trigo, a farinha de rosca, o queijo parmesão, o leite, a cebola, o alho, o sal, a pimenta-do-reino, o azeite, a salsinha e a cebolinha.',
                'Misture bem até formar uma massa homogênea.',
                'Faça bolinhas com a massa e coloque em uma assadeira untada com azeite.',
                'Leve ao forno preaquecido a 180° C por 30 minutos.',
                'Retire do forno e reserve.',
                'Em uma frigideira, aqueça o molho de tomate e coloque as almôndegas.',
                'Sirva em seguida.'
            ]
        },
    ]);

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
