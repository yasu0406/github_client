import {createStackNavigator, createAppContainer, NavigationActions, StackActions,} from 'react-navigation';
import Home from './Home';
import Detail from './Detail'
const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: `Home`,
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.params.item.name,
            })
        }
    },{
        initialRouteName: 'Home',
    });
const App = createAppContainer(MainNavigator);
export default App;