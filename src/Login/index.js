import * as React from 'react';

import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import BgImage from '../../assets/bg.png';
import EmailTextInput from './components/EmailTextInput';
import { LinearGradient } from 'expo-linear-gradient';
import LogoIcon  from '../../assets/logo.svg';
import LogoTextIcon from '../../assets/logo_text.svg';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.m_wrapper}>
      <ImageBackground source={BgImage} style={styles.m_image}></ImageBackground>
      <View style={styles.m_login_wrap}>
        <LinearGradient 
        style={styles.m_gradient} 
        colors={['rgba(200, 200, 2008, .5)', '#000', 'rgba(9, 18, 28, .4)']}
        locations={[0, 0.43, 1]}
        ></LinearGradient>
          <View style={styles.logo_cover}>
            <LogoIcon style={styles.logo} width={62} height={62}/>
            <LogoTextIcon style={styles.logo_text} width={68} height={27} />
          </View>
          <Text style={styles.title}>Текст описания здесь</Text>
            <EmailTextInput placeholder="E-mail"></EmailTextInput>
            <TouchableOpacity style={styles.m_login} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.m_login_text}>Вход</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
