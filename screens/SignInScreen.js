
import React from 'react';
import { StyleSheet,  Text, View, Platform ,TextInput ,TouchableOpacity, TextInputComponent } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome !</Text>
          </View>
        <View style={styles.footer}>
           <Text style={[styles.text_footer,{marginTop:15}]}>Username</Text>
            <View style={styles.action}>
              <FontAwesome
                name='user-o'
                color='#05375a'
                size={20}
              />
              <TextInput
                placeholder= 'name'
                style={styles.textInput}
                autoCapitalize= 'none'
              />
              <Feather
              name='check-circle'
              color='green'
              size={20}
              />
            </View>
            <Text style={[styles.text_footer,{ marginTop:35}]}>Password</Text>
            <View style={styles.action}>
              <FontAwesome
                  name='lock'
                  color='#05375a'
                  size={20}
              />
              <TextInput
                placeholder= 'your password'
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize='none'
              />
              <Feather
              name='eye-off'
              color='grey'
              size={20}
              />
            </View>
            <TouchableOpacity onPress={() => alert("Clicked")}
                  style={[styles.signIn,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 25
                  }]}
              >
            <Text style={[styles.textSign,{color:'black'}]}>Sign In</Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}
                  style={[styles.signIn,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 15
                  }]}
              >
            <Text style={styles.textSign}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>  
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20 ,
    paddingBottom: 50
  },
  footer:{
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  text_header:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer:{
    color: '#05375a',
    fontSize: 18
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput:{
    flex: 1,
    marginTop: Platform.OS = 'ios' ? 0 : -12 ,
    paddingLeft: 10,
    color: '#05375a'
  },
  button:{
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
