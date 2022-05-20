import React from 'react'
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export function SchedullingComplete() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  
  function handleHome() {
    navigation.navigate('Home')
  }
return (
  <Container>
    <StatusBar 
      barStyle="light-content"
      translucent
      backgroundColor='transparent'
    />
      <LogoSvg width={width} />

      <Content>
          <DoneSvg/>
          <Title>Carro alugado!</Title>

          <Message>
              Agora você só precisa ir {'\n'}
              até a concessionária de RENTX {'\n'}
              pegar o seu automóvel
          </Message>
      </Content>
      <Footer>
        <ConfirmButton title='OK' onPress={handleHome}/>
      </Footer>

  </Container>
);
}