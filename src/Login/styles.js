import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    m_image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    m_wrapper: {
      flex: 1,
    },
    logo: {
      marginRight: 22,
      alignSelf: 'center'
    },
    logo_text: {
      alignSelf: 'center'
    },
    m_gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: '5%',
      borderBottomRightRadius: 25,
    },
    logo_cover: {
      flexDirection: 'row',
      marginBottom: 60
    },
    m_login_wrap: {
      width: '92%',
      position: 'relative',
      paddingTop: 56,
      paddingLeft: 32,
      paddingRight: 32,
      paddingBottom: 47,
      flex: 1,
    },
    title: {
      maxWidth: 195,
      position: 'relative',
      zIndex: 2,
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 30,
    },
    m_login: {
      marginTop: 30,
      width: 276,
      height: 51,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'rgba(51, 105, 255, 0.7)',
      shadowOffset: { width: 5, height: 0 },
      shadowRadius: 50,
      borderRadius: 99,
      backgroundColor: '#3369ff',
    },
    m_login_text: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
      lineHeight: 27.2,
    }
  });