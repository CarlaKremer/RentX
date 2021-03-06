import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import { CarCard } from '../../components/CarCard/index.';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg'
import {
  Container, 
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyButtonList
} from './styles';
import { useTheme } from 'styled-components';


export function Home(){
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loadingData, setLoadingData] = useState(true)
  const theme = useTheme();


  function handleCarDetails(car : CarDTO) {
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars')
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
            onPress={() => (handleCarDetails(item))}
          />
      }
    />
  }
    <MyButtonList onPress={handleOpenMyCars}>
      <Ionicons 
        name="ios-car-sport"
        size={32}
        color={theme.colors.shape}
        />
    </MyButtonList>
  </Container>
);
}