import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>settings Screen</Text>
        <Button 
          title ="click here"
          onPress={() => alert('Clicked!')}
        />
      </View>  
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
});