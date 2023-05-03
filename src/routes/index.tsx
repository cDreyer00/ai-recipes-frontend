import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
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
                name="recipe"
                component={Recipe}
            />
        </Stack.Navigator>
    );
}