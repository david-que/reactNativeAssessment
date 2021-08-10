import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../navbar/Navbar';

const HomeScreen = () => {
    const nav = useNavigation();

    const viewNews = () => {
        nav.navigate('NewsScreen')
    }

    return (
        <>
        <Navbar />
        <View>
            <View>
            <Text style={styles.quotes}>"The unexamined life is not worth living"</Text>
            </View>
            <View style={styles.btn}>
                <Button style={styles.news} onPress={viewNews} title='Show News' />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    quotes: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 200,
        marginBottom: 200,
    },
    btn: {
        width: 100,
        fontSize: 20,
        alignSelf: 'center',
    },

})

export default HomeScreen;