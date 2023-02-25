import React from 'react'
import {Feather} from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import {
  Container
} from './styles';

export function Input() {
  const theme = useTheme();
return (
  <Container>
    <Feather/>
  </Container>
);
}