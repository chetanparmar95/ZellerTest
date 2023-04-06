import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ZellerCustomer} from '../../feature/home/redux/slice';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../utils/colors';

type Props = {
  user: ZellerCustomer;
};

const UserView: React.FC<Props> = ({user}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.outerCircle}>
        <Text style={styles.centeredText}>
          {user.name?.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    marginVertical: 4,
    alignItems: 'center',
  },
  outerCircle: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: PRIMARY_COLOR,
  },
  centeredText: {
    fontSize: 16,
    color: PRIMARY_COLOR,
    fontWeight: '500',
  },
  titleContainer: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  role: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});

export default UserView;
