import react from "react";
import {View, TextInput, Text, SafeAreaView, Button, StyleSheet} from 'react-native'


export default function AddScreen( { navigation } ) {

    return (
        <View>
        <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.text}>User</Text>
        <TextInput
          style={styles.input}
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          autoCapitalize="none" 
        />
        <TextInput
          style={styles.input}
          label="Number"
          placeholder="Number"
          keyboardType='numeric'
          returnKeyType="next"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          label="Address"
          placeholder="Address"
          returnKeyType="done"
          secureTextEntry
        />
       <View style={styles.button}>
        <Button title="Add"></Button></View>
        <View style={styles.button}>
        <Button title="Edit"></Button></View>
        <View style={styles.button}>
        <Button title="Delete"></Button></View>
      </SafeAreaView>
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
      input: {
        height: 60,
        width: 350,
        margin: 7,
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
