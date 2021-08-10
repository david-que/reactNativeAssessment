import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';

const screens = {
    HomeScreen: {
        screen: HomeScreen
    },
    NewsScreen: {
        screen: NewsScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);