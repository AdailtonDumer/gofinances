import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import {  RFValue } from 'react-native-responsive-fontsize';

interface TypeProp {
    type: 'income'|'outcome'|'total'
}

export const Container = styled.View<TypeProp>`
    width: ${RFValue(300)}px;
    background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
    border-radius: 5px;
    padding: 18px 22px;
    padding-bottom: ${RFValue(28)}px; 
    margin: 0 5px;
`;

export const Header = styled.View`
    flex-direction:row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProp>`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProp>`
    font-size: ${RFValue(42)}px;

    ${(props) => props.type === 'income' && css`
        color: ${({theme}) => theme.colors.success};
    `} 
     ${(props) => props.type === 'outcome' && css`
        color: ${({theme}) => theme.colors.attention};
    `}
     ${(props) => props.type === 'total' && css`
        color: ${({theme}) => theme.colors.shape};
    `}
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text<TypeProp>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};

`;

export const LastTransaction = styled.Text<TypeProp>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};

`;
