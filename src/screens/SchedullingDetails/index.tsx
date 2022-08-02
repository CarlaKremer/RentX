import React, { useEffect, useState } from 'react'
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {Feather} from '@expo/vector-icons'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { RFValue } from 'react-native-responsive-fontsize';
import themes from '../../styles/themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, StatusBar } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';


interface CarDTOParams {
  car: CarDTO
  dates: string[];
}

interface RentalPeriod{
  start: string,
  end: string
}

export function SchedullingDetails() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as CarDTOParams;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const rentTotal = Number(dates.length * car.rent.price)

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSchedullingComplete() {
    setLoading(true);
    
    const schedullesByCar = await api.get(`./schedules_bycars/${car.id}`)
    const unavailable_dates =[
      ...schedullesByCar.data.unavailable_dates,
      ...dates
    ];

    api.post('schedules_byuser',{
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    });
    api.put(`./schedules_bycars/${car.id}`,{
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedullingComplete'))
    .catch(()=> {
      setLoading(false);
      Alert.alert("não foi possivel realizar agendamento");
  })

  }

useEffect(() => {
  setRentalPeriod({
    start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
    end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
  })
},[]);
  
return (
  <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor='transparent'
      />
      <Header>
        
          <BackButton onPress={handleGoBack}/>
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={[car.thumbnail]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{"R$ "+ car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory =>(
              <Acessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}/>
            ))
          }
        </Accessories>

      <RentalPeriod>
        <CalendarIcon>
          <Feather
            name="calendar"
            size={RFValue(32) }
            color={themes.colors.shape}
          />
        </CalendarIcon>
        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>{rentalPeriod.start}</DateValue>
        </DateInfo>
      
        <CalendarIcon>
          <Feather
            name="calendar"
            size={RFValue(32) }
            color={themes.colors.shape}
          />
        </CalendarIcon>
        <DateInfo>
          <DateTitle>ATÉ</DateTitle>
          <DateValue>{rentalPeriod.end}</DateValue>
        </DateInfo>
      </RentalPeriod>

    <RentalPrice>
      <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} Diárias`}</RentalPriceQuota>
          <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
        </RentalPriceDetails>
    </RentalPrice>

      </Content>
      

      <Footer>
        <Button
          title='Alugar agora'
          onPress={handleSchedullingComplete}
          color= {themes.colors.success}
          enabled={!loading}
          loading={loading}
        />
      </Footer>

  </Container>
);
}