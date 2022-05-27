import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons'

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate
} from './styles';
import { CarCard } from '../../components/CarCard/index.';

interface CarProps{
    user_id: string;
    car: CarDTO;
    id: string;
    startDate: string;
    endDate: string;
}
  

export function MyCars() {
    const [cars,setCars] = useState<CarProps[]>([]);
    const [loading,setLoading] = useState(true);
    const theme = useTheme();
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack()
      }

    useEffect(() => {
      async function fetchCars() {
          try {
              const response = await api.get('/schedules_byuser?user_id=1');
              setCars(response.data);
          } catch (error) {
              console.log(error);
          }
          finally{
              setLoading(false);
          }
      }

      fetchCars();
    },[]);
return (
  <Container>
      <Header>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
        />
          <BackButton 
              onPress={handleGoBack}
              color={theme.colors.shape}
            />
          <Title>
              Seus agendamentos, {'\n'}
              estão aqui.
        </Title>
        <Subtitle>
            Conforto, segurança e praticidade.
        </Subtitle>
        </Header>

        <Content>

            <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                <AppointmentsQuantity> 05 </AppointmentsQuantity>
            </Appointments>

            <FlatList
                data={cars}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <CarWrapper>
                        <CarCard data={item.car}/>
                        <CarFooter>
                            <CarFooterTitle>Período</CarFooterTitle>
                            <CarFooterPeriod>
                                <CarFooterDate>{item.startDate}</CarFooterDate>
                                <AntDesign
                                    name='arrowright'
                                    size={20}
                                    color={theme.colors.title}
                                    style={{marginHorizontal:10}}
                                />
                                <CarFooterDate>{item.endDate}</CarFooterDate>
                            </CarFooterPeriod>
                        </CarFooter>
                    </CarWrapper>
                )}
            />
        </Content>
  </Container>
);
}