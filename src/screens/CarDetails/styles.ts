import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator:false
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarImagesContent = styled.View``;

export const Description = styled.View`
 flex-direction: column;
`;

export const Brand = styled.Text`
  font-family: ${({theme})=>theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: 10px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme})=>theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: 25px;
`;

export const Rent = styled.View`

`;

export const Period = styled.Text`
  font-family: ${({theme})=>theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: 10px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme})=>theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.main};
  font-size: 25px;
`;

export const About = styled.Text`
  font-family: ${({theme})=>theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: 15px;

  text-align: justify;
  margin-top: 23px; 
  line-height: ${RFValue(25)}px;
`;

export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top:16px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme})=> theme.colors.background_primary};

  padding: 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`;