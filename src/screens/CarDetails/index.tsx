import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
  Footer
} from './styles';


interface CarDTOParams {
  car: CarDTO
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarDTOParams;

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSchedulling() {
    navigation.navigate('Schedulling')
  }

return (
  <Container>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="transparent"
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
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 360</Price>
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
        <About>
         {car.about}
        </About>
      </Content>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleSchedulling}
        />
      </Footer>

  </Container>
);
}