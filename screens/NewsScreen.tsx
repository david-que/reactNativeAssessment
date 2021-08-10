import * as React from "react";
import { StyleSheet, View, Text, Button, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Data from '../articles.json';
import Navbar from '../navbar/Navbar';

const NewsScreen = () => {


    return (
        <>
        <Navbar />
        <View> 
            <FlatList 
            data={Data.articles}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({item}: any) => 
            <>
            <View style={styles.card}>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <View style= {styles.description}>
            <Text>{item.description}</Text>
            </View>
            </View>
            <View>
            <Image style={styles.image} source={item.urlToImage}></Image>
            </View>
            </>
            } />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    card: {
        backgroundColor: '#D3D3D3',
    },
    description: {
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: 250, 
        height: 250,
        resizeMode: 'contain',
    }
});

export default NewsScreen;