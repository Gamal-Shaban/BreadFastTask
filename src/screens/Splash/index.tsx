import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { COLORS, IMAGES } from '../../utils/theme';
import { horizontalScale, verticalScale } from '../../utils/functions';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOADING_SPLASH} />

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE
  },
  image: {
    width: horizontalScale(125),
    height: verticalScale(125),
    marginTop: verticalScale(-35),
    alignSelf: 'center',
  },
});
