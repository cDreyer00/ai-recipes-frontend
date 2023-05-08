import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import route
import { useNavigation } from '@react-navigation/native';

export type RecipeData = {
    title: string,
    desciption: string,
    time: number,
    kcal: number,
    emoji: string,
    serves: number,
    ingredients: string[],
    utensils: string[],
    steps: string[]
}

export type RecipeCardProps = {
    recipe: RecipeData;
    handleRecipePressed: (recipe: RecipeData) => void;
}

// , { recipe, handleRecipePressed }: RecipeCardProps
export default function RecipeCard({ recipe, handleRecipePressed }: RecipeCardProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleRecipePressed(recipe)}>
                <Text style={styles.emoji}>{recipe.emoji}</Text>
                <Text style={styles.title} numberOfLines={2}>{recipe.title}</Text>
                <View style={styles.downInfos}>
                    <View style={styles.servesParent}>
                        <Text style={styles.servesText}>{recipe.serves}</Text>
                        <Ionicons name="person" size={20} color="white" />
                    </View>

                    <View style={styles.timeParent}>
                        <Text style={styles.timeText}>{recipe.time}</Text>
                        <Ionicons name="time" size={20} color="white" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E2E3A',
        width: 175,
        height: 220,

        margin: 10,
        borderRadius: 40,
        paddingHorizontal: 15,
    },
    // TOP
    emoji: {
        fontSize: 40,
        color: '#FFF',
        marginVertical: 20,
        right: 0,
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        height: 50,
        marginBottom: 35,
    },
    // DOWN 
    downInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // === serves ===
    servesParent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    servesText: {
        fontSize: 20,
        color: '#FFF',
        marginRight: 5,
    },
    // === time ===
    timeParent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 20,
        color: '#FFF',
        marginRight: 5,
    },
});