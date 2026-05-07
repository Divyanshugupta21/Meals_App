import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import Mealslist from '../components/MealsList/MealsList';
// import { FavoritesContext } from '../../store/context/favoritesContext';
import { MEALS } from '../data/dummy-data';
const FavoritesScreen = () => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => 
        // favoriteMealsCtx.ids.includes(meal.id)
        favoriteMealIds.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No favorite meals found.</Text>
            </View>
        );
    }
    return (
        <Mealslist mealItems={favoriteMeals} />
    );
};      

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});