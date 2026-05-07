import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/favoritesReducer";
// import { FavoritesContext } from "../../store/context/favoritesContext";

function MealDetailsScreen({ route, navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const { mealId } = route.params;
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const favoriteStatusHandler = () => {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Details',
            headerRight: () => {
                return (
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        title='Tap me!' 
                        onPress={favoriteStatusHandler} 
                    />
                );
            },
        });
    }, [navigation, favoriteStatusHandler]);

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