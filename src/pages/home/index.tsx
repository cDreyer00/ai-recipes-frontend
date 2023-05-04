import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
// ==================================
import ConfirmButton from '../../components/buttons/confirmButton';
import RecipeCard, { RecipeData } from '../../components/buttons/recipeCard';
// ==================================

export default function Home({ navigation }: any) {
    const [recipes, setRecipes] = useState<RecipeData[]>([
        {
            title: 'Bolo de cenoura',
            desciption: 'Bolo de cenoura com cobertura de chocolate',
            time: 60,
            kcal: 300,
            emoji: '🥕',
            serves: 8,
            ingredients: [
                '3 cenouras médias raspadas e picadas',
                '4 ovos',
                '1 xícara de óleo',
                '2 xícaras de açúcar',
                '2 xícaras de farinha de trigo',
                '1 colher de sopa de fermento em pó'
            ],
            tools: [
                'Liquidificador',
                'Forma',
                'Forno'
            ],
            steps: [
                'Em um liquidificador, adicione as cenouras, os ovos e o óleo, depois misture.',
                'Acrescente o açúcar e bata novamente por 5 minutos.',
                'Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.',
                'Acrescente o fermento e misture lentamente com uma colher.',
                'Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.'
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
            tools: [
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

    useEffect(() => {
    }, []);

    function handleNewRecipe() {
        navigation.navigate('recipe');
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
                    <RecipeCard recipe={item} />
                )}
            />

            <ConfirmButton iconName={'plus'} handleTouch={() => handleNewRecipe()} />
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
