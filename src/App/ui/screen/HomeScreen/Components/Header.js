import React, {useState} from 'react';
import _ from 'lodash';
import {
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import BackArrowWhite from '@app/ui/assets/svg/left-arrow.svg';
import RoundedCancelDark from '@app/ui/assets/svg/RoundedCancelDark.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setData, setProduct} from '@app/redux';
import {product, store} from '@app/utils/dummyData';

const SearchComponent = ({navigation}) => {
  const dispatch = useDispatch();
  const routeRedux = useSelector(state => state.SearchRouteReducer);

  const data = routeRedux.route === 'Product' ? product : store;
  const [searchQueryText, setSearchQueryText] = useState('');

  const onChangeText = input => {
    if (input === '') {
      routeRedux.route === 'Product'
        ? dispatch(setProduct(data))
        : dispatch(setData(data));
    } else {
      const filtered = data.filter(p =>
        p.name.toLowerCase().includes(input.toLowerCase()),
      );

      routeRedux.route === 'Product'
        ? dispatch(setProduct(filtered))
        : dispatch(setData(filtered));
    }
  };
  const delay = _.debounce(onChangeText, 1000);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginRight: 18}}>
        <BackArrowWhite width={20} height={20} />
      </TouchableOpacity>
      <View removeClippedSubviews={true} style={styles.searchContainer}>
        <TextInput
          contextMenuHidden={true}
          style={{flexGrow: 1, marginLeft: 10, height: 37, color: 'black'}}
          placeholder={'Search'}
          placeholderTextColor={'black'}
          onChangeText={text => {
            delay(text);
            setSearchQueryText(text);
          }}
          maxLength={4000}
          value={searchQueryText}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchQueryText('');
            onChangeText('');
          }}>
          {searchQueryText !== '' && <RoundedCancelDark />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    height: 70,
    paddingVertical: 7,
    paddingBottom: 7,
    paddingTop: Platform.OS === 'ios' ? 27 : 10,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFF',
    paddingRight: 20,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default SearchComponent;
