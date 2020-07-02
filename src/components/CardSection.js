import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = props => {
  return <View style={styles.cardSectionStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000',
  },
});

export default CardSection;
