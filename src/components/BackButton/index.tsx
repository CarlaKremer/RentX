import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import {
  Container
} from './styles';
import themes from '../../styles/themes';

interface Props extends BorderlessButtonProps {
    color? :string;
    onPress: ()=> void
}

export function BackButton({color, ...rest}:Props) {
return (
  <Container {...rest} >
      <MaterialIcons
        name='chevron-left'
        size={24}
        color= {color ? color : themes.colors.text}
      />
  </Container>
);
}