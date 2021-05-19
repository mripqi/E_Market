import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image';
import AddressPinIcon from '@app/ui/assets/svg/location_pin.svg';
import DistancePinIcon from '@app/ui/assets/svg/destination.svg';
import StarIcon from '@app/ui/assets/svg/star.svg';
import ProfileIcon from '@app/ui/assets/svg/user.svg';
import {useDispatch, useSelector} from 'react-redux';
import {sizeWidth} from '@app/utils/sizeHelper';
import {useFocusEffect, useRoute} from '@react-navigation/core';
import {setSearchRoute} from '@app/redux';

export default function StoreScreen({navigation}) {
  const route = useRoute();
  const dispatch = useDispatch();

  const data = useSelector(state => state.DataReducer);
  const routeRedux = useSelector(state => state.SearchRouteReducer);
  const [dataFilter, setDataFilter] = React.useState(data);

  useEffect(() => {
    setDataFilter(data);
  }, [dataFilter, data]);

  useFocusEffect(
    React.useCallback(() => {
      route.name !== routeRedux.route
        ? dispatch(setSearchRoute(route.name))
        : '';
    }, [dispatch, route, routeRedux]),
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1}}
        keyExtractor={dataFilter => dataFilter.id}
        data={dataFilter}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Detail', {item})}>
              <FastImage
                style={styles.itemImage}
                source={{uri: item.image}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={{paddingLeft: 10, flex: 1}}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice} numberOfLines={1}>
                  {' '}
                  {item.description}
                </Text>

                <Text style={styles.itemPrice}>
                  <AddressPinIcon width={15} height={15} style={styles.icon} />
                  {item.address}
                </Text>
                <Text style={styles.itemPrice}>
                  <ProfileIcon width={15} height={15} style={styles.icon} />
                  {item.owner}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.itemPrice}>
                    <DistancePinIcon
                      width={15}
                      height={15}
                      style={styles.icon}
                    />
                    {item.distance}
                  </Text>
                  <Text style={styles.itemPrice}>
                    <StarIcon width={15} height={15} style={styles.icon} />
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      color: '#1cbdb9',
                      fontSize: 13,
                      backgroundColor: '#cbf2f1',
                      borderRadius: 10,
                      paddingVertical: 3,
                      paddingHorizontal: 5,
                      marginRight: 10,
                      fontWeight: 'bold',
                    }}>
                    {item.state ? 'Buka' : 'Tutup'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '18%',
    marginTop: '5%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  //? Styling di sini
  itemContainer: {
    width: sizeWidth(90),
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'row',
  },
  itemImage: {
    height: 140,
    width: '40%',
    borderRadius: 10,
  },
  itemName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 10,
  },
  itemPrice: {
    color: 'black',
    fontSize: 13,
    paddingBottom: 10,
  },
  itemStock: {
    textAlign: 'center',
  },
  itemButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
  icon: {
    marginRight: 5,
  },
});
