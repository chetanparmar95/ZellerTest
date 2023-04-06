import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SECONDARY_COLOR} from '../../utils/colors';

type Props = {};

const Separator: React.FC<Props> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: SECONDARY_COLOR,
    marginVertical: 16,
  },
});

export default Separator;
