import React, { useState }from 'react'
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { getPlatformDate } from "../../utils/getPlatformDate";
import ArrowSvg from '../../assets/arrow.svg'

import {
  Container, 
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Button } from '../../components/Button';
import { 
  Calendar, 
  DayProps, 
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface CarDTOParams {
  car: CarDTO
}

export function Schedulling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const route = useRoute();
  const { car } = route.params as CarDTOParams;
  const navigation = useNavigation();
  const theme = useTheme();
  

    function handleGoBack() {
      navigation.goBack()
    }
    function handleConfirmRental() {
        navigation.navigate('SchedullingDetails',{
          car,
          dates: Object.keys(markedDate)
        })
    }

    function handleChangeDate(date: DayProps){
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
      let end = date;
      if(start.timestamp > end.timestamp){
        start = end;
        end = start;
      }

      setLastSelectedDate(end);
      const interval = generateInterval(start, end);
      setMarkedDate(interval);

      const firstDate = Object.keys(interval)[0];
      const endDate = Object.keys(interval)[Object.keys(interval).length -1];

      setRentalPeriod({
        startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
        endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
      })

    }
return (
  <Container>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
        <Header>
          <BackButton 
              onPress={handleGoBack}
              color={theme.colors.shape}
            />
          <Title>
              Escolha uma {'\n'}
              data de início e {'\n'}
              fim do aluguel 
        </Title>

        <RentalPeriod>
            <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>

            <ArrowSvg/>
            
            <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
            </DateInfo>
        </RentalPeriod>
        </Header>

        <Content>
          <Calendar
            markedDates={markedDate}
            onDayPress={handleChangeDate}
          />
        </Content>

        <Footer>
          <Button 
            title='Confirmar'
            onPress={handleConfirmRental}
            enabled={!!rentalPeriod.startFormatted}
          />
        </Footer>
  </Container>
);
}