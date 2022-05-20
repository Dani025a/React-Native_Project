import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation';



export default function LoginScreen({ navigation }) {

    const displaySignupScreen = () => {
        navigation.navigate('SignupScreen')
    }

    const displayHomeScreen = () => {
        navigation.navigate('AddEditDeleteScreen')
    }
   
    return (
    <View>
      <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry
      />
     <View style={styles.button}>
      <Button style={styles.button} title="Login" on onPress={displayHomeScreen}></Button></View>
    </SafeAreaView>
          
          <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={displaySignupScreen}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
        </View>
        </View>
      )
}

const styles = StyleSheet.create({
    safeAreaView:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#7979FF',
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center'

      },
      link: {
        fontWeight: 'bold',
        color: '#7979FF',

      },
      input: {
        height: 60,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button: {
        height: 80,
        width: 350,
      },
      text:{
        fontWeight: 'bold',
          fontSize: 25,
          justifyContent: 'center',
          alignItems: 'center',
          color: '#7979FF',
      }
  });



  




