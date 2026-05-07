import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import Mealslist from "../components/MealsList/MealsList";

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

    return (
        <Mealslist mealItems={displayedMeals} />
    );
}

export default MealsOverviewScreen;
