import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';

import FooterComponent from '../globals/Footer/FooterComponent.js';
import styles from './styles';

export default function ItemScreen({ route, navigation }) {
  const { id } = route.params;
  const [data, setData] = useState({});
  
  useEffect(() => {
    console.log(id);
    
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        
        setData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.containerInnerStyle}>
        <Text style={styles.titleStyle}>{data.title}</Text>
        <Text style={styles.textStyle}>{data.body}</Text>
      </View>
      <FooterComponent/>
    </SafeAreaView>
  );
}