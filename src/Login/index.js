import * as React from 'react';

import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Logo  from '../../assets/logo.svg';
import LogoText from '../../assets/logo_text.svg';
import { SvgUri } from 'react-native-svg';
import bg_2x from '../../assets/bg_2x.png';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.m_wrapper}>
      <ImageBackground source={bg_2x} style={styles.m_image}></ImageBackground>
      <View style={styles.m_login_wrap}>
        <LinearGradient 
        style={styles.m_gradient} 
        colors={['rgba(9, 18, 28, 1)', '#09121c', 'rgba(9, 18, 28, .4)']}
        locations={[0, 0.43, 1]}
        ></LinearGradient>
          <View style={styles.logo_cover}>
          <SvgUri width={62} height={62} uri={Logo}/>
            <Logo style={styles.logo} width={62} height={62}/>
            <LogoText style={styles.logo_text} width={68} height={27} />
          </View>
          <Text style={styles.title}>Episodic series of digital audio.</Text>
            <TouchableOpacity style={styles.m_login} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.m_login_text}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
