import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps{
    color: string
}
interface ButtonTextProps extends RectButtonProps{
    light: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 56px;

  padding: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({color})=> color };
  margin-bottom: 8px;
`;

export const Text = styled.Text<ButtonTextProps>`
  font-family: ${({theme})=>theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme,light}) => 
    light? theme.colors.header : theme.colors.shape};
`;

