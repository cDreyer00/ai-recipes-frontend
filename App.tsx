import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>AI RECIPES</Text>
            </View>

            <View style={styles.newRecipe}>
                <TouchableOpacity>
                    <FontAwesome name="plus" size={30} color="white" />
                </TouchableOpacity>
            </View>
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
    // ==== newRecipe ===
    newRecipe: {
        position: 'absolute',
        backgroundColor: '#00b4d8',

        width:50,
        height: 50,
        right: 30,
        bottom: 30,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 50,
    }
});
