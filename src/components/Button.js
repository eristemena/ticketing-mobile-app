import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.panel} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#23cc23',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 8,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Button;
