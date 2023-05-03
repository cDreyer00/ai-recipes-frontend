import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export type RecipeData = {
    title: string,
    desciption: string,
    time: number,
    kcal: number,
    emoji: string,
    serves: number,
    ingredients: string[],
    tools: string[],
    steps: string[]
}

export type RecipeCardProps = {
    recipe: RecipeData;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.emoji}>{recipe.emoji}</Text>
                <Text style={styles.title}>{recipe.title}</Text>
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
    // === top infos ===
    emoji: {
        fontSize: 40,
        color: '#FFF',
        marginTop: 20,
        right: 0,
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 10,
    },
    downInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        paddingHorizontal: 8,
    },
    // === serves ===
    servesParent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        bottom: 0,
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
        marginTop: 10,
    },
    timeText: {
        fontSize: 20,
        color: '#FFF',
        marginRight: 5,
    },
});