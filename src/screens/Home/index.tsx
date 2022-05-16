import { StatusBar } from 'react-native';
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import {
  Container, 
  Header
} from './styles';

export function Home() {
return (
  <Container>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Header>
      <Logo 
        width={RFValue(108)}
        height={RFValue(12)}
      />
    </Header>
  </Container>
);
}