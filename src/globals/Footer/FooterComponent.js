import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function FooterComponent(props){
    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            paddingTop: 15
        }}>
            <TouchableOpacity 
                onPress={ () => { 
                    navigation.navigate('Home'); 
                } }
                style={styles.iconStyle}>
                <AntDesign name="search1" size={24} color={props.route == 'Home' ? 'white' : 'gray'} />
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={ () => { 
                    navigation.navigate('Login'); 
                } }
                style={styles.iconStyle}>
                <Feather name="moon" size={24} color={props.route == 'Login' ? 'white' : 'gray'} />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={ () => { 
                    navigation.navigate('Login'); 
                } }
                style={styles.iconStyle}>
                <Entypo name="hand" size={24} color={props.route == 'Login' ? 'white' : 'gray'} />
            </TouchableOpacity>
        </View>
    )
}