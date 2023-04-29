import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// ==================================
import NewRecipe from './src/NewRecipe';
// ==================================

export default function App() {
    function handleNewRecipe() {
        console.log('New Recipe');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>AI RECIPES</Text>
            </View>

            <NewRecipe handleTouch={() => handleNewRecipe()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,

        alignItems: 'center',
    },
    // ==== top ===
    top: {
        backgroundColor: '#48cae4',

        width: '98%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});
