import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color:${({theme})=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({theme})=> theme.colors.header};
  padding-top:${getStatusBarHeight() + 30}px ;
  padding: 25px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(34)}px;
  font-family: ${({theme})=> theme.fonts.secondary_600};
  color: ${({theme})=> theme.colors.shape};
  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.secondary_400};
  color: ${({theme})=> theme.colors.shape};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0px 16px;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_400};
  color: ${({theme})=> theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_500};
  color: ${({theme})=> theme.colors.title};
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme})=> theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme})=> theme.fonts.secondary_500};
  color: ${({theme})=> theme.colors.text_detail};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  
  
`;

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({theme})=> theme.fonts.primary_400};
  color: ${({theme})=> theme.colors.title};
`;
