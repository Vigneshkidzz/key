import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions , Image} from 'react-native';

const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
              <Image 
              source ={require('../assets/logo.jpg')}
              style = {styles.logo} 
              resizeMode="stretch"
              />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
          <Button 
                title ="get Started"
                onPress={() => navigation.navigate("SignInScreen")}
            />
          </View>  
        </View>
      </View>  
    );
}; 

export default SplashScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
