import React from 'react';
import {
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import BackArrowWhite from '@app/ui/assets/svg/left-arrow.svg';
import FastImage from 'react-native-fast-image';
import Constants from '@app/utils/constant';
import {useRoute} from '@react-navigation/core';
import ClockIcon from '@app/ui/assets/svg/clock.svg';
import ShopIcon from '@app/ui/assets/svg/shop.svg';

const MyComponent = ({navigation}) => {
  const data = useRoute().params.item;
  console.log(data);
  return (
    <View style={{flex: 1}}>
      <FastImage
        style={{
          width: '100%',
          height: '40%',
        }}
        source={{uri: Constants.STORE_IMAGE._1}}
        resizeMode={FastImage.resizeMode.cover}>
        <View
          style={{
            position: 'absolute',
            top: StatusBar.currentHeight,
            width: 100,
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowWhite width={30} height={30} />
          </TouchableOpacity>
        </View>
      </FastImage>
      <>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView
            style={{
              flex: 1,
              marginTop: 10,
              backgroundColor: 'white',
              flexDirection: 'column',
            }}>
            <View style={styles.infoCont}>
              <Text style={styles.learningPathLabelText}>Welcome to</Text>
              <Text style={styles.learningPathTitleText}>{data.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.priceTag}>{data.address}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 5,
              }}>
              <Text style={styles.descText}>{data.description}</Text>
            </View>
            <FlatList
              horizontal={false}
              numColumns={2}
              keyExtractor={e => e.id}
              listKey={e => e.id}
              data={data.Product}
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
                        data.state
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
                          data.state
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
                      {data.state ? '  Warung Buka' : '  Warung Tutup'}
                    </Text>
                    <Text style={styles.itemName}>
                      <ShopIcon
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 5,
                        }}
                      />
                      {'  ' + data.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      </>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
  infoCont: {
    padding: 20,
  },
  descText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 22,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  courseText: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%' - 110,
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
  courseTime: {
    flexDirection: 'row',
  },
  courseTimeText: {
    color: 'black',
    fontSize: 14,
    paddingLeft: 5,
  },
  courseTypeText: {
    color: 'grey',

    fontSize: 11,
    marginBottom: 5,
  },
  learningPathLabelText: {
    color: 'grey',
    fontSize: 11,

    marginBottom: 5,
    letterSpacing: 1.1,
  },
  learningPathTitleText: {
    color: 'black',
    fontSize: 20,
    lineHeight: 24,
    paddingBottom: 10,
  },
  courseTitle: {
    fontSize: 14,
    color: 'black',

    lineHeight: 16.6,
    marginRight: 25,
    paddingRight: 15,
  },
  container: {
    paddingHorizontal: 10,
  },
  separator: {
    height: 10,
  },
  descriptionContainer: {
    paddingBottom: 30,
    marginTop: 16,
  },
  descriptionText: {
    fontSize: 14,

    color: 'black',
  },
  priceTag: {
    color: 'black',
    fontSize: 14,
    marginLeft: 20,
  },
  durationText: {
    color: 'black',
    fontSize: 14,
  },
  itemContainer: {
    justifyContent: 'center',
    paddingBottom: 20,
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
  },
  itemImage: {
    height: 120,
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  itemName: {
    paddingTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
});
