import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button 
          title ="go to details screen....Again"
          onPress={() => navigation.push("Details")}
        />
        <Button 
          title ="go to home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button 
          title ="go back"
          onPress={() => navigation.goBack()}
        />
        <Button 
          title ="go to first screen"
          onPress={() => navigation.popToTop()}
        />
      </View>  
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});