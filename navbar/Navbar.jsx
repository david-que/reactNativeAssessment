import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements'

const Navbar = () => {
    
    const nav = useNavigation();

    const goHome = () => {
        nav.navigate('HomeScreen');
    }

    return(
        <View>
            <Icon style={styles.arrow} name="arrow-back-outline" type='ionicon' onPress={() => {nav.goBack()}} />
            <View style={styles.container}>
                <Text>Daily News</Text>
            </View>
            <Icon style={styles.home} name="home-outline" type='ionicon' onPress={goHome} />
        </View>
    )
};

const styles = StyleSheet.create({
    arrow: {
        alignItems: 'left',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    home: {
        alignItems: 'right',
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    container: {
        alignSelf: 'center',
    },

})

export default Navbar;