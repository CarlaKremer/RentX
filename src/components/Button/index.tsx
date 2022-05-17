import React from 'react'

import {
  Container, Text
} from './styles';

interface Props{
    title:string;
    color? : string
    onPress: () => void
}


export function Button({title, color, ...rest}:Props) {
return (
  <Container {...rest} color={color}>
      <Text >{title}</Text>
  </Container>
);
}