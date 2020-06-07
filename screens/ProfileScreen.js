import React from 'react';
import {  StyleSheet,Text, View,Button,} from 'react-native';
  
const ProfileScreen = () => {
    return (
      <View style={style.container}>
        <Text>Profile Screen</Text>
        <Button 
          title ="click here"
          onPress={() => alert("cilcked")}
        />
      </View>  
    );
};

export default ProfileScreen;
 
const style = StyleSheet.create({
    container: {
      flex : 1 ,
      alignItems: 'center',
      justifyContent: 'center'
    },
}); 
