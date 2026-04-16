import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const { categoryId, title } = route.params;

    useLayoutEffect(() => {
        // Set the header title to the category title
        navigation.setOptions({
            title: title,
        });
    }, [title, navigation]);

    // const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.includes(categoryId);
    });

    const renderMealItem = (itemData) => {
        const mealItem = itemData.item;
        const mealItemProps = {
            id: mealItem.id,
            title: mealItem.title,
            duration: mealItem.duration,
            complexity: mealItem.complexity,
            affordability: mealItem.affordability,
            imageUrl: mealItem.imageUrl,
        };
        return (
            <MealItem {...mealItemProps} />
        );
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
    },
});