import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import RecipeRequest from '../pages/new_recipe';
import Recipe from '../pages/recipe';

const Stack = createStackNavigator();

export default function Route() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="recipes"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="recipe request"
                component={RecipeRequest}
                options={{
                    title: "",
                    headerTintColor: '#fff',
                    // increase size
                    headerStyle: {
                        backgroundColor: '#191919',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                }}
            />

            <Stack.Screen
                name="recipe"
                component={Recipe}
                options={{
                    title: "",
                    headerTintColor: '#fff',
                    // increase size
                    headerStyle: {
                        backgroundColor: '#191919',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },

                }}
            />

        </Stack.Navigator>
    );
}