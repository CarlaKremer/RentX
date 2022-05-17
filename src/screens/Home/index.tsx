import { StatusBar } from 'react-native';
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import {
  Container, 
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';

import { CarCard } from '../../components/CarCard/index.';

export function Home() {
  const carDataOne = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent:{
        period: 'ao dia',
        price: '120',
    },
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F10%2F2019%2F01%2F2019-audi-rs5-coupe-angular-front.png&f=1&nofb=1'
  }
return (
  <Container>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Header>
    <HeaderContent>
      <Logo 
        width={RFValue(108)}
        height={RFValue(12)}
      />
      <TotalCars>12 carros disponíveis</TotalCars>
    </HeaderContent>
    </Header>
    <CarList
      data={[1,2,3]}
      keyExtractor={item => String(item)}
      renderItem={({item})=> <CarCard data={carDataOne}/>}
    />
  </Container>
);
}