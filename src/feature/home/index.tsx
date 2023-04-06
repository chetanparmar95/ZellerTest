import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Separator from '../../components/separator';
import UserType from '../../components/userType';
import UserView from '../../components/userView';
import {RootState} from '../../store';
import {getUsers, ZellerCustomer} from './redux/slice';

const roles = ['Admin', 'Manager'];

type Props = {};

const Home: React.FC<Props> = ({}) => {
  const [selectedRole, setSelectedRole] = React.useState<string>('Admin');
  const users = useSelector((state: RootState) => state.user.customers?.items);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsers(selectedRole));
  });

  const renderTypeItem = ({item}: {item: string}) => {
    return (
      <UserType
        title={item}
        selected={selectedRole === item}
        onSelected={role => setSelectedRole(role)}
      />
    );
  };

  const renderUserItem = ({item}: {item: ZellerCustomer}) => {
    return <UserView user={item} />;
  };

  return (
    <View style={styles.container}>
      <Separator />
      <Text style={styles.heading}>{'User Types'}</Text>
      <FlatList
        data={roles}
        keyExtractor={key => key}
        renderItem={renderTypeItem}
        style={styles.listContainer}
      />
      <Separator />
      <Text style={styles.heading}>
        {selectedRole} {'Users'}
      </Text>
      <FlatList
        data={users}
        keyExtractor={key => key.id.toString()}
        renderItem={renderUserItem}
        style={styles.listContainer}
      />
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 16,
  },
});
export default Home;
