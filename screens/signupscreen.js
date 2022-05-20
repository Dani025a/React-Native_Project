import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation';



export default function SignupScreen( { navigation } ) {
    const displayLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    
    const displayHomeScreen = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View>
        <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.text}>Sign up</Text>
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
        <Button style={styles.button} title="Sign up" onPress={displayHomeScreen}></Button></View>
      </SafeAreaView>
            
            <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={displayLoginScreen}>
            <Text style={styles.link}>Login</Text>
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
