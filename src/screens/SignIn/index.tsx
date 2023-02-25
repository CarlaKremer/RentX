import React from 'react'
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import themes from '../../styles/themes';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Footer,
  Form,
} from './styles';

export function SignIn() {
return (
  <Container>
    <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
    />
    <Header>
        <Title>
            Estamos {'\n'}quase lá
        </Title>
        <Subtitle>
            Faça seu login para começar{'\n'}uma experiência incrível
        </Subtitle>
    </Header>
    <Form>
        <Input/>
    </Form>

    <Footer>
        <Button
            title='Login'
            onPress={()=>{}}
            enabled={true}
            loading={false}
        />
        <Button
            title='Criar conta gratuita'
            color={themes.colors.background_secondary}
            onPress={()=>{}}
            enabled={true}
            loading={false}
            light={true}
        />
    </Footer>
  </Container>
);
}