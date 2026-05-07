import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-redux';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favoritesContext';
import store from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#9d5415' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        sceneStyle: { backgroundColor: '#d4d4d4' },
        drawerContentStyle: { backgroundColor: '#9d5415' },
        drawerActiveBackgroundColor: '#edbd93',
        drawerActiveTintColor: '#9d5415',
        drawerInactiveTintColor: '#ffffff',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorite Meals',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#9d5415' }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#9d5415' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                contentStyle: { backgroundColor: '#bbbbbb' },
              }}
              initialRouteName='MealsCategories'
            >
              <Stack.Screen
                name="MealsCategories"
                component={DrawerNavigator}
                options={{
                  title: 'All Categories',
                  headerShown: false,
                }}
              />
              <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
              <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
