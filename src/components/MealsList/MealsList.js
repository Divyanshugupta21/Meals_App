import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function Mealslist({ mealItems }) {
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
                data={mealItems}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default Mealslist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
    },
});