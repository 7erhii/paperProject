import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Preloader = () => {
  return (
    <View style={styles.preloader}>
      <Image
        source={require('../../assets/images/preloader.jpg')}
        style={styles.preloaderImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preloader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  preloaderImage: {
    width: width,
    height: height,
  },
});

export default Preloader;
