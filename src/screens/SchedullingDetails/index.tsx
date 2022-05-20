import React from 'react'
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {Feather} from '@expo/vector-icons'
import speedSVG from '../../assets/speed.svg'
import accelerationSVG from '../../assets/acceleration.svg'
import forceSVG from '../../assets/force.svg'
import gasolineSVG from '../../assets/gasoline.svg'
import exchangeVG from '../../assets/exchange.svg'
import peopleSVG from '../../assets/people2.svg'

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
  Acessories,
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
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export function SchedullingDetails() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack()
  }
  function handleSchedullingComplete() {
    navigation.navigate('SchedullingComplete')
  }
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
          imageUrl={['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F10%2F2019%2F01%2F2019-audi-rs5-coupe-angular-front.png&f=1&nofb=1']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 360</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380km/h" icon={speedSVG}/>
          <Acessory name="3.2seg" icon={accelerationSVG}/>
          <Acessory name="800HP" icon={forceSVG}/>
          <Acessory name="gasolina" icon={gasolineSVG}/>
          <Acessory name="exchange" icon={exchangeVG}/>
          <Acessory name="2 pessoas" icon={peopleSVG} />
        </Acessories>

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
          <DateValue>18/05/2022</DateValue>
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
          <DateValue>18/05/2022</DateValue>
        </DateInfo>
      </RentalPeriod>

    <RentalPrice>
      <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>R$ 500 x3 Diárias</RentalPriceQuota>
          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RentalPriceDetails>
    </RentalPrice>

      </Content>
      

      <Footer>
        <Button
          title='Alugar agora'
          onPress={handleSchedullingComplete}
          color= {themes.colors.success}
        />
      </Footer>

  </Container>
);
}