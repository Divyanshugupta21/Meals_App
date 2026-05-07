import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealInfo from "../MealInfo";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate('MealDetails', {
            mealId: id,
        });
    };

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.text}>{title}</Text>
                </View>
                <MealInfo duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 200,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
});