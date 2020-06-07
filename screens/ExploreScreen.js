import React from 'react';
import {  StyleSheet,Text, View,Button,} from 'react-native';
  
const ExploreScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
        <Button 
          title ="click here"
          onPress={() => alert("Button cilcked")}
        />
      </View>  
    );
};

export default ExploreScreen;
 
const styles = StyleSheet.create({
    container: {
      flex : 1 ,
      alignItems: 'center',
      justifyContent: 'center'
    },
});
