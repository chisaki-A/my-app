import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props){
  const { children } = props;
  return(
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonRabel}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#1A9DBD',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    //iOSにしか対応していないプロパティ
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 9,
    //andoroidにしか対応していないプロパティ  elevationはその物体のある高さを表す
    elevation: 9,
  },

  circleButtonRabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
