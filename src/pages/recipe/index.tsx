import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
// ==================================
import { RecipeData } from '../../components/buttons/recipeCard';
import ValueInput from '../../components/inputs/valueInput';
import ItensList from '../../components/others/itensList';
// ==================================

// recipe: RecipeData
export default function Recipe({ nagivation }: any) {
    const route = useRoute();
    const { title, desciption, emoji, ingredients, utensils, serves, time, kcal } = route.params!.recipe as RecipeData;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.emoji}>{emoji}</Text>
            </View>

            <Text style={styles.description}>{desciption}</Text>

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
    }
    // BOTTOM

});