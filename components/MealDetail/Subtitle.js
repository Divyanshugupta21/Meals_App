import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497',
        borderBottomWidth: 2,
        borderBottomColor: '#9d5415',
    },
});