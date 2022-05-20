import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation';



export default function HomeScreen({ navigation }) {

    const displaySignupScreen = () => {
        navigation.navigate('SignupScreen')
    }
   
    return ( 
    <View>
        <Text>Home</Text>
    </View>
      )
}

const styles = StyleSheet.create({
   
  });



  

