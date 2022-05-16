import { func } from 'prop-types';
import { string } from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const  { label } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#1A9DBD',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom:24,
  },
  buttonLabel: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: 'white',
  },
});