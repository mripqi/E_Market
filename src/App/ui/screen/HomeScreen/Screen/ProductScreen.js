import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import ClockIcon from '@app/ui/assets/svg/clock.svg';
import ShopIcon from '@app/ui/assets/svg/shop.svg';
import {useSelector, useDispatch} from 'react-redux';
import {sizeWidth} from '@app/utils/sizeHelper';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {setSearchRoute} from '@app/redux';

export default function ProductScreen() {
  const route = useRoute();
  const dispatch = useDispatch();

  const data = useSelector(state => state.ProductReducer);
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
        horizontal={false}
        numColumns={2}
        keyExtractor={e => e.id}
        listKey={e => e.id}
        data={dataFilter}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.itemContainer}>
              <FastImage
                style={styles.itemImage}
                source={item.image}
                resizeMode={FastImage.resizeMode.cover}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginTop: '65%',
                    marginLeft: 10,
                  }}>
                  {item.name}
                </Text>
              </FastImage>
              <Text
                style={
                  item.state
                    ? {
                        color: '#2bc27d',
                        paddingLeft: 10,
                        paddingTop: 10,
                      }
                    : {
                        color: 'red',
                        paddingLeft: 10,
                        paddingTop: 10,
                      }
                }>
                <ClockIcon
                  style={
                    item.state
                      ? {
                          backgroundColor: '#2bc27d',
                          borderRadius: 50,
                          paddingRight: 10,
                        }
                      : {
                          backgroundColor: 'red',
                          borderRadius: 50,
                          paddingRight: 10,
                        }
                  }
                />
                {item.state ? '  Warung Buka' : '  Warung Tutup'}
              </Text>
              <Text style={styles.itemName}>
                <ShopIcon
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 5,
                  }}
                />
                {'  ' + item.storename}
              </Text>
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

  itemContainer: {
    width: sizeWidth(44),
    justifyContent: 'center',
    paddingBottom: 20,
    marginBottom: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemImage: {
    height: 150,
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  itemName: {
    paddingTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  itemPrice: {
    fontSize: 16,
    textAlign: 'center',
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
});
