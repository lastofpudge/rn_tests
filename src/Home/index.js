import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import FooterComponent from '../globals/Footer/FooterComponent.js';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const route = useRoute();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={styles.itemBorder}
      />
    );
  };

  const getItem = (item) => {
    navigation.navigate('Item', {
      'id': item.id});
  };


  return (
    <SafeAreaView style={styles.containerStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Найти"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        <FooterComponent route={route.name}/>
    </SafeAreaView>
  );
}