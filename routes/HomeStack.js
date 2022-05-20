import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/loginscreen";
import HomeScreen from "../screens/homescreen";
import AddScreen from "../screens/addscreen";
import SignupScreen from "../screens/signupscreen";
import EditScreen from "../screens/editscreen";

const screens = {
   LoginScreen:{
       screen: LoginScreen
   },
   SignupScreen:{
    screen: SignupScreen
},
AddScreen:{
    screen: AddScreen
},
EditScreen:{
    screen: EditScreen
},
HomeScreen:{
    screen: HomeScreen
},

}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
