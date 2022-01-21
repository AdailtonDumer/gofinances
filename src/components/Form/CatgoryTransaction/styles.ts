import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 18px 16px;
    border-radius: 5px;
`;

export const Selected = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    ${({children}) => children?.toString() == 'Categoria' ? css`
        color: ${({ theme }) => theme.colors.text};
    `: css`
        color: ${({ theme }) => theme.colors.text_dark};
    `}
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
`;
