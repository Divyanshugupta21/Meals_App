import { StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        const pressHandler = (categoryId) => {
            navigation.navigate('MealsOverview', { 
                categoryId : itemData.item.id,
                title: itemData.item.title,
            });
        };
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler} 
            />
        );
    }

    return (
        // <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        // </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

})