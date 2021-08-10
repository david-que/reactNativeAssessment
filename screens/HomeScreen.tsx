import React, { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const nav = useNavigation();
    
    const viewNews = () => {
        nav.navigate('NewsScreen')
    }
    return (
        <View>
            <View>
            <Text>"The unexamined life is not worth living"</Text>
            </View>
            <View>
                <Button onPress={viewNews} title='Show News' />
            </View>
        </View>
    )
}