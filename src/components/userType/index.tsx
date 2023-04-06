import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/colors';

type Props = {
  title: string;
  selected: boolean;
  onSelected: (role: string) => void;
};

const UserType: React.FC<Props> = ({title, selected, onSelected}) => {
  const backgroundColor = selected ? SECONDARY_COLOR : 'transparent';
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={() => onSelected(title)}
      activeOpacity={0.8}>
      <View
        style={[
          styles.outerCircle,
          {borderColor: selected ? PRIMARY_COLOR : SECONDARY_COLOR},
        ]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 4,
    alignItems: 'center',
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: PRIMARY_COLOR,
  },
  title: {
    marginHorizontal: 16,
  },
});

export default UserType;
