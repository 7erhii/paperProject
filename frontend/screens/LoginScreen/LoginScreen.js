import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Log in" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
