import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
    const { mealId } = route.params;

    const handleButtonPress = () => {
        alert('Button tapped!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Details',
            headerRight: () => {
                return (
                    <IconButton icon='star' title='Tap me!' onPress={handleButtonPress} />
                );
            },
        });
    }, [navigation]);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = selectedMeal;
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
            <MealInfo
                duration={duration}
                complexity={complexity}
                affordability={affordability}
            />
            <ScrollView>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List items={ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List items={steps} />
                </View>
            </ScrollView>
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
    },
    listContainer: {
        width: '80%',
        alignSelf: 'center',
    },


});