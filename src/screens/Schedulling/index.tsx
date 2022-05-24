import React from 'react'
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

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
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function Schedulling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps)
    const navigation = useNavigation();
    const theme = useTheme();

    function handleGoBack() {
      navigation.goBack()
    }
    function handleSchedulling() {
      navigation.navigate('SchedullingDetails')
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
                <DateValue selected={false}>18/05/2022</DateValue>
            </DateInfo>

            <ArrowSvg/>
            
            <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={false}>18/05/2022</DateValue>
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
            onPress={handleSchedulling}
          />
        </Footer>
  </Container>
);
}