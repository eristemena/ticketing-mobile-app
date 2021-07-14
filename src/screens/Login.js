import React from 'react';
import ScreenContainer from './ScreenContainer';
import {Text} from 'react-native';
import Button from '../components/Button';

function Login({navigation}) {
  return (
    <ScreenContainer>
      <Text>Login</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </ScreenContainer>
  );
}

export default Login;
