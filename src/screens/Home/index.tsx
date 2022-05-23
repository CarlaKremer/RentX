import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import { CarCard } from '../../components/CarCard/index.';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';

import Logo from '../../assets/logo.svg'
import {
  Container, 
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';


export function Home(){
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loadingData, setLoadingData] = useState(true)

  const carDataOne = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent:{
        period: 'ao dia',
        price: '120',
      },
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F10%2F2019%2F01%2F2019-audi-rs5-coupe-angular-front.png&f=1&nofb=1'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
  }

useEffect(() => {
  async function fetchCars(){ 
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    }catch (error) {
      console.log(error)
    }
    finally{
      setLoadingData(false);
    }
  }
  fetchCars();
},[]);

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
    { loadingData ? <Load /> : 
    <CarList
      data={cars}
      keyExtractor={item => item.id}
      renderItem={({item})=> 
        <CarCard 
          data={item}  
          onPress={handleCarDetails}
        />
        
      }
    />
  }
  </Container>
);
}