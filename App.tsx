import React from 'react';
import Initial from './src/screens/initial';
import { SafeAreaView } from 'react-native';
import SingIn from './src/screens/singIn';

export default function Section() {
  return (
    <SafeAreaView>
      <SingIn/>     
    </SafeAreaView>
  );
}