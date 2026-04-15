import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.buttons, 
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={onPress}
            >
                <View style={[ styles.container, { backgroundColor: color }]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: 'hidden',
    },
    buttons:{
        flex: 1,
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
})