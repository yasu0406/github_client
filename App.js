import {createStackNavigator, createAppContainer, NavigationActions, StackActions,} from 'react-navigation';
import Home from './Home';
const MainNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        navigationOptions: () => ({
            title: `Home`,
            headerBackTitle: null
        }),
    });
const App = createAppContainer(MainNavigator);
export default App;