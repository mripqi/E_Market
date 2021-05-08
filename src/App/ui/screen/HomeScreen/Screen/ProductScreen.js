import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {store} from '@app/utils/dummyData';
import FastImage from 'react-native-fast-image';
const DEVICE = Dimensions.get('window');
import ClockIcon from '@app/ui/assets/svg/clock.svg';
import ShopIcon from '@app/ui/assets/svg/shop.svg';

export default function ProductScreen() {
  const data = store;
  const [dataFilter, setDataFilter] = React.useState(store);

  const searchQuery = input => {
    if (input == '') {
      setDataFilter(data);
    } else {
      const filtered = data.filter(p =>
        p.nama.toLowerCase().includes(input.toLowerCase()),
      );
      console.log(filtered);
      setDataFilter(filtered);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={dataFilter}
        keyExtractor={data => data.id}
        listKey={data => data.id}
        renderItem={({item}) => {
          return (
            <FlatList
              horizontal={false}
              numColumns={2}
              keyExtractor={e => e.id}
              listKey={e => e.id}
              data={item.Product}
              renderItem={e => {
                return (
                  <TouchableOpacity style={styles.itemContainer}>
                    <FastImage
                      style={styles.itemImage}
                      source={e.item.image}
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
                        {e.item.name}
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
                      {'  ' + item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
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
    width: DEVICE.width * 0.44,
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
