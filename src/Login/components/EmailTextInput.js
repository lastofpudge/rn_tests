import * as React from 'react';

import { TextInput, View } from 'react-native';

import MailIcon  from '../../../assets/mail.svg';

const EmailTextInput = (props) => {
  return (
    <View>
      <MailIcon
        style={{
          position: 'absolute',
          left: 24,
          top: 23,
        }}
      ></MailIcon>
      <TextInput
          style={{ 
            height: 58, 
            borderColor: 'rgba(255, 255, 255, 0.15)',
            color: '#898f97',
            paddingLeft:96,
            borderWidth: 1,
            fontSize: 14,
            fontFamily: 'Roboto_400Regular',
            lineHeight: 17.5,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          {...props}
      />
    </View>
  );
}

export default EmailTextInput;