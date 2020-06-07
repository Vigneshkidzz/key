import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const BookmarkScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button 
          title ="click here"
          onPress={() => alert('Clicked!')}
        />
      </View>  
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
});